import "./styles.css";
import { InputProps } from "./types";


    function Input({ name, type, placeholder, label, id }: InputProps)  {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default Input;