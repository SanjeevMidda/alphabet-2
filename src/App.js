import "./index.css";
import Letter from "./components/Letter";

function App() {
  let letters = [];

  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let index = 0; index < 28; index++) {
    letters.push(
      <Letter letter={alphabet[Math.floor(Math.random() * alphabet.length)]} />
    );
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <h3>A</h3>
        <h3>/</h3>
        <h3>C</h3>
        <h3 style={{ alignSelf: "center" }}>/</h3>

        <div
          className="container"
          style={{ alignSelf: "center", padding: "30px" }}
        >
          {letters.map((item) => {
            return item;
          })}
        </div>
        <h3 style={{ alignSelf: "center" }}>/</h3>
        <h3 style={{ alignSelf: "flex-end" }}>F</h3>
        <h3 style={{ alignSelf: "flex-end" }}>/</h3>
        <h3 style={{ alignSelf: "flex-end" }}>H</h3>
      </div>
    </div>
  );
}

export default App;
