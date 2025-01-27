import { ProductProps } from "./types";
import "./styles.css"
  
function Product({ name, price }:ProductProps) {
    return (
      <div className="product">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
      </div>
    );
  }
  
  export default Product;