const { useState } = React;
// -> 리액트의 훅
const App = () => {
  const [state, setState] = useState("Main");
  // state -> 변수
  // setState -> 함수
  const mainClick = () => {
    setState("Main");
  };

  const shortsClick = () => {
    setState("Shorts");
  };

  const detailClick = () => {
    setState("Detail");
  };
  return (
    <>
      <Header onMainClick={mainClick} />
      {state != "Detail" && (
        <Aside onShortsClick={shortsClick} onMainClick={mainClick} />
      )}
      {state == "Main" && <Main onDetailClick={detailClick} />}
      {state == "Shorts" && <Shorts />}
      {state == "Detail" && <Detail />}
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
