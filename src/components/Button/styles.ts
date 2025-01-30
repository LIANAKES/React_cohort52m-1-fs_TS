import styled from "@emotion/styled";

export const MainButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#d6d6d6" : "#007bff")};
  color: ${(props) => (props.disabled ? "#999" : "#fff")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#d6d6d6" : "#0056b3")};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
