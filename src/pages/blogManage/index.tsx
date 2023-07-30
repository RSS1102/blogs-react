import { MehOutlined } from "@ant-design/icons";
import { Card, Divider, Space } from "antd";
import React from "react"
import BlogTable from "./components/BlogTable";
import "./index.scss"

const BlogManage = () => {
    return <>
        <Space style={{ display: "block" }}>
            <Card title="blog分组添加" size="small">
                <BlogTable />
            </Card>
        </Space>
        <Divider >
            <MehOutlined />
        </Divider>
    </>;
}
export default BlogManage;