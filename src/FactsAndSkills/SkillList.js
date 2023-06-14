import ToolTip from "../Generic/ToolTip";
import SkillEntry from "./SkillEntry";

const SkillList = ({ skills, proficiency, tooltip }) => {
  return (
    <div>
      <ToolTip text={tooltip}>
        <h4>{proficiency}</h4>
          </ToolTip>
        <ul className="skill-list">
          {skills.map((skill) => (
            <SkillEntry skill={skill} />
          ))}
        </ul>
    </div>
  );
};

export default SkillList;
