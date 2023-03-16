import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Form, Input, Button, InputNumber, Modal } from "antd";

export default function Create() {
  const [state, _setState] = useState({
    sanPham: [],
  });
  const setState = (obj = {}) => {
    _setState((prevState) => ({ ...prevState, ...obj }));
  };

  useEffect(() => {
    axios
      .get(`https://6412c589b1ea74430318ab1a.mockapi.io/sanPham`)
      .then((res) => {
        // console.log("res", res.data);
        setState({
          sanPham: res.data || [],
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { isShowModal, sanPham } = state;
  const showModal = () => {
    setState({
      isShowModal: true,
    });
    // console.log("modalData",modalData);
  };

  const onSubmit = useCallback(
    (values) => {
      // do your staff with values
      axios
        .post(`https://6412c589b1ea74430318ab1a.mockapi.io/sanPham`, {
          tenSanPham: values.tenSanPham,
          nguonGoc: values.nguonGoc,
          tacDung: values.tacDung,
          chongChiDinh: values.chongChiDinh,
          soLuongSanPham: values.soLuongSanPham,
          giaTien: values.giaTien,
          maLoaiSanPham: Object.keys(sanPham).length + 1,
        })
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
  return (
    <>
      <Button className="product-edit" type="primary" onClick={showModal}>
        Thêm mới
      </Button>
      <Modal
        className="modal-background"
        title="Thêm mới sản phẩm"
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
            rules={[{ required: true, message: "Hãy nhập số lượng sản phẩm" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Giá tiền"
            name="giaTien"
            rules={[{ required: true, message: "Hãy nhập giá tiền" }]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
