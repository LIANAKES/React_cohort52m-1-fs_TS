import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { Lesson11Wrapper, InputsWrapper, Input, FactContainer, Button, ErrorMessage, Spinner } from "./styles";


function Lesson11() {
    const [search, setSearch] = useState<string>("");
    const [facts, setFacts] = useState<string[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const CAT_FACT_URL = "https://catfact.ninja/fact";
  
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    };
  
    const getCatFact = async () => {
      setError("");
      setIsLoading(true);
  
      try {
        const result = await axios.get(CAT_FACT_URL);
        setFacts((prevFacts) => [...prevFacts, result.data.fact]);
      } catch (error: any) {
        setError(error.response?.data?.message || "Failed to load data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
        getCatFact(); 
      }, []); 
  
  
    const handleDeleteAll = () => {
      setFacts([]);
    };
  
    return (
      <Lesson11Wrapper>
        <InputsWrapper>
          <Input name="search" placeholder="Enter value" value={search} onChange={onSearchChange} />
        </InputsWrapper>
        <Button onClick={getCatFact}>GET MORE INFO</Button>
        {facts.length > 0 && <Button onClick={handleDeleteAll}>DELETE ALL DATA</Button>}
        {isLoading && <Spinner />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {facts.length > 0 && (
          <FactContainer>
            {facts.map((fact, index) => (
              <p key={index}>{fact}</p>
            ))}
          </FactContainer>
        )}
      </Lesson11Wrapper>
    );
  }
  
  export default Lesson11;