import { Button, Switch, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import "./index.scss";

interface BlogTableType {
  id: string,
  groupId: string,
  title: string,
  content: string,
  visitors: number,
  createTime: any,
  updateTime: any,
  isShow: boolean
}
const columns: ColumnsType<BlogTableType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '分组名称',
    dataIndex: 'group',
    key: 'group',
  },
  {
    title: '文章标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '文章内容',
    dataIndex: 'content',
    key: 'content',
    render: (_, { content }) => <Button type="link" color="#ffffff">详情</Button>
  },
  {
    title: '浏览量',
    dataIndex: 'visitors',
    key: 'visitors',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '是否展示',
    dataIndex: 'isShow',
    key: 'isShow',
    render: (_, { isShow }) => <Switch checked={isShow} onChange={switchChange} />
  },
]
const switchChange = (val: boolean) => {
  console.log(val)
}
const tableData: BlogTableType[] = [
  {
    id: '1',
    groupId: '1',
    title: '1',
    content: '1',
    visitors: 1,
    createTime: '2022-02-02',
    updateTime: '2022-02-02',
    isShow: true
  },
  {
    id: '2',
    groupId: '2',
    title: '2',
    content: '2',
    visitors: 2,
    createTime: '2022-02-02',
    updateTime: '2022-02-02',
    isShow: true
  }
]

const BlogTable = () => {
  return <>
    <Table
      columns={columns}
      dataSource={tableData}
    />
  </>;


}

export default BlogTable;