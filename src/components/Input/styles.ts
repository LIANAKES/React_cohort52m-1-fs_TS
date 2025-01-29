import styled from "@emotion/styled";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  `;
    
export const StyledInput = styled.input`
      width: 470px;
      height: 78px;
      gap: 4px;
      padding: 8px;
      border: 1px solid #83d47c;
      border-radius: 4px;
      text-align: center; 

      &:focus {
    border-color: #25ca08;
    box-shadow: 0 0 5px rgba(47, 214, 225, 0.5);
    outline: none;
  }
`;
  export const StyledLabel = styled.label`
      margin-bottom: 5px;
      font-weight: bold;
      text-align: center;
   `;
  
  