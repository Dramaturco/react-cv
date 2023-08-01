import { Rating } from "../Generic";
import { useState, Fragment } from "react";
import SkillName from "../Generic/SkillName";
import { styled } from "styled-components";

const SkillEntry = ({ name, rating, comments }) => {

  const Entry = styled.div`
    display: flex;
    padding: 1rem;
    gap: 2rem;
    align-items: center;
    `

  return (
    <Entry>
      <SkillName gradient>{name}</SkillName>

        <Rating value={rating} max={5} />

    </Entry>
  );
};

export default SkillEntry;
