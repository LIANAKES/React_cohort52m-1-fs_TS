import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Species = styled.div`
  font-size: 1rem;
  margin-bottom: 12px;
  color: #666;
`;

export const Title = styled.h3`
font-size: 1.5rem;
margin: 0;
margin-bottom: 8px;
color: #333;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
`;
