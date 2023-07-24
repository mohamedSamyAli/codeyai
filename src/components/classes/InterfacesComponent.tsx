import { Button, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
const { TextArea } = Input;

export const ImplementsComponent = ({value, onChange}) => {
    const [annotation, setAnnotation] = useState('');
    const [isImplementsModalOpen, setIsImplementsOpen] = useState(false);

    const onInterfacesChange = (_annotations) => {
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
            <div onClick={() => setIsImplementsOpen(true)} className='p-[1px] rounded-sm text-[10px] bg-slate-200 cursor-pointer w-fit'>
                I
            </div>
            <Modal
                closable={false}
                footer={[<Button onClick={() => setIsImplementsOpen(false)}>Ok</Button>]}
                title={"implements"} open={isImplementsModalOpen}>
                <TextArea onChange={(e) => { onInterfacesChange(e.target.value) }} value={annotation} rows={10} placeholder="implements" />
            </Modal>
        </>
    )
}
