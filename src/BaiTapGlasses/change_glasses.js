import React, { Component } from "react";
import styles from "./changeGlasses.module.css";

import g1 from "../assets/img/g1.jpg";
import g2 from "../assets/img/g2.jpg";
import g3 from "../assets/img/g3.jpg";
import g4 from "../assets/img/g4.jpg";
import g5 from "../assets/img/g5.jpg";
import g6 from "../assets/img/g6.jpg";
import g7 from "../assets/img/g7.jpg";
import g8 from "../assets/img/g8.jpg";
import g9 from "../assets/img/g9.jpg";

import v1 from "../assets/img/v1.png";
import v2 from "../assets/img/v2.png";
import v3 from "../assets/img/v3.png";
import v4 from "../assets/img/v4.png";
import v5 from "../assets/img/v5.png";
import v6 from "../assets/img/v6.png";
import v7 from "../assets/img/v7.png";
import v8 from "../assets/img/v8.png";
import v9 from "../assets/img/v9.png";

import model from "../assets/img/model.jpg";
import background from "../assets/img/background.jpg";

export default class Change_glasses extends Component {
  state = {
    img: v1,
  };

  selectGlasses = (img) => {
    this.setState({
      img: img,
    });
  };

  render() {
    return (
      <div className={styles.container} style={ {backgroundImage: `url(${background})`} }>
        <h1>TRY GLASSES APP ONLINE</h1>
        <div>
          <img src={model} alt="model" className={styles.model} />
          <img src={this.state.img} alt="g1" className={styles.glasses} />
        </div>
        <div className={styles.item}>
          <img src={v1} alt="" onClick={() => this.selectGlasses(v1)} />
          <img src={v2} alt="" onClick={() => this.selectGlasses(v2)} />
          <img src={v3} alt="" onClick={() => this.selectGlasses(v3)} />
          <img src={v4} alt="" onClick={() => this.selectGlasses(v4)} />
          <img src={v5} alt="" onClick={() => this.selectGlasses(v5)} />
          <img src={v6} alt="" onClick={() => this.selectGlasses(v6)} />
          <img src={v7} alt="" onClick={() => this.selectGlasses(v7)} />
          <img src={v8} alt="" onClick={() => this.selectGlasses(v8)} />
          <img src={v9} alt="" onClick={() => this.selectGlasses(v9)} />
        </div>
      </div>
    );
  }
}
