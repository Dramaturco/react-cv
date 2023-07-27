import React from "react";
import { styled } from "styled-components";

export default function Hobbies({ hobbies }) {
  const Hobby = styled.span`
    font-size: 4rem;
    margin: 0.5em;
  `;
  return (
    <div>
      {hobbies.map((hobby) => (
        <Hobby key={hobby.name}>{hobby.emoji}</Hobby>
      ))}
    </div>
  );
}
