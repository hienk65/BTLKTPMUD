import React, { useState, useEffect } from "react";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Select,
    InputNumber,
    Modal,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "../index.css";
import axios from "axios";
import { WrapperStyled } from "./styled";

export default function Registration() {
    const [visible, setVisible] = useState(false);
    const [taiKhoan, setTaiKhoan] = useState([]);
    const [khachHang, setKhachHang] = useState([]);

    useEffect(() => {
        axios
            .get(`https://6405f23e40597b65de45fcd3.mockapi.io/taiKhoan`)
            .then((res) => {
                setTaiKhoan(res.data);
            })
            .catch((error) => console.log(error));

        axios
            .get(`https://6405f23e40597b65de45fcd3.mockapi.io/khachHang`)
            .then((res) => {
                setKhachHang(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const { TextArea } = Input;
    const onFinish = (values) => {
        setVisible(true);
        axios
            .post(`https://6405f23e40597b65de45fcd3.mockapi.io/khachHang`, {
                hoTen: values.hoTen,
                ngaySinh: values.ngaySinh,
                gioiTinh: values.gioiTinh,
                diaChi: values.diaChi,
                tuoi: values.tuoi,
                sdt: values.sdt,
                mail: values.mail,
                cmnd: values.cmnd,
                bhyt: values.bhyt,
                danToc: values.danToc,
                ngheNghiep: values.ngheNghiep,
                donViCongTac: values.donViCongTac,
                maKhachHang: Object.keys(khachHang).length + 1,
                maTaiKhoan: Object.keys(taiKhoan).length + 1,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .post(`https://6405f23e40597b65de45fcd3.mockapi.io/taiKhoan`, {
                tenDangNhap: values.tenDangNhap,
                matKhau: values.matKhau,
                vaiTro: "customer",
                maTaiKhoan: Object.keys(taiKhoan).length + 1,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        Modal.error({
            title: "Đăng kí thất bại",
        });
    };

    function disabledDate(current) {
        // Can not select days after today and today
        return current && current.valueOf() > Date.now();
    }

    const validateMessages = {
        required: "Hãy điền ${label} của bạn",
        types: {
            email: "Đây không phải một email hợp lệ",
        },
    };

    return (
        <WrapperStyled>
            <h1 className="title">Đăng kí tài khoản</h1>
            <Form
                validateMessages={validateMessages}
                style={{ paddingTop: "20px" }}
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên đăng nhập"
                    name="tenDangNhap"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật Khẩu"
                    name="matKhau"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                </Form.Item>

                <Form.Item
                    label="Họ và tên"
                    name="hoTen"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ngày sinh"
                    name="ngaySinh"
                    rules={[{ required: true }]}
                >
                    <DatePicker disabledDate={disabledDate} />
                </Form.Item>

                <Form.Item
                    label="Giới tính"
                    name="gioiTinh"
                    rules={[{ required: true }]}
                >
                    <Select style={{ width: "30%" }}>
                        <Select.Option value={true}>Nam</Select.Option>
                        <Select.Option value={false}>Nữ</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Tuổi"
                    name="tuoi"
                    rules={[{ required: true }]}
                >
                    <InputNumber min={1} max={120} />
                </Form.Item>

                <Form.Item
                    label="Địa chỉ"
                    name="diaChi"
                    rules={[{ required: true }]}
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="sdt"
                    width="200px"
                    rules={[{ required: true }]}
                >
                    <Input style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="mail"
                    rules={[{ required: true, type: "email" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="số CMND"
                    name="cmnd"
                    width="200px"
                    rules={[{ required: true }]}
                >
                    <Input style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="số BHYT"
                    name="bhyt"
                    width="200px"
                    rules={[{ required: true }]}
                >
                    <Input style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Dân tộc"
                    name="danToc"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Nghề nghiệp"
                    name="ngheNghiep"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Đơn vị công tác"
                    name="donViCongTac"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Đăng kí
                    </Button>
                </Form.Item>
            </Form>

            <Modal
                title="Thông báo"
                style={{ top: 100 }}
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={400}
                footer={[
                    <Button
                        key="ok"
                        href="http://localhost:3000/"
                        type="primary"
                        onClick={() => setVisible(false)}
                    >
                        OK
                    </Button>,
                ]}
            >
                <p>Đăng kí thành công</p>
            </Modal>
        </WrapperStyled>
    );
}
