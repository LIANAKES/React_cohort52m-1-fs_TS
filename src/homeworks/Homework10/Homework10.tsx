import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import {Wrapper, StyledInput, ImageContainer, ErrorMessage , Spinner } from "./styles"

function Homework10 ()  {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
  
    const fetchDogImage = async () => {
      const DOG_URL = "https://dog.ceo/api/breeds/image/random";
      setImageUrl(null);
      setError(null);
  
      try {
        setLoading(true);
        const result = await axios.get(DOG_URL);
        setImageUrl(result.data.message);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (inputValue1) {
        fetchDogImage();
      }
    }, [inputValue1]);
  
    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue1(event.target.value);
    };
  
    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue2(event.target.value);
    };
  
    return (
      <Wrapper>
        <StyledInput type="text" placeholder="Введите текст 1..." value={inputValue1} onChange={handleChange1} />
        <StyledInput type="text" placeholder="Введите текст 2..." value={inputValue2} onChange={handleChange2} />
        {loading && <Spinner />}
        {error && <ErrorMessage>Ошибка: {error}</ErrorMessage>}
        {imageUrl && (
          <ImageContainer>
            <img src={imageUrl} alt="Dog" />
          </ImageContainer>
        )}
      </Wrapper>
    );
  };
  
  export default Homework10;
  