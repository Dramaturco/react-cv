import React, { useState } from "react";
import { render } from "react-dom";
import Page from "./Page";
import LanguageContext from "./LanguageContext";
import * as data from "./Defaults/data-lorem.json";

const App = () => {
  const language = useState({ code: "de", name: { en: "German", de: "Deutsch" } });
  return (
    <LanguageContext.Provider value={language}>
      <Page content={data.content}/>
    </LanguageContext.Provider>
  )
};

render(React.createElement(App), document.getElementById("root"));
