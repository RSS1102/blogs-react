import { Button, Switch, Table, message } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import "./index.scss";
import { BlogData } from "@/types/blogs";
import { getBlogsList, updateBlog } from "@/axios/model/blog";
import { updateGroup } from "@/axios/model/group";

const BlogTable = forwardRef<any>((props, ref) => {
  const [blogsData, setBLogsData] = useState<BlogData[]>([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1, // 当前页码
    pageSize: 10, // 每页显示的行数
    total: 0,
  }); // 分页配置

  useImperativeHandle(ref, () => {
    return {
      getTableList: async () => getTableList(),
    };
  });

  const getTableList = async () => {
    const list = await getBlogsList({
      current: pagination.current!,
      pageSize: pagination.pageSize!,
    });
    list.data.map((item) => (item.key = item.id.toString()));
    setBLogsData(list.data);
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
    console.log(pagination);
    setPagination(pagination);
  };

  const columns: ColumnsType<BlogData> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 40,
      align: "center",
    },
    {
      title: "分组名称",
      dataIndex: "group",
      key: "group",
      width: 100,
      align: "center",
    },
    {
      title: "分组是否展示",
      dataIndex: "groupIsShow",
      key: "groupIsShow",
      width: 100,
      render: (_, { groupId, groupIsShow }) => (
        <Switch
          checked={groupIsShow}
          onChange={() => groupShow(groupId, groupIsShow)}
        />
      ),
      align: "center",
    },
    {
      title: "文章标题",
      dataIndex: "title",
      key: "title",
      width: 200,
      align: "center",
    },

    {
      title: "浏览量",
      dataIndex: "visitors",
      key: "visitors",
      width: 40,
      align: "center",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
      key: "createAt",
      width: 60,
      align: "center",
    },
    {
      title: "更新时间",
      dataIndex: "updateAt",
      key: "updateAt",
      width: 60,
      align: "center",
    },
    {
      title: "是否展示",
      dataIndex: "isShow",
      key: "isShow",
      width: 80,
      align: "center",
      render: (_, { id, isShow }) => (
        <Switch
          checked={isShow}
          onChange={() => blogShow(id, isShow)}
        />
      ),
    },
    {
      title: "文章内容",
      dataIndex: "content",
      key: "content",
      width: 80,
      align: "center",
      render: (_, { content }) => (
        <Button
          type="link"
          color="#ffffff"
        >
          详情
        </Button>
      ),
    },
  ];
  const groupShow = (id: number, isShow: boolean) => {
      console.log(isShow);
    updateGroup({ id: id, isShow: !isShow })
      .then((res) => {
        console.log(res);
        res.code === 200
          ? message.success(res.message)
          : message.error(res.message);
        getTableList();
      })
      .catch((err) => message.error(err.message));
  };
  const blogShow = (id: number, isShow: boolean) => {
    updateBlog({ id: id, isShow: !isShow })
      .then((res) => {
        res.code === 200
          ? message.success(res.message)
          : message.error(res.message);
        getTableList();
      })
      .catch((err) => message.error(err.message));
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={blogsData}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </>
  );
});

export default BlogTable;
