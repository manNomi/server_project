const App = () => {
  // root.appendChild(makeAside());
  // root.appendChild(makeHeader());
  // mainResizeEvent(main);
  // window.addEventListener("resize", () => mainResizeEvent(main));

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
