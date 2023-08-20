import React, { useEffect, useState } from 'react';
import "./index.scss"
import { Card, Form, Input, Button, Select, message, Modal } from 'antd';
import Cherry from 'cherry-markdown';
import { createBlog, getBlogs, updateBlog } from '@/axios/model/blog';
import { GroupData } from '@/types/group';
import { cherryConfig } from '@/components/CherryMarkdown';
import { getGroupList } from '@/axios/model/group';
import { useLocation } from "react-router";


const PublishArticle: React.FC = () => {
    const { Option } = Select;
    const [cherry, setCherry] = useState<Cherry>()
    const [groupList, setGroupList] = useState<GroupData[]>([])
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [createVSupdate, setCreateVSupdate] = useState<boolean>(false)
    const location = useLocation()

    const handGetGroupList = async () => {
        const list = await getGroupList({ current: -1, pageSize: -1 });
        setGroupList(list.data)
    }

    // 查询文章赋值
    useEffect(() => {
        const id = new URLSearchParams(location.search).get('id');
        if (!id) return
        const intId = parseInt(id)
        setCreateVSupdate(true)
        getBlogs({ id: intId }).then(res => {
            console.log(res)
            form.setFieldsValue({ title: res.data.title, groupId: res.data.groupId })
            cherry?.setValue(res.data.contentMd || '')
        })
    }, [cherry])


    useEffect(() => {
        handGetGroupList()
        setCherry(new Cherry(cherryConfig))
    }, [])

    const [form] = Form.useForm();

    // 校验文章
    const validArticle = () => form.validateFields().then(async (values) => setIsModalVisible(true))

    const onCreateBlog = () => {
        console.log(cherry?.getMarkdown(), cherry?.getHtml())
        const blogData = Object.assign(form.getFieldsValue(), { contentMd: cherry?.getMarkdown(), contentHtml: cherry?.getHtml() })
        createBlog(blogData).then(res => {
            message.success('发布成功')
        }).catch(err => {
            message.error('发布失败')
        })
        setIsModalVisible(false)
    }

    const onUpdateBlog = () => {
        const id = new URLSearchParams(location.search).get('id');
        if (!id) return
        const intId = parseInt(id)
        const blogData = Object.assign(form.getFieldsValue(), { content: cherry?.getHtml(), id: intId })

        updateBlog(blogData).then(res => {
            console.log(res)
            message.success('更新成功')
        }).catch(err => {
            message.error('更新失败')
        })
        setIsModalVisible(false)
    }


    const TitleInput = (props: { title?: string }) => (
        <div style={{ display: 'flex' }}>
            <Input style={{ width: '100%' }} placeholder="请输入标题" {...props} />
            <Button style={{ marginLeft: '25px' }} size='large' type='primary' onClick={validArticle}>{createVSupdate ? "更新" : "发布"}</Button>
        </div>
    );

    return (
        <>
            <Modal title={createVSupdate ? "是否更新文章?" : "是否发布文章?"}
                open={isModalVisible} onOk={createVSupdate ? onUpdateBlog : onCreateBlog}
                onCancel={() => setIsModalVisible(false)}>
                <p>请仔细核对发布的内容。</p>
            </Modal>

            <Form form={form} >
                <Card >
                    <Form.Item label="标题" name='title'
                        rules={[
                            { required: true, message: '请输入标题' },
                            { max: 20, message: '标题最多20个字符' }
                        ]}>
                        <TitleInput />
                    </Form.Item>
                    <Form.Item label="分类" name='groupId'
                        rules={[{ required: true, message: '请选择分类' }]}>
                        <Select style={{ width: '100%' }} allowClear>
                            {groupList?.map(item =>
                                <Option key={item.id} value={item.id}>{item.group}</Option>)}
                        </Select>
                    </Form.Item>
                </Card>
                <Card >
                    <Form.Item name='contentMd'
                        rules={[
                            { min: 5, message: '文章最最少5个字符' },
                            { max: 20000, message: '文章最多20000个字符' },
                        ]}
                    >
                        <div className='cherry-markdown' id='cherry-markdown' />
                    </Form.Item>
                </Card>
            </Form>

        </>
    )
}
export default PublishArticle;