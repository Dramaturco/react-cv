import LanguageEntry from "./LanguageEntry";
import { Fragment } from "react";

const LanguageList = ({ list }) => {
  return (
    <Fragment>
      {list.map((language) => (
        <LanguageEntry
          name={language.name}
          fluency={language.fluency}
          comments={language.comments}
          key={language.name}
        />
      ))}
    </Fragment>
  );
};

export default LanguageList;
