import LanguageSwitch from "./LanguageSwitch";
import { AiFillGithub, AiFillPrinter } from "react-icons/ai";
import { ButtonLink } from "../Generic";

const TopBar = () => {
  return (
    <div className="button-bar">
      <div className="button-bar-section">
        <LanguageSwitch />
      </div>
      <div className="button-bar-section"></div>
      <div className="button-bar-section">
        <div className="button-links">
          <ButtonLink onClick={() => window.print()} className="no-print">
            <AiFillPrinter />
          </ButtonLink>
          <ButtonLink className="no-print">
            <AiFillGithub />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
