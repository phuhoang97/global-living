import { Button, Form, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import {
  getDetailDataHomePage,
  postDataHomePage,
  updateDataHomePage,
} from "../../../../../apis/home/api";
import ReactQuill from "react-quill";

const AdminCMSLocationServices = ({ id, closeDrawer, setReloadData }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState("");
  const [heading, setHeading] = useState("");
  const [invest, setInvest] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      getDetailDataHomePage(id)
        .then((response) => {
          form.setFieldsValue(response?.data[0]);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const onFinish = (values) => {
    values = {
      ...values,
      title: "location",
      img: [],
      number: 0,
      descriptionNumber: 0,
      video: "",
      invest: invest,
      comment: "",
      userComment: "",
      detail: detail,
      heading: heading,
    };

    setLoading(true);
    if (!id) {
      postDataHomePage(values)
        .then(() => {
          if (closeDrawer) {
            closeDrawer();
          }

          if (setReloadData) {
            setReloadData(true);
          }
          setLoading(false);
          message.success("Thêm mới thành công!");
        })
        .catch(() => {
          setLoading(false);
          message.error("Thêm mới thất bại!");
        });
    } else {
      updateDataHomePage(id, values)
        .then((response) => {
          if (closeDrawer) {
            closeDrawer();
          }

          if (setReloadData) {
            setReloadData(true);
          }
          setLoading(false);
          message.success("Cập nhật thành công!");
        })
        .catch(() => {
          setLoading(false);
          message.error("Cập nhật thất bại!");
        });
    }
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name={"heading"}
          label={"Địa chỉ Hà Nội"}
          rules={[
            {
              required: true,
              message: "Chưa nhập địa chỉ Hà Nội",
            },
          ]}
        >
          <ReactQuill theme="snow" value={heading} onChange={setHeading} />
        </Form.Item>

        <Form.Item
          name={"detail"}
          label={"Địa chỉ Thành phố Hồ Chí Minh"}
          rules={[
            {
              required: true,
              message: "Chưa nhập địa chỉ Thành phố Hồ Chí Minh",
            },
          ]}
        >
          <ReactQuill theme="snow" value={detail} onChange={setDetail} />
        </Form.Item>

        <Form.Item
          name={"invest"}
          label={"Địa chỉ Nha Trang"}
          rules={[
            {
              required: true,
              message: "Chưa nhập địa chỉ Nha Trang",
            },
          ]}
        >
          <ReactQuill theme="snow" value={invest} onChange={setInvest} />
        </Form.Item>

        <Button htmlType="submit">{id ? "Cập nhật" : "Thêm mới"}</Button>
      </Form>
    </Spin>
  );
};

export default AdminCMSLocationServices;
