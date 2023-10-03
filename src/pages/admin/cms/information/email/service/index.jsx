import { Button, Form, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import {
  getDetailDataInfo,
  postDataInfo,
  updateDataInfo,
} from "../../../../../../apis/information/api";

export const AdminEmailServices = ({ id, closeDrawer, setReloadData }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      getDetailDataInfo(id)
        .then((response) => {
          const res = [{ link: response?.data?.link }];
          form.setFieldsValue(res[0]);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id, form]);

  const onFinish = (values) => {
    values = {
      name: "Email",
      link: heading,
      type: 3,
      typeDetail: 4,
    };

    setLoading(true);
    if (!id) {
      postDataInfo(values)
        .then(() => {
          if (closeDrawer) {
            closeDrawer();
          }

          if (setReloadData) {
            setReloadData(true);
          }
          setLoading(false);
          message.success("Thêm mới thành công!");
        })
        .catch((err) => {
          setLoading(false);
          message.error("Thêm mới thất bại!");
          console.log(err);
        });
    } else {
      updateDataInfo(id, values)
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
          message.error("Cập nhật thất bại!");
        });
    }
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name={"link"}
          label={"Email liên hệ"}
          rules={[
            {
              required: true,
              message: "Chưa nhập Email",
            },
          ]}
        >
          <ReactQuill theme="snow" value={heading} onChange={setHeading} />
        </Form.Item>

        <Button htmlType="submit">{id ? "Cập nhật" : "Thêm mới"}</Button>
      </Form>
    </Spin>
  );
};
