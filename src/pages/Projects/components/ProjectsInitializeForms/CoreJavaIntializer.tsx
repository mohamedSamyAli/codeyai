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
                <Item name="type" label="Project">
                    <Radio.Group value="maven-project">
                        {/* <Radio value="a">Gradel - Groovy</Radio>
                        <Radio value="b">Gradel - Kotlin</Radio> */}
                        <Radio value="maven-project" checked>Maven</Radio>
                    </Radio.Group>
                </Item>
                <Item name="language" label="Language">
                    <Radio.Group>
                        <Radio value="java">Java</Radio>
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
                    name="groupId"
                    label="Group"
                >
                    <Input />
                </Item>
                <Item
                    name="artifactId"
                    label="Artifact"
                >
                    <Input />
                </Item>
                <Item
                    name="name"
                    label="Name"
                >
                    <Input />
                </Item>
                <Item
                    name="description"
                    label="Description"
                >
                    <Input />
                </Item>

                <Item
                    name="packageName"
                    label="Package name"
                >
                    <Input />
                </Item>
                <Item name="packaging" label="Packaging">
                    <Radio.Group>
                        <Radio value="jar">Jar</Radio>
                        <Radio value="war">War</Radio>
                    </Radio.Group>
                </Item>
                <Item name="javaVersion" label="Java">
                    <Radio.Group>
                        <Radio value="20">20</Radio>
                        <Radio value="17">17</Radio>
                        <Radio value="11">11</Radio>
                        <Radio value="8">8</Radio>
                    </Radio.Group>
                </Item>
                <Item
                    label="dependencies"
                    name="dependencies"
                >
                    <Select
                        placeholder="select project dependencies"
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
