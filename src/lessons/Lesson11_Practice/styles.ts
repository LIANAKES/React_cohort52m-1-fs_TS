import styled from '@emotion/styled';

export const Lesson11Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 20px;
  justify-content: center;
  min-height: 100vh;
  background-color: #d8ea95;
  padding: 40px;
  text-align: center; 
`;

export const FactContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  max-height: 700px; /* Ограничение по высоте */
  overflow-y: auto; /* Добавляем скролл */
`;
interface ButtonProps {
  variant?: "primary" | "danger";
}

export const Button = styled.button<ButtonProps>`
   width: 100%;
  max-width: 320px;
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  transition: background 0.3s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.variant === "danger" ? "#b52b3a" : "#0056b3")};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s linear infinite;
  margin-top: 10px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
