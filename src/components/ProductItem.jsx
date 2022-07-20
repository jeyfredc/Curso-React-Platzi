import React,{ useState }  from "react";
import "@styles/ProductItem.scss";
import add_to_cart from "@icons/bt_add_to_cart.svg"

const ProductItem = ({product, key}) => {

  const [cart, setCart] = useState('');

  const handleClick = () => {
    setCart("Hola Mundo");
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
        <figure onClick={handleClick}>
          <img src={add_to_cart} alt="add_to_cart" />
        </figure>
      {cart}
      </div>
    </div>
  );
};

export default ProductItem;
