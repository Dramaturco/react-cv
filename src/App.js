import React, { useState } from "react";
import { render } from "react-dom";
import Page from "./Page";
import Timeline from "./Timeline";
const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
const entries = [
  { year: "1983", month:"September", title: "Born in vienna", text: lorem, type: "Education" },
  { year: "1989", month:"September", title: "Elementary school", text: lorem, type: "Education" },
  { year: "1993", month:"September", title: "comprehensive school", text: lorem, type: "Education"  },
];
const App = () => {
  return <Timeline entries={entries} />;
};

render(React.createElement(App), document.getElementById("root"));
