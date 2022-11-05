import { useState } from "react";
import useStore from "./store/store";
import clsx from "clsx";
import "./App.scss";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import FloatingRadioFilter from "./components/FilterRadio";

const App = () => {
  const theme = useStore((state) => state.theme);
  const AppClasses = clsx({
    App: true,
    dark: theme === "dark",
    light: theme !== "dark",
  });
  return (
    <div className={AppClasses}>
      <Header />
      <AddTodo />
      <Todos />
      <FloatingRadioFilter />
      <Footer />
    </div>
  );
};

export default App;
