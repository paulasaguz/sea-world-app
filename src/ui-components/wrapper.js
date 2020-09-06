import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export default Wrapper;
