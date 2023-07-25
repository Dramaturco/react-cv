import SkillEntry from "./SkillEntry";
import { Fragment } from "react";

const SkillList = ({ list }) => {
  return (
    <Fragment>
      {list.map((skill) => (
        <SkillEntry
          name={skill.name}
          rating={skill.rating}
          key={skill.name}
        />
      ))}
    </Fragment>
  );
};

export default SkillList;
