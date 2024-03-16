import React from "react";
import "./Header.css";
import { MenuItem, TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import categories from "../../data/category";

const Header = ({ setCategory, category, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#055989",
      },
      type: "#fff",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            // label="Standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
        <TextField
          className="select"
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
