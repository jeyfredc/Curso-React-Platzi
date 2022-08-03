import React,{ useContext }  from "react";
import "@styles/ProductItem.scss";
import add_to_cart from "@icons/bt_add_to_cart.svg"
import AppContext from "../context/AppContext";


const ProductItem = ({product}) => {

  const { addToCart} = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  }
  return (
    <div className="ProductItem">
      <img
        src={product.images}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={()=>handleClick(product)}>
          <img src={add_to_cart} alt="add_to_cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
