import {InputWrapper, StyledInput,StyledLabel } from "./styles";
import { InputProps } from "./types";


    function Input({ name, type, placeholder, label, id }: InputProps)  {
  return (
    <InputWrapper>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput id={id} name={name} type={type} placeholder={placeholder} />
  </InputWrapper>
  );
};

export default Input;