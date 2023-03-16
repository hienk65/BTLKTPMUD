import React, { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";
import axios from "axios";

export default function ThongTinNhanVienChoNhanVien() {
    const [nhanVien, setNhanVien] = useState([]);

    const Path = window.location.href;
    const ArrayPath = Path.split("=");
    var userID = 1000000;

    useEffect(() => {
        axios
            .get(`https://6412c589b1ea74430318ab1a.mockapi.io/nhanVien`)
            .then((res) => {
                console.log("res", res.data);
                setNhanVien(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    for (let i = 0; i < Object.keys(nhanVien).length; i++) {
        if (nhanVien[i].maTaiKhoan == ArrayPath[1]) {
            userID = i;
        }
    }

    return (
        <WrapperStyled>
            <div className="list__profileK">
                <span className="profile__img">
                    <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/132278363_1317598935366781_6062968165840886713_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=5N3qLFZKGhIAX_7_3Kc&_nc_ht=scontent.fhan19-1.fna&oh=00_AfB1_q1rIv_TelCVLTm3C9bE1A3eITKbAQs94vkHSCkufQ&oe=643951C2" alt="" />
                    <span className="user-name">Nguyễn Văn Trường</span>
                </span>
                <ul className="item__profile">
                    <li>ID tài khoản: {nhanVien?.[userID]?.maTaiKhoan}</li>
                    <li>Họ và tên: {nhanVien?.[userID]?.tenNhanVien}</li>
                    <li>
                        Ngày sinh: {nhanVien?.[userID]?.ngaySinh.split("T")[0]}
                    </li>
                    <li>
                        Giới tính:{" "}
                        {nhanVien?.[userID]?.gioiTinh == true ? "Nam" : "Nữ"}
                    </li>
                    <li>Số điện thoại : {nhanVien?.[userID]?.soDienThoai}</li>
                    <li>Mã nhân viên : {nhanVien?.[userID]?.maNhanVien}</li>
                </ul>
            </div>
        </WrapperStyled>
    );
}
