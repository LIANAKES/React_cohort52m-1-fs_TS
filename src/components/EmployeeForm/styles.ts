import styled from "@emotion/styled";

export const FormContainer = styled.form`
 display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
  background-color: #dbf684;
`;


export const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ErrorText = styled.span`
color: red;
color: red;
  font-size: 12px;
  margin-top: 4px;
`;

