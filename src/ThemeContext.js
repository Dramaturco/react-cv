import { createContext } from "react";

const ThemeContext = createContext([
  {
    accentColor: "#6736CF",
    primaryColor: "#98C9E4",
    secondaryColor: "#36CFB4",
  },
  () => {},
]);

export default ThemeContext;
