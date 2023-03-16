import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import axios from "axios";

export default function DangNhap() {
    const [state, _setState] = useState([]);

    useEffect(() => {
        axios
            .get(`https://6405f23e40597b65de45fcd3.mockapi.io/taiKhoan`)
            .then((res) => {
                _setState(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const onFinish = (values) => {
        let check = 0;
        for (let i = 0; i < Object.keys(state).length; i++) {
            if (
                state[i].tenDangNhap == values.tenDangNhap &&
                state[i].matKhau == values.matKhau
            ) {
                check = 1;
                if (state[i].vaiTro == "admin") {
                    window.location.href =
                        "http://localhost:3000/nav/admin/home";
                } else if (state[i].vaiTro == "staff") {
                    window.location.href = `http://localhost:3000/nav/staff/home?id=${state[i].maTaiKhoan}`;
                } else if (state[i].vaiTro == "customer") {
                    window.location.href = `http://localhost:3000/nav/customer/home?id=${state[i].maTaiKhoan}`;
                }
            }
        }
        if (check === 0) {
            Modal.error({
                title: "Sai tài khoản hoặc mật khẩu",
            });
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        Modal.error({
            title: "Sai tài khoản hoặc mật khẩu",
        });
    };
    return (
        <>
            <h1 className="title">Hệ thống quản lý tiêm chủng</h1>
            <div className="login">
                <div className="login-title">Đăng nhập</div>
                <Form
                    name="basic"
                    style={{ padding: 30 }}
                    // labelCol={{ span: 10 }}
                    // wrapperCol={{ span: 5 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tài khoản"
                        name="tenDangNhap"
                        style={{ width: "300px" }}
                        rules={[
                            { required: true, message: "Hãy nhập tài khoản" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="matKhau"
                        style={{ width: "300px" }}
                        rules={[
                            { required: true, message: "Hãy nhập mật khẩu" },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10, span: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                        {/* <Button type="primary">
              Đăng ký
            </Button> */}
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
