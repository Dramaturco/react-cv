import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";
import { SkillList } from "./FactsAndSkills";
import { Timeline } from "./Timeline";
import { Intro } from "./TopBar";

const Page = ({ content }) => {
  const [selectedLanguage] = useContext(LanguageContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const imageUrl = new URL(
    "./Defaults/cat.jpg?as=webp&width=256",
    import.meta.url
  );

  const introData = content[selectedLanguage.code].find(
    (section) => section.type === "Intro"
  );
  const languageData = content[selectedLanguage.code].find(
    (section) => section.type === "Languagelist"
  );
  const skillData = content[selectedLanguage.code].find(
    (section) => section.type === "Skills"
  );
  const timelineData = content[selectedLanguage.code].find(
    (section) => section.type === "Timeline"
  );
  const projectData = content[selectedLanguage.code].find(
    (section) => section.type === "Projects"
  );

  timelineData.content = timelineData.content.map((entry) => {
    if (entry.projects) {
      console.log(entry.projects);
      entry.projects = entry.projects.map((project) =>
        projectData.content.find(
          (projectEntry) => projectEntry.name === project
        )
      );
      entry.projects = {
        content: entry.projects,
        title: projectData.title,
      };
    }
    return entry;
  });

  return (
    <ThemeContext.Provider value={theme}>
      <div className="page">
        <Intro text={introData.content.text} imageUrl={imageUrl} />
        <div className="grid-container">
          <div className="left-column">
            <h3>{timelineData.title}</h3>
            <Timeline entries={timelineData.content} />
          </div>
          <div className="right-column">
            <h3>{languageData.title}</h3>
            <SkillList list={languageData.content} />
            <h3>{skillData.title}</h3>
            {skillData.content.map((skillset) => (
              <React.Fragment>
                <h4>{skillset.proficiency}</h4>
                <SkillList
                  list={skillset.skills}
                  key={skillset.proficiency}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Page;
