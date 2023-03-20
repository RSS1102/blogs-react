import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import React from "react";
import "./index.scss";
const GroupApply = () => {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = (value: { group: string }) => {
    modal.confirm({
      title: '你确定添加如下的分组嘛?',
      icon: <ExclamationCircleOutlined />,
      content: value.group,
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log(value)
      }
    });
  };
  const groupRules = [
    { required: true,message:"分组不能为空!"},
    {min:5,max:30,message:"文字个数应在5-30范围内!"}]
  return (<>
    {contextHolder}
 
        <Form layout="inline" className="group-apply" onFinish={(value) => confirm(value)}>
          <Form.Item name="group" label="分组添加" rules={groupRules}>
            <Input style={{ width: 350 }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">确认</Button>
          </Form.Item>
        </Form>
  </>)
}
export default GroupApply;