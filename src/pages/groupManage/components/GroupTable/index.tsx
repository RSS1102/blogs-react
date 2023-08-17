import { Button, Switch, Table, message } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import "./index.scss";
import { getGroupList, updateGroup } from "@/axios/model/group";
import { GetGroupListRes, GroupData } from "@/types/group";
import UpdateDialog from "../UpdateModal";

const GroupTable = forwardRef<any>((props, ref) => {
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState<boolean>(false);
  const [groupData, setGroupData] = useState<GroupData>({} as GroupData);
  const [groupList, setGroupList] = useState<GetGroupListRes["data"]>([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1, // 当前页码
    pageSize: 10, // 每页显示的行数
    total: 0,
  }); // 分页配置

  const columns: ColumnsType<GroupData> = [
    {
      title: "Id",
      width: 100,
      align: "center",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "分组名称",
      align: "center",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "文章数量",
      width: 100,
      align: "center",
      dataIndex: "pageNumber",
      key: "pageNumber",
    },
    {
      title: "创建时间",
      width: 200,
      align: "center",
      dataIndex: "createAt",
      key: "createAt",
    },
    {
      title: "更新时间",
      width: 200,
      align: "center",
      dataIndex: "updateAt",
      key: "updateAt",
    },
    {
      title: "是否展示",
      width: 200,
      align: "center",
      dataIndex: "isShow",
      key: "isShow",
      render: (_, { id, isShow }) => (
        <Switch
          checked={isShow}
          onChange={(_isShow) => groupShow(id, _isShow)}
        />
      ),
    },
    {
      title: "详情",
      width: 200,
      align: "center",
      dataIndex: "data",
      key: "data",
      render: (_, data) => (
        <Button
          type="primary"
          onClick={(_isShow) => setDetails(data)}
        >
          修改
        </Button>
      ),
    },
  ];
  const setDetails = (data: GroupData) => {
    console.log(data);
    setGroupData(data);
    setUpdateModalIsOpen(true);
  };

  useImperativeHandle(ref, () => {
    return {
      getTableList: async () => getTableList(),
    };
  });

  /**
   * @description: 获取分组列表
   */
  const getTableList = async () => {
    const list = await getGroupList({
      current: pagination.current!,
      pageSize: pagination.pageSize!,
    });
    list.data.map((item) => (item.key = item.id.toString()));
    setGroupList(list.data);
    setPagination((prevPagination) => ({
      ...prevPagination,
      total: list.total,
    }));
  };
  useEffect(() => {
    getTableList();
  }, [pagination.current, pagination.pageSize]);

  // 分页配置
  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination(pagination);
  };

  const groupShow = (id: number, isShow: boolean) => {
    updateGroup({ id: id, isShow: isShow })
      .then((res) => {
        res.code === 200
          ? message.success(res.message)
          : message.error(res.message);
        getTableList();
      })
      .catch((err) => message.error(err.message));
  };

  return (
    <div ref={ref}>
      <UpdateDialog
        updateModalIsOpen={updateModalIsOpen}
        reverseUpdateModalIsOpen={() => {
          setUpdateModalIsOpen(false);
          getTableList();
        }}
        groupData={groupData}
      />
      <Table
        columns={columns}
        dataSource={groupList}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
});

export default GroupTable;
