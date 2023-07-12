import { Button, Form, Input, Radio, Select } from 'antd'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { oprtions } from './projectTypeOptions';
const { Item } = Form


export const CoreJavaIntializer = () => {
    const [dependancesOptions, setDependancesOptions] = useState([])

    useEffect(() => {
        axios.get('https://start.spring.io/dependencies').then((res) => {
            console.log("data", res)
            const { data } = res
            let arr = []
            Object.getOwnPropertyNames(data.dependencies).forEach(ele => {
                arr.push({ label: ele, value: ele })
            })
            setDependancesOptions(arr)
        })
    }, [])

    return (
        <>
            {/* <Form
                onFinish={onSuccess}
                initialValues={data}
            > */}
                <Item name="project" label="Project">
                    <Radio.Group value="Maven">
                        {/* <Radio value="a">Gradel - Groovy</Radio>
                        <Radio value="b">Gradel - Kotlin</Radio> */}
                        <Radio value="Maven" checked>Maven</Radio>
                    </Radio.Group>
                </Item>
                <Item name="Language" label="Language">
                    <Radio.Group>
                        <Radio value="Java">Java</Radio>
                        {/* <Radio value="b">Kotlin</Radio>
                        <Radio value="c">Grovy</Radio> */}
                    </Radio.Group>
                </Item>
                {/* <Item  name="version" label="Spring Boot">
                    <Radio.Group>
                        <Radio value="1">3.2.0(SNAPSHOT)</Radio>
                        <Radio value="2">3.1.2(SNAPSHOT)</Radio>
                        <Radio value="3">3.1.1</Radio>
                        <Radio value="4">3.0.9(SNAPSHOT)</Radio>
                        <Radio value="5">3.0.8</Radio>
                        <Radio value="6">2.7.14(SNAPSHOT)</Radio>
                        <Radio value="7">2.7.13</Radio>
                    </Radio.Group>
                </Item> */}
                <div> project Metadata</div>
                <Item
                    name="Group"
                    label="Group"
                >
                    <Input />
                </Item>
                <Item
                    name="Artifact"
                    label="Artifact"
                >
                    <Input />
                </Item>
                <Item
                    name="Description"
                    label="Description"
                >
                    <Input />
                </Item>
                <Item
                    name="PackageName"
                    label="Package name"
                >
                    <Input />
                </Item>
                <Item name="Packaging" label="Packaging">
                    <Radio.Group>
                        <Radio value="1">Jar</Radio>
                        <Radio value="2">War</Radio>
                    </Radio.Group>
                </Item>
                <Item name="Java" label="Java">
                    <Radio.Group>
                        <Radio value="1">20</Radio>
                        <Radio value="2">17</Radio>
                        <Radio value="3">11</Radio>
                        <Radio value="4">8</Radio>
                    </Radio.Group>
                </Item>
                <Item
                    label="type"
                    name="dependancies"
                >
                    <Select
                        placeholder="select project type"
                        style={{ width: "100%" }}
                        mode="multiple"
                        options={dependancesOptions}
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                    />
                </Item>
                {/* <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button onClick={() => onBack(data)} >Back</Button>
            </Form> */}
        </>
    )
}
