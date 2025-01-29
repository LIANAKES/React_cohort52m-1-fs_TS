import { AnimalCardProps } from "./types";
import {CardWrapper, Species , Title, Image} from "./styles"
  


function AnimalCard({ animalName, animalSpecies, animalImg, children }:AnimalCardProps ) {

    return (
      <CardWrapper>
      <Title>{animalName}</Title>
      <Species>{animalSpecies}</Species>
      <Image src={animalImg} alt={`${animalName} image`} />
        {/* prop children позволяет добавлять дополнительную структуру(JSX, компоненты) в компонент */}
        {children}
        </CardWrapper>
    );
  }
  
  export default AnimalCard; 