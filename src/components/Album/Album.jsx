import React from "react";
import "./styles.css";
import Image from "../assets/rozes.png";
import Favorite from "../assets/favorite.png";

const Album = (props) => {
  return (
    <div className="main">
      <div className="card">
        <div className="image">
          <img className="img" src={Image} alt="" />
        </div>
        <div className="info">
          <div className="artist">
            <p className="p1">{props.songTitle}</p>
            <p className="p2">{props.author}</p>
          </div>
          <div className="song">
            <p className="p3">{props.song}</p>
            <p className="p4">{props.year}</p>
          </div>
          <div className="assets">
            <div className="tag">
              <p>{props.genre}</p>
            </div>
            <div className="favorite">
              <img className="fav_img" src={Favorite} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
