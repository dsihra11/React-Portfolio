import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 40px;

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }

  @media screen and  (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }
`;
