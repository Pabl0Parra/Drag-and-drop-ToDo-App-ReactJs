import useStore from "../store/store";
import IconSun from "../assets/icon-sun.svg";
import IconMoon from "../assets/icon-moon.svg";

export default function ThemeToggler() {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);
  const handleThemeToggleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <button className="toggler" onClick={handleThemeToggleClick}>
      {theme === "dark" ? (
        <img src={IconSun} alt={"Theme toggle icon"} />
      ) : (
        <img src={IconMoon} alt={"Theme toggle icon"} />
      )}
    </button>
  );
}
