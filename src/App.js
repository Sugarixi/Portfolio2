import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Portfolio from "./Components/Protfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Arrow from "./Components/Arrow/Arrow";
import ArrowUp from "./Components/Overlay/ArrowUp";

function App() {
  const [isArrowShown, setIsArrowShown] = React.useState(false);

  const DarkTheme = "darkTheme";
  const LightTheme = "lightTheme";
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [bubbleDisplay, setBubbleDisplay] = React.useState("none");

  function toggleMode() {
    setIsDarkTheme((oldVal) => !oldVal);

    setBubbleDisplay("flex");
    setTimeout(function () {
      setBubbleDisplay("none");
    }, 1000);
  }

  React.useEffect(() => {
    const oldTheme = isDarkTheme ? DarkTheme : LightTheme;
    const newTheme = isDarkTheme ? LightTheme : DarkTheme;
    document.getElementById("cssMode").href = document
      .getElementById("cssMode")
      .href.replace(oldTheme, newTheme);
  }, [isDarkTheme]);

  var myScrollFunc = function () {
    setIsArrowShown(window.scrollY >= window.innerHeight * 0.5);
  };

  window.addEventListener("scroll", myScrollFunc);

  return (
    <div className="app">
      <a name="Main" />
      <div style={{ display: isArrowShown ? "block" : "none" }}>
        <ArrowUp location={"#Main"} />
      </div>
      <Nav
        onModeChange={toggleMode}
        isDarkTheme={isDarkTheme}
        bubbleDisplay={bubbleDisplay}
      />
      <Main />
      <Arrow location={"#About"} />
      <a name="About" />
      <About />
      <Arrow location={"#Portfolio"} />
      <a name="Portfolio" />
      <Portfolio />
      <Arrow location={"#Contact"} />
      <a name="Contact" />
      <Contact isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
