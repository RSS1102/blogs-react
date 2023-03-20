import { Switch, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import "./index.scss";

interface GroupManageTableType {
  id: string;
  group: string;
  pageNumber: number;
  isShow: boolean;
}
const columns: ColumnsType<GroupManageTableType> = [
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
    title: '文章数量',
    dataIndex: 'pageNumber',
    key: 'pageNumber',
  },
  {
    title: '是否展示',
    dataIndex: 'isShow',
    key: 'isShow',
    render: (_, { isShow }) => <Switch checked={isShow} onChange={switchChange} />
  },
]
const switchChange=(val:boolean)=>{
  console.log(val)
}
const tableData: GroupManageTableType[]=[
  {
    id: "1",
    group: "1",
    pageNumber: 1,
    isShow: true,
  },
  {
    id: "2",
    group: "2",
    pageNumber: 2,
    isShow: true,
  }
]

const GroupTable = () => {
  return <>
    <Table
      columns={columns}
      dataSource={tableData}
    />
    </>;
  

}

export default GroupTable;