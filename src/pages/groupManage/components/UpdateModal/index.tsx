import { updateGroup } from "@/axios/model/group";
import { GroupData } from "@/types/group";
import { Modal, Form, Switch, Input, Button, message } from "antd";
import React, { useEffect } from "react";
interface UpdateModalProps {
  updateModalIsOpen: boolean;
  reverseUpdateModalIsOpen: () => void;
  groupData: GroupData;
}

const UpdateModal = (props: UpdateModalProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      group: props.groupData.group,
      isShow: props.groupData.isShow,
    });
  }, [props.groupData]);

  const onFinish = (values: UpdateModalProps["groupData"]) => {
    console.log(values);
    updateGroup({ ...values, id: props.groupData.id })
      .then((res) => {
        console.log(res);
        message.success("修改成功");
        props.reverseUpdateModalIsOpen();
      })
      .catch((err) => {
        message.error("修改失败");
      });
  };
  const Footer = (
    <Button
      type="primary"
      onClick={() => form.submit()}
    >
      确定
    </Button>
  );

  return (
    <Modal
      forceRender
      open={props.updateModalIsOpen}
      title="修改Group分组内容"
      footer={Footer}
      onCancel={() => props.reverseUpdateModalIsOpen()}
    >
      <Form
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="分组名称"
          name="group"
          rules={[
            {
              required: true,
              message: "请输入分组名称",
            },
            {
              max: 25,
              message: "分组名称最多25个字符",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="是否展示"
          name="isShow"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UpdateModal;
