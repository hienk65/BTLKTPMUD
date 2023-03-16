import React, { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";
// import Card from "./container";
import axios from "axios";
import Slider from "./Slider/slider";
import Footer from "../../homepage/footer/footer";
export default function SanPhamChoKhachHang() {
  const [state, _setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6412c589b1ea74430318ab1a.mockapi.io/sanPham`)
      .then((res) => {
        _setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const list = [];
  for (let i = 0; i < Object.keys(state).length; i++) {
    list[i] = i;
  }
  console.log("hello", list);
  const listImg = [
    {
      img: '/image/sp1.jpg',
    },
    {
      img: '/image/sp2.jpg',
    },
    {
      img: '/image/sp3.jpg',
    },
    {
      img: '/image/sp4.jpg',
    },
    {
      img: '/image/sp5.jpg',
    },
    {
      img: '/image/sp6.png',
    },
    {
      img: '/image/sp7.jpg',
    },
    {
      img: '/image/sp1.jpg',
    },
    {
      img: '/image/sp2.jpg',
    },
    {
      img: '/image/sp3.jpg',
    },
    {
      img: '/image/sp4.jpg',
    },
    {
      img: '/image/sp5.jpg',
    },
    {
      img: '/image/sp6.png',
    },
    {
      img: '/image/sp7.jpg',
    }
  ]
  const Path = window.location.href;
  const ArrayPath = Path.split("=");
  const goToRegistration = ()=>{
    window.location.href = `http://localhost:3000/nav/customer/dang-ki-tiem-chung?id=${ArrayPath[1]}`;
    console.log("hello");
  }
  const Card = list.map((num) => {
    console.log("hello123", state[num].tenSanPham);
    return (
      <div className="card">
        <div className="content">
          <div className="content-left">
            <img src={listImg[num].img} alt="" />
          </div>
          <div className="content-right">
            <div className="title">{state[num].tenSanPham}</div>
            <ul className="list__products">
              <li>Nguồn gốc : {state[num].nguonGoc}</li>
              <li>Tác dụng : {state[num].tacDung}</li>
              <li>Chống chỉ định : {state[num].chongChiDinh}</li>
              <li>Mã loại sản phẩm : {state[num].maLoaiSanPham}</li>
              <li>Số lượng sản phẩm : {state[num].soLuongSanPham}</li>
            </ul>
            <button onClick={goToRegistration} className="buy__product">Đăng Ký Ngay</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <WrapperStyled>
    <Slider/>
      <h1 className="title__Sp">Danh mục vaccine</h1>
      <div className="body">{Card}</div>
      <Footer />
    </WrapperStyled>
  );
}
