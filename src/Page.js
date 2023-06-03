import { useContext } from "react";
import { AiFillGithub, AiFillPrinter } from "react-icons/ai";
import { Image } from "./Generic";
import LanguageContext from "./LanguageContext";
import { LanguageList } from "./FactsAndSkills";
import LanguageSwitch from "./TopBar/LanguageSwitch";
import { Timeline } from "./Timeline";
import { ProjectList } from "./Projects";
import ButtonLink from "./Generic/ButtonLink";

const Page = ({ content }) => {
  const [selectedLanguage] = useContext(LanguageContext);
  const imageUrl = new URL(
    "../assets/images/emre.jpg?as=webp&width=200",
    import.meta.url
  );
  const languageData = content[selectedLanguage.code].find(
    (section) => section.type === "Languagelist"
  );
  const timelineData = content[selectedLanguage.code].find(
    (section) => section.type === "Timeline"
  );
  const projectData = content[selectedLanguage.code].find(
    (section) => section.type === "Projects"
  );

  return (
    <div className="page">
      <div className="buttons">
        <LanguageSwitch />
        <ButtonLink onClick={() => window.print()} className="no-print">
          <AiFillPrinter />
        </ButtonLink>
        <ButtonLink className="no-print">
          <AiFillGithub />
        </ButtonLink>
      </div>
      <div className="grid-container">
        <div className="box picture">
          <Image imageUrl={imageUrl} alt="Emre Neumann" />
          <h1>Emre Neumann</h1>
          <h2>Frontend Developer</h2>
        </div>
        {languageData && (
          <div className="box facts-and-skills">
            <h3>{languageData.title}</h3>
            <LanguageList list={languageData.content} />
          </div>
        )}
        {timelineData && (
          <div className="box timeline">
            <h3>{timelineData.title}</h3>
            <Timeline entries={timelineData.content} />
          </div>
        )}
        {projectData && (
          <div className="box projects">
            <h3>{projectData.title}</h3>
            <ProjectList projects={projectData.content} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
