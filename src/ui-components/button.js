import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px 0;
  padding: 12px;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 16px;
  color: white;
  background: linear-gradient(to right, var(--rose), var(--orange));
  &:hover {
    background: var(--blue);
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default ButtonStyled;
