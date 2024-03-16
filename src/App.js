import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
// import { grey, purple } from "@mui/material/colors";
// import { Switch } from "@mui/material";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("");

  // const DarkMode = withStyles({
  //   switchBase: {
  //     color: grey[50],
  //     "&$checked": {
  //       color: grey[900],
  //     },
  //     "&$checked + $track": {
  //       backgroundColor: grey[500],
  //     },
  //   },
  //   checked: {},
  //   track: {},
  // })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        ></div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
