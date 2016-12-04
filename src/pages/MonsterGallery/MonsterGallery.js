import React from 'react';
import galleryImages from './galleryImages';

const MonsterGallery = () => {
  const markedUpImages = galleryImages.map((image, index) => (
    <div key={index} className="col-lg-3">
      <img src={process.env.PUBLIC_URL + image.imgPath} className={image.className} alt={image.description}/>
    </div>
  ));
  return (
    <div className="content container flex-row" style={{maxWidth: 850, flexWrap: 'wrap', justifyContent: 'flex-start'}}>
      <div className="col-xs-12">
        <p className="opening">
          If you have a desire to contribute art to be voted on, please submit your artwork to
          monsterfactions@yahoo.com. Please give us a few days to get it up on the site for others to enjoy.
        </p>
      </div>
      {markedUpImages}
    </div>
  );
};

export default MonsterGallery;
