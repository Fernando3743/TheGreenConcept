import React from "react";
import Product from "./Product";

const products = [
  {
    imgSrc: "/man-smiling.jpeg",
    title: "Careers at The Avocado Show",
    size: "small",
    buttonLabel: "Join our team",
  },
  {
    imgSrc: "/avocado-plant.jpeg",
    title: "sustainable avocados",
    size: "small",
    buttonLabel: "read more",
  },
  {
    imgSrc: "/avocado-book.jpeg",
    title: "Merchandise & Gifts",
    size: "small",
    buttonLabel: "shop now",
  },
];

const Products = () => {
  return (
    <section className="bg-[#f2f2f2]">
      <div className="w-full px-20 pb-28 max-w-[1440px] mx-auto">
        <div className="-mt-20 relative w-full grid grid-cols-6 gap-20">
          <div className="col-span-3 row-span-1">
            <Product
              title="Pretty Healthy Food"
              buttonLabel="discover our menu"
              size="big"
              imgSrc="/salad-product.jpeg"
            />
          </div>
          <div className="col-span-3 row-span-1">
            <Product
              title="Our Restaurants"
              buttonLabel="view and book"
              size="big"
              imgSrc="/avocado-restaurant.jpeg"
            />
          </div>
          {products.map((i, j) => (
            <div key={j} className="col-span-2 row-span-1">
              <Product {...i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
