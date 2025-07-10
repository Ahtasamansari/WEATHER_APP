import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './info.css';
export const InfoBox = ({Info}) => {
  const INI_URL =
    "https://media.istockphoto.com/id/1486995271/photo/city-at-dusk-city-buildings-against-the-sky-polluted-air-poor-ecology.jpg?s=1024x1024&w=is&k=20&c=XWSF8mtFeU-zc3y4Me-WEDvy4wpF_sO0XQ6rsytiVts=";
  
  return (
    <div className="infobox">
      <h1>
        Weather-{Info.weather}
      </h1>
      <div  className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INI_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>
              Tempereture ={Info.temp}&deg;c
              <p>Max-Tempereture ={Info.temp_max}&deg;c</p>
              <p>Min-Tempereture ={Info.temp_min}&deg;c</p>
              <p>humidity ={Info.humidity}&deg;c</p>
              <p>
                The Weather can be describe <i>{Info.weather} </i> and
                feels Like {Info.feels_like}
              </p>
            </div>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};
