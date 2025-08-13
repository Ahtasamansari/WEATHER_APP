import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './info.css';
export const InfoBox = ({Info}) => {
  const INI_URL =
    "https://images.unsplash.com/photo-1696912158241-be58ad220dcc?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
  
  return (
    <div className="infobox ">
      <h1>
        Weather-{Info.weather}
      </h1>
      <div  className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia className="align-item-center" sx={{ height: 140 }} image={INI_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>
              <b> Tempereture = {Info.temp}&deg;c</b>
              <br />
              <br />
              <p><b>Max-Tempereture = {Info.temp_max}&deg;c</b></p>
              <p><b>Min-Tempereture = {Info.temp_min}&deg;c  </b></p>
              <p> <b> humidity = {Info.humidity}&deg;c </b> </p>
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

