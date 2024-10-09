import ToggleTheme from "../theme-toggle";

const ThemeSettings = () => {
  return (
    <div className="flex flex-col items-center space-y-6 px-5 py-1">
      <div className="w-[65vw] sm:w-96">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default ThemeSettings;
