import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import axios from "axios";
import Footer from "../../homepage/footer/footer";
export default function ThongTinKhachHangChoNhanVien() {
    const [nguoiDung, setNguoiDung] = useState([]);

    useEffect(() => {
        axios
            .get(`https://6405f23e40597b65de45fcd3.mockapi.io/khachHang`)
            .then((res) => {
                console.log("res", res.data);
                setNguoiDung(res.data.reverse());
            })
            .catch((error) => console.log(error));
    }, []);

    const list = [];
    for (let i = 0; i < Object.keys(nguoiDung).length; i++) {
        list[i] = i;
    }
    console.log("hello", list);
    const list__user = [
        {
            img: "/image/ava-1.jpg",
        },
        {
            img: "/image/ava-2.jpg",
        },
        {
            img: "/image/ava-3.jpg",
        },
        {
            img: "/image/ava-4.jpg",
        },
        {
            img: "/image/ava-5.jpg",
        },
        {
            img: "/image/ava-6.jpg",
        },
        {
            img: "/image/ava-7.jpg",
        },
        {
            img: "/image/ava-8.jpg",
        },
        {
            img: "/image/ava-9.jpg",
        },
        {
            img: "/image/ava-10.jpg",
        },
        {
            img: "/image/ava-11.jpg",
        },
        {
            img: "/image/ava-12.jpg",
        },
        {
            img: "/image/ava-13.jpg",
        },
        {
            img: "/image/ava-14.jpg",
        },
        {
            img: "/image/ava-15.jpg",
        },
        {
            img: "/image/ava-16.jpg",
        },
        {
            img: "/image/ava-1.jpg",
        },
        {
            img: "/image/ava-1.jpg",
        },
        {
            img: "/image/ava-2.jpg",
        },
        {
            img: "/image/ava-3.jpg",
        },
        {
            img: "/image/ava-4.jpg",
        },
        {
            img: "/image/ava-5.jpg",
        },
        {
            img: "/image/ava-6.jpg",
        },
        {
            img: "/image/ava-7.jpg",
        },
        {
            img: "/image/ava-8.jpg",
        },
        {
            img: "/image/ava-9.jpg",
        },
        {
            img: "/image/ava-10.jpg",
        },
        {
            img: "/image/ava-11.jpg",
        },
        {
            img: "/image/ava-12.jpg",
        },
        {
            img: "/image/ava-13.jpg",
        },
        {
            img: "/image/ava-14.jpg",
        },
        {
            img: "/image/ava-15.jpg",
        },
        {
            img: "/image/ava-16.jpg",
        },
    ];
    
    const Card = list.map((num) => {
        return (
            <div className="list__profileK">
                <span className="profile__img">
                    <img src={list__user[num].img} alt="" />
                    <span className="user-name">{nguoiDung?.[num]?.hoTen}</span>
                </span>
                <ul className="item__profile">
                    <li>ID tài khoản : {nguoiDung?.[num]?.maTaiKhoan}</li>
                    <li>Họ và tên : {nguoiDung?.[num]?.hoTen}</li>
                    <li>
                        Ngày sinh : {nguoiDung?.[num]?.ngaySinh.split("T")[0]}
                    </li>
                    <li>
                        Giới tính :{" "}
                        {nguoiDung?.[num]?.gioiTinh == true ? "Nam" : "Nữ"}
                    </li>
                    <li>Địa chỉ : {nguoiDung?.[num]?.diaChi}</li>
                    <li>Tuổi : {nguoiDung?.[num]?.tuoi}</li>
                    <li>Số điện thoại : {nguoiDung?.[num]?.sdt}</li>
                    <li>Mail : {nguoiDung?.[num]?.mail}</li>
                    <li>Số CMND : {nguoiDung?.[num]?.cmnd}</li>
                    <li>Số BHYT : {nguoiDung?.[num]?.bhyt}</li>
                    <li>Dân Tộc : {nguoiDung?.[num]?.danToc}</li>
                    <li>Nghề Nghiệp : {nguoiDung?.[num]?.ngheNghiep}</li>
                    <li>Đơn vị công tác : {nguoiDung?.[num]?.donViCongTac}</li>
                </ul>
            </div>
        );
    });

    return (
        <WrapperStyled>
            <div className="list__profile">{Card}</div>
            <Footer />
        </WrapperStyled>
    );
}
