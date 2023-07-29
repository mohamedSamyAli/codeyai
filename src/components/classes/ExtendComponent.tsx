import { Button, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
const { TextArea } = Input;

export const ExtendComponent = ({value, onChange,className=""}) => {
    const [Extends, setExtends] = useState('');
    const [isExtendsModalOpen, setIsExtendsOpen] = useState(false);

    const onExtendChange = (val) => {
        onChange(val)
        setExtends(val)
    }
    useEffect(() => {
        
        if (value&&!Extends) {
            try {
                setExtends(value)
            } catch (error) {
            }
        }
    }, [value])
    return (
        <>
            <div onClick={() => setIsExtendsOpen(true)} className={`p-[1px] rounded-sm ${className === "innerThreeDots"? "text-[1.2rem]":"text-[10px]"} bg-slate-200 cursor-pointer w-fit`}>
                Ex
            </div>
            <Modal
                closable={false}
                footer={[<Button onClick={() => setIsExtendsOpen(false)}>Ok</Button>]}
                title={"Extends"} open={isExtendsModalOpen}>
                <Input onChange={(e) => { onExtendChange(e.target.value) }} value={Extends}  placeholder="Extends" />
            </Modal>
        </>
    )
}
