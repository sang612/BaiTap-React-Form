import React, { Component } from 'react'
import Info from './Info'
import TaiXiu from './TaiXiu'
import background from "./video_19_game_xuc_xac/bgGame.png"
import styles from "./xucxac.module.css";
import "../fonts/Pony.ttf"

export default class XucXac extends Component {
  render() {
    return (
      <div className={styles.contain + " text-center "} style={{ backgroundImage: `url(${background})`}}>
          <h1>GAME ĐỔ XÚC XẮC</h1>
          <TaiXiu />
          <Info />
      </div>
    )
  }
}
