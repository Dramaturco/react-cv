import { useContext } from "react";
import LanguageContext from "./LanguageContext";
const languages = [
  { code: "en", name: { en: "English", de: "Englisch" } },
  { code: "de", name: { en: "German", de: "Deutsch" } },
];
const LanguageSwitch = () => {
  const [selectedLanguage, setLanguage] = useContext(LanguageContext);
  const selectLanguage = (e) => {
    setLanguage(languages.find((language) => language.code === e.target.value));
  };
  return (
    <select
      value={selectedLanguage.code}
      onBlur={selectLanguage}
      onChange={selectLanguage}
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name[selectedLanguage.code]}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitch