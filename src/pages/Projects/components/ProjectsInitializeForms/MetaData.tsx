import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { oprtions } from './projectTypeOptions'
const { Item } = Form

export const MetaData = ({ onSuccess, data }) => {
    const onProjectTypeChange = (val) => {
        console.log(val)
    }
    return (
        <>
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                onFinish={onSuccess}
                initialValues={data}
            >
                <Item
                    label="type"
                    name="Project Type"
                >
                    <Select
                        placeholder="select project type"
                        style={{ width: 200 }}
                        onChange={onProjectTypeChange}
                        options={oprtions}
                    />
                </Item>
                <Item
                    label="Name"
                    name="Project Name"
                >
                    <Input />
                </Item>
                <Item
                    label="Description"
                    name="Description"
                >
                    <Input />
                </Item>
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </Form>
        </>
    )
}
