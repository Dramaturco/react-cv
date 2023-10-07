import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Page from "./Page";
import LanguageContext from "./LanguageContext";

const App = () => {
  const language = useState({
    code: "de",
    name: { en: "German", de: "Deutsch" },
  });
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    console.log("fetching data");
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/64e84eeab89b1e2299d5c0e7",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const json = await response.json();
    setData(json.record);
    setLoading(false);
  }, []);

  return (
    <LanguageContext.Provider value={language}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Page content={data.content} />
      )}
    </LanguageContext.Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
