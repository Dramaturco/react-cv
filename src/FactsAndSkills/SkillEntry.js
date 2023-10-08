import { Rating } from "../Generic";
import SkillName from "../Generic/SkillName";

const SkillEntry = ({ name, rating, comments }) => {

  //TODO: add tooltip with comments
  return (
    <div className="skill-entry">
      <SkillName gradient>{name}</SkillName>

      <Rating value={rating} max={5} />
    </div>
  );
};

export default SkillEntry;
