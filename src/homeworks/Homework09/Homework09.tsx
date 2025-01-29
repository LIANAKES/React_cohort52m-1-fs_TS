import { useState } from "react";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Container, Title, OutputWrapper, OutputItem} from "./styles";


function Homework09 ()  {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [output1, setOutput1] = useState<string>('');
  const [output2, setOutput2] = useState<string>('');

  const handleButtonClick = () => {
    setOutput1(input1);
    setOutput2(input2);
  };

  return (
    <Container>
      <Title>Homework09</Title>

      <Input
        name="input1"
        id="input1"
        type="text"
        placeholder="Введите значение 1"
        value={input1} 
        onChange={(e) => setInput1(e.target.value)}
      />
      <Input
        name="input2"
        id="input2"
        type="text"
        placeholder="Введите значение 2"
        label="Значение 2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />

      <Button onClick={handleButtonClick}>Отобразить значения</Button>

      <OutputWrapper>
        <OutputItem>Значение 1: {output1}</OutputItem>
        <OutputItem>Значение 2: {output2}</OutputItem>
      </OutputWrapper>
    </Container>
  );
};

export default Homework09;