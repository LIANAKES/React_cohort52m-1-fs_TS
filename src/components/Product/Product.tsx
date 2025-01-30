import { ProductProps } from "./types";
import {ProductWrapper, ProductName, ProductPrice } from "./styles";
  
function Product({ name, price }:ProductProps) {
    return (
      <ProductWrapper>
      <ProductName>{name}</ProductName>
      <ProductPrice>Price: ${price}</ProductPrice>
      </ProductWrapper>
    );
  }
  
  export default Product;