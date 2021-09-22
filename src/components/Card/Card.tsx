import React, { memo } from "react";
import { IContent } from "../../reducers";
import { StyledCard } from "../styles/Card.styled";

export const Card: React.FC<IContent> = memo((props) => {
  const { id, title, body, image } = props;

  return (
    <StyledCard layout={id % 2 === 0 ? "row-reverse" : "row"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledCard>
  );
});
