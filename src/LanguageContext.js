import { createContext } from "react";

const LanguageContext = createContext([{code: "en", "name": {"en": "English", "de": "Englisch"}}, () => {}]);

export default LanguageContext;