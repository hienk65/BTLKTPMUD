import React, { useEffect, useState, useCallback } from "react";
import { WrapperStyled } from "./styled";
// import Card from "./container";
import axios from "axios";
import Thuoc from "../../../asset/pic/thuoc.jpg";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import Create from "./create";
import Footer from "../../homepage/footer/footer";

export default function SanPhamChoNhanVien() {
  const [state, _setState] = useState({
    sanPham: [],
  });
  const setState = (obj = {}) => {
    _setState((prevState) => ({ ...prevState, ...obj }));
  };

  // const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    axios
      .get(`https://6412c589b1ea74430318ab1a.mockapi.io/sanPham`)
      .then((res) => {
        setState({
          sanPham: res.data || [],
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const { TextArea } = Input;

  const showModal = ({ sanPhamHienTai }) => {
    console.log("sanphamhientai", { ...sanPhamHienTai });
    form.setFieldsValue({ ...sanPhamHienTai });
    setState({
      isShowModal: true,
      modalData: { ...sanPhamHienTai },
    });
    // console.log("modalData",modalData);
  };

  const onSubmit = useCallback( 
    (values) => {
      // do your staff with values
      console.log("hello", values.maLoaiSanPham);
      axios
        .put(
          `https://6412c589b1ea74430318ab1a.mockapi.io/sanPham/${values.maLoaiSanPham}`,
          {
            tenSanPham: values.tenSanPham,
            nguonGoc: values.nguonGoc,
            tacDung: values.tacDung,
            chongChiDinh: values.chongChiDinh,
            soLuongSanPham: values.soLuongSanPham,
            giaTien: values.giaTien,
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      setState({ isShowModal: false });
    },
    [form]
  );

  const closePopup = useCallback(() => {
    form.resetFields();
    setState({ isShowModal: false });
  }, [form]);

  const { sanPham, isShowModal, modalData = {} } = state;
  // const list = [];
  // for (let i = 0; i < Object.keys(state).length; i++) {
  //   list[i] = i;
  // }
  // console.log("hello", list);

  const Card = sanPham.map((item, index) => {
    // console.log("hello123", state[num].tenSanPham);
    var sanPhamHienTai = { ...item };
    // console.log("sanPhamHienTai",sanPhamHienTai);
    return (
      <div key={index} className="card">
        <div className="content">
          <div className="content-left">
            <img src={Thuoc} alt="" />
          </div>
          <div className="content-right">
            <div className="title">{item.tenSanPham}</div>
            <ul className="list-product">
              <li>Mã loại sản phẩm : {item.maLoaiSanPham}</li>
              <li>Nguồn gốc : {item.nguonGoc}</li>
              <li>Tác dụng : {item.tacDung}</li>
              <li>Chống chỉ định : {item.chongChiDinh}</li>
              <li>Số lượng sản phẩm : {item.soLuongSanPham}</li>
              <li>Giá tiền : {item.giaTien} VNĐ</li>
            </ul>
            <Button
              className="product-edit"
              type="primary"
              onClick={() => {
                // console.log("item",item)
                showModal({ sanPhamHienTai });
              }}
            >
              Chỉnh sửa
            </Button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <WrapperStyled>
      <div className="product-contant">
        <h1 className="product-tittle">Các loại sản phẩm</h1>
        <Create />
        <div className="body">{Card}</div>

        <Modal
          className="modal-background"
          title="Chỉnh sửa thông tin sản phẩm"
          visible={isShowModal}
          onOk={form.submit}
          onCancel={closePopup}
        >
          <Form
            form={form}
            onFinish={onSubmit}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
          >
            <Form.Item
              label="Tên sản phẩm"
              name="tenSanPham"
              rules={[{ required: true, message: "Hãy nhập tên sản phẩm" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Nguốn gốc"
              name="nguonGoc"
              rules={[{ required: true, message: "Hãy nhập nguồn gốc" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tác dụng"
              name="tacDung"
              rules={[{ required: true, message: "Hãy nhập tác dụng" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="Chống chỉ định"
              name="chongChiDinh"
              rules={[{ required: true, message: "Hãy nhập chống chỉ định" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="Số lượng sản phẩm"
              name="soLuongSanPham"
              rules={[
                { required: true, message: "Hãy nhập số lượng sản phẩm" },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Giá tiền"
              name="giaTien"
              rules={[{ required: true, message: "Hãy nhập giá tiền" }]}
              // style={{width:"450px"}}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Mã loại sản phẩm"
              name="maLoaiSanPham"
              rules={[{ required: true, message: "Hãy nhập mã loại sản phẩm" }]}
            >
              <Input disabled />
            </Form.Item>
          </Form>
        </Modal>
        <Footer />
      </div>
    </WrapperStyled>
  );
}
