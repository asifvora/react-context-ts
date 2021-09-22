import React, { memo } from "react";
import { Card } from "../Card";
import { IContent } from "../../reducers";
import { useMyContext } from "../../hooks/useMyContext";

export const Content: React.FC = memo(() => {
  const {
    state: { contents },
  } = useMyContext();

  return (
    <>
      {contents.map((item: IContent) => {
        return <Card key={item.id} {...item}/>;
      })}
    </>
  );
});
