import React from 'react';

import { Link } from 'react-router-dom';
import rentCategoryImage from '../components/layouts/assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../components/layouts/assets/jpg/sellCategoryImage.jpg';

function Explore() {
  return (
    <div>
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        <p className="exploreCategoryHeading">Categorie</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={rentCategoryImage} alt="rent" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img src={sellCategoryImage} alt="sell" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for sell</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
