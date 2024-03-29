import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-light mb-3">
                <div class="container">
                  <a class="navbar-brand">
                    <Link to="/">
                      <img
                        class='img50 d-none d-xl-block'
                        src="https://metalit.oss-ap-southeast-5.aliyuncs.com/static/metalit/assets/images/Group_38_1.png"
                      />
                    </Link>
                  </a>

                  <button 
                    class="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    {categories.map((category, i) => {
                      return (
                        <li class="nav-item text-uppercase px-2" key={category.slug}>
                          <Link
                            to={`/category/${category.slug}`}
                            className="uk-link-reset"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </nav>

            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;