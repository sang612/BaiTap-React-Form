import React, { Component } from 'react'
import Banner from './banner'
import Footer from './footer'
import Header from './header'
import Item from './item'
import "./BaiTapThucHanhLayout.css";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
          <Header />
          <Banner />
          <Item />
          <Footer />
      </div>
    )
  }
}
