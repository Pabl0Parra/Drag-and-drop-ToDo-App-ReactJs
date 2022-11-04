import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Todos from "./components/Todos";
import Header from "./components/Header";

function App() {
  const theme = useStore((state) => state.theme);
  const AppClasses = clsx({
    App: true,
    dark: theme === "dark",
  });
  return (
    <div className={AppClasses}>
      <Todos />
    </div>
  );
}

export default App;
