import styled from "styled-components";

interface IStyleCardProps {
  layout?: string;
};


export const StyledCard = styled.div<IStyleCardProps>`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px;
  padding: 60px;
  flex-direction: ${({ layout }) => layout};
  
  img {
    width: 80%auto;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
