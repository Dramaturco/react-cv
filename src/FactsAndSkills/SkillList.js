import SkillEntry from "./SkillEntry";

const SkillList = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <SkillEntry skill={skill} />
      ))}
    </div>
  );
};

export default SkillList;
