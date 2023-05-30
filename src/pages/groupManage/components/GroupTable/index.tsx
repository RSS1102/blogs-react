import { Switch, Table } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import React, {useEffect, useState } from "react";
import "./index.scss";
import { getGroupList } from "@/axios/model/blog";
import { GroupData, GroupListRes } from "@/types/blog";

const columns: ColumnsType<GroupData> = [
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
const switchChange = (val: boolean) => {
  console.log(val)
}

const GroupTable = () => {
  const [groupList, setGroupList] = useState<GroupListRes['data']>([])
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1, // 当前页码
    pageSize: 10, // 每页显示的行数
    total: 0
  }); // 分页配置

  const getTableList = async () => {
    const t = await getGroupList({ current: pagination.current!, pageSize: pagination.pageSize! })
    t.data.map(item => item.key = item.id)

    console.log(t.data, t)
    setGroupList(t.data)
    setPagination((prevPagination) => ({ ...prevPagination, total: t.total }))
  }
  useEffect(() => {
    getTableList()
  }, [pagination.current, pagination.pageSize]);

  // 分页配置
  const handleTableChange = (pagination: TablePaginationConfig) => {
    console.log(pagination)
    setPagination(pagination);
  };

  return <Table columns={columns} dataSource={groupList} pagination={pagination} onChange={handleTableChange} />;
}

export default GroupTable;