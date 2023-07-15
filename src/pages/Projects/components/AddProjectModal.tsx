import { Select, Modal, Form, Input, Steps, Divider, Button } from 'antd'
import React, { useState, useCallback, useEffect } from 'react'
import { MetaData } from './ProjectsInitializeForms/MetaData';
import { SpringBootIntializer } from './ProjectsInitializeForms/SpringBootIntializer';
import { oprtions } from './ProjectsInitializeForms/projectTypeOptions';
import { CoreJavaIntializer } from './ProjectsInitializeForms/CoreJavaIntializer';
import { addOrUpdateProject, getAllProjects } from '../fakeApi';
import uniqId from "uniqid"

export const AddProject_Modal = ({ isOpen, setIsOpen }) => {
    const [data, setData] = useState({});
    const [step, setStep] = useState(1);
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
        setData(data);
        let id = uniqId('project')
        data.id = id
        addOrUpdateProject(data, id)
        console.log("Data", data);
    }, []);

    return (
        <Modal open={isOpen} footer={null} closable={true} onCancel={()=>setIsOpen(false)}>
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
