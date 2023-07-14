import { useContext } from "react";
import { Image } from "./Generic";
import LanguageContext from "./LanguageContext";
import { LanguageList, SkillList } from "./FactsAndSkills";
import { Timeline } from "./Timeline";
import { ProjectList } from "./Projects";
import { Intro } from "./TopBar";

const Page = ({ content }) => {
  const [selectedLanguage] = useContext(LanguageContext);
  const imageUrl = new URL(
    "../assets/images/emre-2.png?as=webp&width=282",
    import.meta.url
  );
  const languageData = content[selectedLanguage.code].find(
    (section) => section.type === "Languagelist"
  );
  const skillData = content[selectedLanguage.code].find(
    (section) => section.type === "Skills"
  )
  const timelineData = content[selectedLanguage.code].find(
    (section) => section.type === "Timeline"
  );
  const projectData = content[selectedLanguage.code].find(
    (section) => section.type === "Projects"
  );

  return (
    <div className="page">
      <Intro text="Test" imageUrl={imageUrl} alt="Emre Neumann"/>
      <div className="grid-container">
        {languageData && (
          <div className="box facts-and-skills">
            <section className="picture">
              <Image imageUrl={imageUrl} alt="Emre Neumann" />

              <h1>Emre Neumann</h1>

              <h2>Frontend Developer</h2>
            </section>
            <section>
              <h3>{languageData.title}</h3>
              <LanguageList list={languageData.content} />
            </section>
            <section>
              <h3>{skillData.title}</h3>
              {skillData.content.map((skillset) => (
                <SkillList
                  skills={skillset.skills}
                  proficiency={skillset.proficiency}
                  tooltip={skillset.tooltip}
                />
              ))}
            </section>
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
