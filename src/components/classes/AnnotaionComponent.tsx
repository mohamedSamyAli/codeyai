import { Button, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
const { TextArea } = Input;

export const AnnotaionComponent = ({value, onChange}) => {
    const [annotation, setAnnotation] = useState('');
    const [isAnotationModalOpen, setIsAnotationModalOpen] = useState(false);

    const onAnnotaionChange = (_annotations) => {
        let annotations = _annotations.split("\n")
        onChange(annotations)
        setAnnotation(_annotations)
    }
    useEffect(() => {
        if (value&&!annotation) {
            try {

                setAnnotation(value?.join("\n") ?? [])
            } catch (error) {

            }
        }
    }, [value])
    return (
        <>
            <div onClick={() => setIsAnotationModalOpen(true)} className='p-[1px] rounded-sm text-[10px] bg-slate-200 cursor-pointer w-fit'>
                @
            </div>
            <Modal
                closable={false}
                footer={[<Button onClick={() => setIsAnotationModalOpen(false)}>Ok</Button>]}
                title={"Anotations"} open={isAnotationModalOpen}>
                <TextArea onChange={(e) => { onAnnotaionChange(e.target.value) }} value={annotation} rows={10} placeholder="Anotations" />
            </Modal>
        </>
    )
}
