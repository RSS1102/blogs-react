import React, { useEffect, useState } from 'react';
import "./index.scss"
import { Card, Form, Input, Button, Select, message, Modal, Divider } from 'antd';
import Cherry from 'cherry-markdown';
import { toolbarsOptions } from '@/components/CherryMarkdown/cherryMarkdownConfig';
import { getGroupList } from '@/axios/model/blog';
import { GroupData } from '@/types/blog';
const { Option } = Select
const WriteArticle: React.FC = () => {
    const [groupList, setGroupList] = useState<GroupData[]>([])
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [cherry, setCherry] = useState<Cherry>();
    const handGetGroupList = async () => {
        const list = await getGroupList({ current: -1, pageSize: -1 });
        setGroupList(list.data)
    }

    useEffect(() => {
        handGetGroupList()
        setCherry(new Cherry({
            id: 'cherry-markdown',
            value: 'init',
            toolbars: toolbarsOptions(),
        }));
    }, [])

    const [form] = Form.useForm();

    // 发布文章
    const validArticle = () => {
        console.log(cherry!.getHtml())
        form.validateFields()
            .then(async (values) => {
                setIsModalVisible(true)
            })
    }
    const onPublic = () => {
        setIsModalVisible(false)
    }
    const unFinish = () => {

    }

    return (
        <>
            <Modal title="是否发布文章" open={isModalVisible} onOk={onPublic} onCancel={unFinish}>
                <p>请仔细核对发布的内容。</p>
            </Modal>
            <Form form={form} >
                <Card >
                    <Form.Item label="标题" name='title'
                        rules={[
                            { required: true, message: '请输入标题' },
                            { max: 20, message: '标题最多20个字符' }
                        ]}>
                        <div style={{ display: 'flex' }}>
                            <Input style={{ width: '100%' }} placeholder="请输入标题" />
                            <Button style={{ marginLeft: '25px' }} size='large' type='primary' onClick={validArticle}>发布</Button>
                        </div>
                    </Form.Item>
                    <Form.Item label="分类" name='groupId'
                        rules={[{ required: true, message: '请选择分类' }]}>
                        <Select style={{ width: '100%' }} allowClear labelInValue>
                            {groupList?.map(item =>
                                <Option key={item.id} value={item.id}>{item.group}</Option>)}
                        </Select>
                    </Form.Item>
                </Card>
                <Card >
                    <Form.Item name='content'
                        rules={[
                            { min: 50, message: '文章最最少50个字符' },
                            { max: 20000, message: '文章最多20000个字符' },
                        ]}
                    >
                        <div className='cherry-markdown' id='cherry-markdown'></div>
                    </Form.Item>
                </Card>
            </Form>

        </>
    )
}
export default WriteArticle;