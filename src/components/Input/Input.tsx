import {InputWrapper, StyledInput,StyledLabel } from "./styles";
import { InputProps } from "./types";


    function Input({ name, type, placeholder, label, id, value, onChange}: InputProps)  {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput 
        id={id} 
        name={name} 
        type={type} 
        placeholder={placeholder}
        value={value} // управляемое значение
        onChange={onChange} // обработчик изменения
      />
    </InputWrapper>
  );
}

export default Input;