import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  InputNumber,
  Modal,
} from "antd";
import "../index.css";
import axios from "axios";

export default function DKTiemChung() {

  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    values.firstVaxDate = values.firstVaxDate.format("L");
    values.secondVaxDate = values.secondVaxDate.format("L");
    console.log("Success:", values);
    setVisible(true);
    // Modal.success({
    //   title: "Đăng kí thành công",
    // });
    axios
      .post(`https://60ffade3bca46600171cf447.mockapi.io/api/products`, {
        name: values.name,
        sex: values.sex,
        age: values.age,
        address: values.address,
        firstVaxDate: values.firstVaxDate,
        secondVaxDate: values.secondVaxDate,
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
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

  const validateMessages = {
    required: "Hãy điền ${label} của bạn",
    types: {
      email: "Đây không phải một email hợp lệ",
    },
  };

  return (
    <>
      <h1 className="title">Đăng kí tiêm chủng</h1>
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
          label="Tên"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Giới tính" name="sex" rules={[{ required: true }]}>
          <Select style={{ width: '30%' }}>
            <Select.Option value="Nam">Nam</Select.Option>
            <Select.Option value="Nữ">Nữ</Select.Option>
            <Select.Option value="Khác">Khác</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Tuổi" name="age" rules={[{ required: true }]}>
          <InputNumber min={1} max={120} />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          width="200px"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="CMND"
          name="cmnd"
          width="200px"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="BHYT"
          name="bhyt"
          width="200px"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true ,type : "email"}]}>
          <Input />
        </Form.Item>

        <Form.Item label="Địa chỉ" name="address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Nghề nghiệp" name="job" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Địa chỉ công tác" name="jobAddress" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Dân tộc" name="folk" rules={[{ required: true }]}>
          <Select style={{ width: '30%' }}>
            <Select.Option value="Kinh">Kinh</Select.Option>
            <Select.Option value="Khác">Khác</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          label="Ngày tiêm mũi 1"
          name="firstVaxDate"
          rules={[{ required: true }]}
        >
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>

        <Form.Item
          label="Ngày tiêm mũi 2"
          name="secondVaxDate"
          rules={[{ required: true }]}
        >
          <DatePicker disabledDate={disabledDate} />
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

    </>
  );
}
