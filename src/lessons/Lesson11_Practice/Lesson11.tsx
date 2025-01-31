import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; 
import { Lesson11Wrapper,FactContainer, Button, ErrorMessage, Spinner } from "./styles";


function Lesson11() {
    const [facts, setFacts] = useState<{ id: string, text: string }[]>([]);
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

    const factList = facts.map((fact) => (
      <p key={fact.id}>{fact.text}</p>
    ));
  
    return (
      <Lesson11Wrapper>
        <Button onClick={getCatFact}>GET MORE INFO</Button>
        {facts.length > 0 && <Button onClick={handleDeleteAll}>DELETE ALL DATA</Button>}
        {isLoading && <Spinner />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {facts.length > 0 && 
           <FactContainer>{factList}</FactContainer>}
      </Lesson11Wrapper>
    );
  }
  
  export default Lesson11;
