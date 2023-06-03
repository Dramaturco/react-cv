import { useContext } from "react";
import LanguageContext from "../LanguageContext";
const languages = [
  { code: "en", name: { en: "English", de: "Englisch" } },
  { code: "de", name: { en: "German", de: "Deutsch" } },
];
const LanguageSwitch = () => {
  const [selectedLanguage, setLanguage] = useContext(LanguageContext);
  return (
    <div className="language-switch">
      {languages.map((language) => (
        <div key={language.code} className={`item${selectedLanguage.code === language.code ? " selected" : ""}`} onClick={() => setLanguage(language)}>
          {language.code}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitch