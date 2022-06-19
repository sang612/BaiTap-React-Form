import React, { Component } from "react";
import Form from "./Form";
import Search from "./Search";
import SinhVienList from "./SinhVienList";

export default class ThongTinSinhvien extends Component {
  render() {
    return (
      <div>
        <h1 className="bg-dark text-light h-5 p-2">Thông tin sinh viên</h1>
        <Form />
        <Search />
        <SinhVienList />
      </div>
    );
  }
}
