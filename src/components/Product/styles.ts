import styled from "@emotion/styled";


export const ProductWrapper = styled.div`
    border: 1px solid #13ab25;
    border-radius: 8px;
    padding: 16px;
    margin: 8px 0;
    background-color: #de7e2b;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    
    &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
  
 export const ProductName = styled.h3`
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  `;
  
export const ProductPrice = styled.p`
    margin: 8px 0 0;
    font-size: 1rem;
    color: #555;
 `;