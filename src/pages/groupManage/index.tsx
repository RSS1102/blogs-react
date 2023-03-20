import { Space, Card, Divider } from "antd";
import React from "react";
import "./index.scss";
import GroupApply from "./components/GroupApply";
import GroupTable from "./components/GroupTable";
import { MehOutlined } from "@ant-design/icons";

const Manage = () => {
    return <>
        <Space style={{ display: "block" }} className="blog-group">
            <Card title="blog分组添加" size="small">
                <GroupApply />
            </Card>
        </Space>
        <Divider ><MehOutlined /></Divider>
        <Space style={{ display: "block" }}>
            <Card title="blog分组管理" size="small">
                <GroupTable />
            </Card>
        </Space>
    </>;
}
export default Manage