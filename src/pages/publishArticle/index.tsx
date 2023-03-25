import React, { useEffect, useState } from 'react';
import "./index.scss"
import { Card, Form, Input, Button, Select, message, Modal, Divider } from 'antd';
import cherryMarkdownInit from '@/components/CherryMarkdown';
import { blogNavType } from '@/types/classifyType';
import { ArticleFormType } from '@/types/articleType'
const { Option } = Select
const PublishArticle: React.FC = () => {
    const [blogNavVal, setBlogNavVal] = useState<Array<blogNavType>>()
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    useEffect(() => {
        cherryMarkdownInit();
    }, [])
    // 获取文章
    const [form] = Form.useForm<ArticleFormType>();
    let onEdit = (editor: string) => {
        form.setFieldsValue({ blogContent: editor })
    }
    // 发布文章
    const onPublic = () => {
        form.validateFields().then(async (values: ArticleFormType) => {
            setIsModalVisible(true)
        }).catch(err => { })
    }
    const onFinishCancel = () => {
        setIsModalVisible(false)
    }
    const onFinish = () => {
    }
    return (
        <>
            <Modal title="是否发布文章" open={isModalVisible} onOk={onFinish} onCancel={onFinishCancel}>
                <p>请仔细核对发布的内容。</p>
            </Modal>
            <Form initialValues={{ blogContent: null }} form={form} >
                <Card >
                    <Form.Item label="标题" name='blogTitle'
                        rules={[
                            { required: true, message: '请输入标题' },
                            { max: 20, message: '标题最多20个字符' }
                        ]}>
                        <div style={{ display: 'flex' }}>
                            <Input style={{ width: '100%' }} placeholder="请输入标题" />
                            <Button style={{ marginLeft: '25px' }} size='large' type='primary'
                                onClick={onPublic}>发布</Button>
                        </div>
                    </Form.Item>
                    <Form.Item label="分类" name='blogNavs'
                        rules={[{ required: true, message: '请选择分类' }]}>
                        <Select style={{ width: '100%' }} allowClear labelInValue>
                            {blogNavVal?.map(item =>
                                <Option key={item.id} value={item.id}>{item.blogNav}</Option>)}
                        </Select>
                    </Form.Item>
                </Card>
                <Divider >文章</Divider>
                <Card >
                    <Form.Item  name='blogContent'
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
export default PublishArticle;