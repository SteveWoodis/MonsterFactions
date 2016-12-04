import React from 'react';

const MonsterGear = () => (
  <div className="content flex-row" style={{width: '100%'}}>
    <div>
      <p className="text-info ng-scope">
        Welcome to the MonsterFactions Store.<br/>
        Please select the products you want and add them to your shopping cart.<br/>
        When you are done, click the shopping cart icon to review your order and check out.
      </p>

      <table className="table table-bordered ng-scope">
        <tbody>
        <tr className="well">
          <td className="tdRight" colSpan="4">
            <a href="/#/cart" title="go to shopping cart" disabled="disabled">
              <i className="icon-shopping-cart">
                <b className="ng-binding">0</b> items, <b className="ng-binding">$0.00</b>
              </i></a><i className="icon-shopping-cart">
          </i></td>
        </tr>
        <tr className="ng-scope">
          <td className="tdCenter"><img alt="Werevolf" className="picture" src="assets/img/products/were-t.jpg"/></td>
          <td className="ng-binding">
            <a href="#/products/were-t"><b className="ng-binding">Werevolf</b></a><br/>
            Run as fast as you can!
          </td>
          <td className="tdRight ng-binding">
            $19.99
          </td>
          <td className="tdCenter">
            <a>
              add to cart
            </a>
          </td>
        </tr>
        <tr className="ng-scope">
          <td className="tdCenter"><img alt="Werevolf" className="picture" src="assets/img/products/were-t.jpg"/></td>
          <td className="ng-binding">
            <a href="#/products/were-t"><b className="ng-binding">Werevolf</b></a><br/>
            Run as fast as you can!
          </td>
          <td className="tdRight ng-binding">
            $19.99
          </td>
          <td className="tdCenter">
            <a>
              add to cart
            </a>
          </td>
        </tr>
        <tr className="ng-scope">
          <td className="tdCenter"><img alt="Werevolf" className="picture" src="assets/img/products/were-t.jpg"/></td>
          <td className="ng-binding">
            <a href="#/products/were-t"><b className="ng-binding">Werevolf</b></a><br/>
            Run as fast as you can!
          </td>
          <td className="tdRight ng-binding">
            $19.99
          </td>
          <td className="tdCenter">
            <a>
              add to cart
            </a>
          </td>
        </tr>
        <tr className="ng-scope">
          <td className="tdCenter"><img alt="Werevolf" className="picture" src="assets/img/products/were-t.jpg"/></td>
          <td className="ng-binding">
            <a href="#/products/were-t"><b className="ng-binding">Werevolf</b></a><br/>
            Run as fast as you can!
          </td>
          <td className="tdRight ng-binding">
            $19.99
          </td>
          <td className="tdCenter">
            <a>
              add to cart
            </a>
          </td>
        </tr>
        <tr className="ng-scope">
          <td className="tdCenter"><img alt="Werevolf" className="picture" src="assets/img/products/were-t.jpg"/></td>
          <td className="ng-binding">
            <a href="#/products/were-t"><b className="ng-binding">Werevolf</b></a><br/>
            Run as fast as you can!
          </td>
          <td className="tdRight ng-binding">
            $19.99
          </td>
          <td className="tdCenter">
            <a>
              add to cart
            </a>
          </td>
        </tr>

        <tr className="well">
          <td className="tdRight" colSpan="4">
            <a href="/#/cart" title="go to shopping cart" disabled="disabled">
              <i className="icon-shopping-cart">
                <b className="ng-binding">0</b> items, <b className="ng-binding">$0.00</b>
              </i></a><i className="icon-shopping-cart">
          </i></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MonsterGear;
