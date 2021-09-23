import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./laptop.css";
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';

const styles = makeStyles((theme) => ({
export default function Handphone() {
  const classes = styles();
  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("  http://localhost:3333/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10"> SELAMAT DATANG DI L&W ELECTRONIC, PUSAT STORE HP DAN LAPTOP TERBESAR, DAN TERMURAH SEJAGAT RAYA </marquee>
      <div style={{ marginTop: 20 }}>
      <center>
      <input className="search"
              onChange={(event) => handleIdPembelian(event, "name")}
              name="idPembelian"
              value={valueInput.name}
              style={{ color: "#6e0234"}}
              placeholder="Masukkan Nama Merk"
            />
      <button type="submit" class="searchButton">
      <FontAwesomeIcon icon={faSearch} />
     </button>
            </center>
            <div className="marquee" >
            <center>
              <h3> ... Mencari data {valueInput.name} ...</h3>
        </center>
        </div>
        <Grid container md={11} spacing={4} className={classes.grid}>
          {data.map((value) => (
            <Grid item key={value.name} md={3}>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    style={{height: "150px",margin: "auto",paddingTop: "5%",
                    }}
                    component="img"
                    className={classes.media}
                    image={value.lurl}
                  />
                  <CardContent>
                  <Typography style={{fontWeight:"bold"}}>{value.lname}</Typography>
                    <Typography>Harga : {value.lprice} </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
