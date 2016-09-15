var express = require('express');
var Customer = require( './Customer.db');

const router = express.Router({
  mergeParams: true
});

function allCustomerRoutes(req, res, next) {
  console.log(req.method, ''+ req.baseUrl + req.url);
  next();
}

function getAllCustomers(req, res) {
  Customer.find(function(err, customers){
    res.send(customers);
  });
}

function getCustomer(req, res) {
  Customer.findOne({_id: req.params.id}, function(err, customer){
    if (err) {
      res.status(404).send('Customer with id ' + req.params.id + ' not found: ' + err);
    } else {
      res.send(customer);
    }
  });
}

function createCustomer(req, res) {
  Customer.create(req.body, function(err, customer){
    if (err || !customer) {
      res.status(400).send('Error - No customer created due to ' + err);
    } else {
      res.status(200).send(customer);
    }
  });
}

function updateCustomer(req, res) {
  Customer.update({_id: req.params.id}, req.body, function(err, response){
    if (err) {
      res.status(404).send('Customer with id ' + req.params.id + ' not found: ' + err);
    } else {
      res.send(response);
    }
  });
}

function deleteCustomer(req, res) {
  Customer.findById(req.params.id, function(err, customer){
    if (err || !customer) {
      res.status(400).send('Could not delete customer. No customer with id ' + req.params.id + ' could be found: ' + err)
    } else {
      customer.remove(function(err, customer){
        console.log('customer removed: ', customer);
        res.status(200).send({msg: 'customer with id ' + customer._id + '} successfully deleted', customer});
        Customer.findById(customer._id, function(err, customer){
          console.log('search for customer removed renders: ', customer);
        });
      });
    }
  });
}

router.use(allCustomerRoutes);

router.route('/')
  .get(getAllCustomers)
  .post(createCustomer);

router.route('/:id')
  .get(getCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports =  router;