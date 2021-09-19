import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import handphoneImage from "./images/home.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAllOutlined } from "@material-ui/icons";
import "./App.css";

const styles = makeStyles((theme) => ({

}));
const themes = {
  light: {
    background: "#f0e6f7",
    color: "#330852",
    backgroundSize: "100%",
  },
  dark: {
    background: "#808080",
    color: "#F8F8FF",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);
  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "100%"  }}>
      <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10"> SELAMAT DATANG DI L&W ELECTRONIC, PUSAT STORE HP DAN LAPTOP TERBESAR, DAN TERMURAH SEJAGAT RAYA </marquee>
            <button
                className="button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }
              >
              <FontAwesomeIcon icon={faHome} />
              </button>
            
          <center>
          <div className="judul">
            <h3>L&W ELECTRONIC</h3>
            <div className="gambar">
              <center>
              <Link to="/home">
                <img src={handphoneImage} style={{ height: "500px"  }} />
              </Link>
              </center>
            </div>
          </div>
          </center>
          <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10"> Credits by Lina Aulia & Winda Naibaho </marquee>
          </div>
          <h3>
          </h3>
    </ThemeContext.Provider>
    </body>
  );
}
