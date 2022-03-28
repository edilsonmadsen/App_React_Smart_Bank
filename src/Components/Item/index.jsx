import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text{
      font-weight: bold;
  }
`;

export default ({ type, from, value }) => {
  return (
    <Item>
      <span classname="text">{type}</span>
      <spam>{from}</spam>
      <span>{value}</span>
    </Item>
  );
};
