import { Button, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";

export default function DuLieuTiemChung() {
  const [state, _setState] = useState({
    phieuDangKy: [],
    khachHang: [],
    sanPham: [],
    hoaDon: [],
  });
  const setState = (obj = {}) => {
    _setState((prevState) => ({ ...prevState, ...obj }));
  };

  useEffect(() => {
    Promise.all([
      axios.get(`https://640b69a165d3a01f981a426f.mockapi.io/phieuDangKyTiem`),
      axios.get(`https://6405f23e40597b65de45fcd3.mockapi.io/khachHang`),
      axios.get(`https://6412c589b1ea74430318ab1a.mockapi.io/sanPham`),
      axios.get(`https://61fe8c59a58a4e00173c98cc.mockapi.io/hoaDon`),
    ]).then((res) => {
      setState({
        phieuDangKy: res[0].data || [],
        khachHang: res[1].data || [],
        sanPham: res[2].data || [],
        hoaDon: res[3].data || [],
      });
    });
  }, []);

  const showModal = ({ newKhachHang, newSanPham, PhieuDangky1 }) => {
    setState({
      isShowModal: true,
      modalData: { ...newKhachHang, ...newSanPham, ...PhieuDangky1 },
    });
    console.log("modalData", modalData);
  };
  const handleSubmit = () => {
    axios
      .post(`https://61fe8c59a58a4e00173c98cc.mockapi.io/hoaDon`, {
        maKhachHang: modalData.maKhachHang,
        maSanPham: modalData.maLoaiSanPham,
        donGia: modalData.giaTien,
        giaThanhTien: modalData.giaTien,
        donViTinh: "VNĐ",
        maHoaDon: parseInt(hoaDon[Object.keys(hoaDon).length - 1].maHoaDon) + 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .delete(
        `https://640b69a165d3a01f981a426f.mockapi.io/phieuDangKyTiem/${modalData.maPhieuDangKy}`
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setState({ isShowModal: false });
  };

  const handleOk = () => {
    setState({
      isShowModal: true,
      modalData: {},
    });
  };

  const handleCancel = () => {
    setState({ isShowModal: false });
  };
  const {
    sanPham,
    hoaDon,
    khachHang,
    phieuDangKy,
    isShowModal,
    modalData = {},
  } = state;

  return (
    <WrapperStyled>
      <h1 className="data-title">Dữ liệu tiêm chủng</h1>
      <div className="data-wrap">
        {phieuDangKy &&
          phieuDangKy.length > 0 &&
          phieuDangKy.map((item, index) => {
            let newKhachHang =
              khachHang.find(
                (khach) => khach.maKhachHang == item.maKhachHang
              ) || {};
            let newSanPham =
              sanPham.find(
                (khach) => khach.maLoaiSanPham == item.maLoaiSanPham
              ) || {};
            let PhieuDangky1 = item;

            return (
              <div className="card" key={index}>
                <div>
                  <ul className="data-list">
                    <li>Tên khách hàng : {newKhachHang.hoTen}</li>
                    <li>Mã sản phẩm : {newSanPham.tenSanPham}</li>
                    <li>Mã phiếu đăng ký : {item.maPhieuDangKy}</li>
                  </ul>
                  <div className="data-button">
                    <Button
                      className="data-button"
                      type="primary"
                      onClick={() => {
                        showModal({ newKhachHang, newSanPham, PhieuDangky1 });
                      }}
                    >
                      Xác nhận tiêm chủng
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Modal
        title="Thông tin hóa đơn"
        visible={isShowModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Quay lại
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Xác nhận
          </Button>,
        ]}
      >
        <div>Tên khách hàng : {modalData.hoTen}</div>
        <div>Tên sản phẩm : {modalData.tenSanPham}</div>
        <div>Giá tiền : {modalData.giaTien} VNĐ</div>
      </Modal>
    </WrapperStyled>
  );
}
