import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Select,
    InputNumber,
    Modal,
} from "antd";
import moment from "moment";

export default function ThongTinKhachHang() {
    const [nguoiDung, setNguoiDung] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [form] = Form.useForm();
    const Path = window.location.href;
    const ArrayPath = Path.split("=");
    var userID = 1000000;

    // for (let i = 0; i < Object.keys(nguoiDung).length; i++) {
    //   if (nguoiDung[i].maTaiKhoan == ArrayPath[1]) {
    //     userID = i;
    //   }
    // }

    useEffect(() => {
        axios
            .get(`https://6405f23e40597b65de45fcd3.mockapi.io/khachHang`)
            .then((res) => {
                // console.log("res", res.data);
                setNguoiDung(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        let newData = nguoiDung?.length
            ? nguoiDung.find((item) => item.maTaiKhoan == ArrayPath[1])
            : {};
        form.setFieldsValue({ ...newData, ngaySinh: moment(newData.ngaySinh) });
    }, [nguoiDung]);

    const { TextArea } = Input;

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

    const closePopup = useCallback(() => {
        form.resetFields();
        setIsOpen(false);
    }, [form]);

    const showModal = () => {
        setIsOpen(true);
    };

    for (let i = 0; i < Object.keys(nguoiDung).length; i++) {
        if (nguoiDung[i].maTaiKhoan == ArrayPath[1]) {
            userID = i;
        }
    }
    console.log("makhachhang", nguoiDung?.[userID]?.maKhachHang);
    const ID = nguoiDung?.[userID]?.maKhachHang;
    const hoTen = nguoiDung?.[userID]?.hoTen;
    // console.log("id", ID);

    const onSubmit = (values) => {
        // do your staff with values
        console.log("hello1111", values);
        // console.log("id2", ID);
        axios
            .put(
                `https://6405f23e40597b65de45fcd3.mockapi.io/khachHang/${nguoiDung?.[userID]?.maKhachHang}`,
                {
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
                    // maKhachHang: Object.keys(khachHang).length + 1,
                    // maTaiKhoan: Object.keys(taiKhoan).length + 1,
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        setIsOpen(false);
    };
    const ngaySinh = nguoiDung?.[userID]?.ngaySinh.split("T");
    // console.log(ngaySinh,"hello");

    const editImg = () => {
        console.log("hi");
    };
    return (
        <WrapperStyled>
            <div className="container">
                <div className="list__profileK">
                    <span className="profile__img">
                        <img src="https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_960_720.png" alt="" />
                        <span className="user-name">{hoTen}</span>
                        <span onClick={editImg} className="edit__img">
                            <i class="fa-solid fa-camera"></i>
                        </span>
                    </span>
                    <ul className="item__profile">
                        <li>
                            ID tài khoản : {nguoiDung?.[userID]?.maTaiKhoan}
                        </li>
                        <li>Họ và tên : {hoTen}</li>
                        <li>Ngày sinh : {ngaySinh?.[0]}</li>
                        <li>
                            Giới tính :{" "}
                            {nguoiDung?.[userID]?.gioiTinh == true
                                ? "Nam"
                                : "Nữ"}
                        </li>
                        <li>Địa chỉ : {nguoiDung?.[userID]?.diaChi}</li>
                        <li>Tuổi : {nguoiDung?.[userID]?.tuoi}</li>
                        <li>Số điện thoại : {nguoiDung?.[userID]?.sdt}</li>
                        <li>Mail : {nguoiDung?.[userID]?.mail}</li>
                        <li>Số CMND : {nguoiDung?.[userID]?.cmnd}</li>
                        <li>Số BHYT : {nguoiDung?.[userID]?.bhyt}</li>
                        <li>Dân Tộc : {nguoiDung?.[userID]?.danToc}</li>
                        <li>Nghề Nghiệp : {nguoiDung?.[userID]?.ngheNghiep}</li>
                        <li>
                            Đơn vị công tác :{" "}
                            {nguoiDung?.[userID]?.donViCongTac}
                        </li>
                        
                    </ul>
                </div>
                <Button
                    className="edit-Profile"
                    type="primary"
                    onClick={showModal}
                >
                    Chỉnh sửa
                </Button>
            </div>
            <Modal
                title="Chỉnh sửa thông tin cá nhân"
                visible={isOpen}
                onOk={form.submit}
                onCancel={closePopup}
            >
                <Form
                    form={form}
                    onFinish={onSubmit}
                    validateMessages={validateMessages}
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 14 }}
                >
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
                        <DatePicker />
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
                </Form>
            </Modal>
        </WrapperStyled>
    );
}
