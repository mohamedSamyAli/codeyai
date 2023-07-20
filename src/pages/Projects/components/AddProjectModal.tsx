import { Select, Modal, Form, Input, Steps, Divider, Button } from 'antd'
import React, { useState, useCallback, useEffect } from 'react'
import { MetaData } from './ProjectsInitializeForms/MetaData';
import { SpringBootIntializer } from './ProjectsInitializeForms/SpringBootIntializer';
import { oprtions } from './ProjectsInitializeForms/projectTypeOptions';
import { CoreJavaIntializer } from './ProjectsInitializeForms/CoreJavaIntializer';
import { addOrUpdateProject, getAllProjects } from '../fakeApi';
import uniqId from "uniqid"
import { useNavigate } from 'react-router-dom';

export const AddProject_Modal = ({ isOpen, setIsOpen }) => {
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const { Item } = Form
    const [form] = Form.useForm();
    const Project_Type = Form.useWatch('Project_Type', form);



    const handleNextStep = useCallback(
        (data: any) => {
            setData(data);
            setStep(step + 1);
        },
        [step]
    );

    const handlePrevStep = useCallback(
        (data: any) => {
            setData(data);
            setStep(step - 1);
        },
        [step]
    );


    const handleSubmit = useCallback((data: any) => {
       if(data.Project_Type === 2 ){
        data.digram = getSpringInitDigrame(data.name)
       }
        setData(data);
        let id = uniqId('project')
        data.id = id
        addOrUpdateProject(data, id)
        console.log("Data", data);
        navigate("/codeyai/digrame/" + id)
    }, []);

    return (
        <Modal open={isOpen} footer={null} closable={true} onCancel={() => setIsOpen(false)}>
            <div className=''>
                {/* <Steps
                    current={step}
                    items={[
                        {
                            title: 'main info',
                        },
                        {
                            title: 'configration',
                        }
                    ]}
                /> */}
                {/* <Divider /> */}
                {/* {step == 1 && <MetaData data={data} onSuccess={handleNextStep} />} */}
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    initialValues={{ project: "maven-project", Language: "Java" }}
                >
                    <Item
                        label="type"
                        name="Project_Type"
                    >
                        <Select
                            placeholder="select project type"
                            style={{ width: 200 }}
                            options={oprtions}
                        />
                    </Item>

                    {Project_Type === 1 && (
                        <CoreJavaIntializer
                        />
                    )}
                    {Project_Type === 2 && (
                        <SpringBootIntializer
                            data={data}
                            onSuccess={handleSubmit}
                            onBack={handlePrevStep}
                        />
                    )}
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    {/* {step === 2 && (
                    <SpringBootIntializer
                        data={data}
                        onSuccess={handleSubmit}
                        onBack={handlePrevStep}
                        />
                )} */}
                </Form>
            </div>
        </Modal>
    )
}


const getSpringInitDigrame = (porject_name)=>{

    return`{\"Name":{"components":[{"componentType":"class","unDeletable":"true","componentScope":"public","innerClasses":[],"classVariables":[],"functions":[{"id":"funclkbe2gap","funcName":"static main\\n","returnType":"void","funcScope":"public","description":"import org.springframework.boot.SpringApplication;\\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\\n\\n\\n@SpringBootApplication\\npublic class ${porject_name}Application {\\n\\n    public static void main(String[] args) {\\n        SpringApplication.run(${porject_name}Application.class, args);\\n\\n    }\\n\\n}","parameters":[{"paramName":"args","paramType":"String[]"}],"functionsCall":[]}],"componentName":"${porject_name}Application"}]},\"nodes\":[{\"customData\":{"componentType":"class","unDeletable":"true","componentScope":"public","innerClasses":[],"classVariables":[],"functions":[{"id":"funclkbe2gap","funcName":"static main\\n","returnType":"void","funcScope":"public","description":"import org.springframework.boot.SpringApplication;\\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\\n\\n\\n@SpringBootApplication\\npublic class ${porject_name}Application {\\n\\n    public static void main(String[] args) {\\n        SpringApplication.run(${porject_name}Application.class, args);\\n\\n    }\\n\\n}","parameters":[{"paramName":"args","paramType":"String[]"}],"functionsCall":[]}],"componentName":"${porject_name}Application"},\"height\":74,\"id\":\"dndnode_lkbol7wr\",\"position\":{\"x\":84.53120793874203,\"y\":-90.99858220030593},\"type\":\"ClassDigram\",\"width\":200}],\"edges\":[]}`

    // return `{"Name":{"components":[{"componentType":"class","componentScope":"public","innerClasses":[],"classVariables":[],"functions":[{"id":"funclkbe2gap","funcName":"static main\\n","returnType":"void","funcScope":"public","description":"import org.springframework.boot.SpringApplication;\\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\\n\\n\\n@SpringBootApplication\\npublic class ${porject_name}Application {\\n\\n    public static void main(String[] args) {\\n        SpringApplication.run(${porject_name}Application.class, args);\\n\\n    }\\n\\n}","parameters":[{"paramName":"args","paramType":"String[]"}],"functionsCall":[]}],"componentName":"${porject_name}Application"}]}}`
}