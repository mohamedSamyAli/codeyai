import React, { useState, useEffect } from 'react'
import threeDots from '../assets/three-dots.svg'
import { Modal } from 'antd';
import { Input, Button } from 'antd';
import { TypeComponent } from './TypeComponent';
import { ScopeComponent } from './ScopeComponent';
import classNames from 'classnames';

const { TextArea } = Input;
export const FunctionComponent = ({ onChange, id }) => {
    const [value, setvalue] = useState({ funcName: 'funcName', parameters: '', description: '', funcScope: "public", returnType: "int" })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFocus, setIsFocus] = useState(false)
    const changeProperties = (id, name) => {
        setvalue(val => ({ ...val, [id]: name }))
    }
    useEffect(() => {
        console.log("get")
        onChange(value)
    }, [value])
    const onParamsChange = (e) => {
        let text = (e.target as HTMLElement).innerText
        let params = text.split(",")
        let paramsArray = params.map(ele => {
            let splitedText = ele.split(":")
            return {
                paramName: splitedText[0],
                paramType: splitedText[1],
            }
        })
        changeProperties("parameters", paramsArray)
    }
    return (
        <>
            <div className={classNames('w-[100%]', { 'overflow-clip': !isFocus })}>

                <div onFocus={(e) => { setIsFocus(true) }} onBlur={(e) => setIsFocus(false)}
                    className='functiondata w-max items-center flex min-w-[1rem] nodrag cursor-text p-[1px] focus-visible:outline-none'>
                    <ScopeComponent onChange={(val) => changeProperties("funcScope", val)} />
                    <div
                        onInput={(e) => {
                            changeProperties("funcName", (e.target as HTMLElement).innerText)
                        }}
                        suppressContentEditableWarning={true}
                        contentEditable={true} className='cursor-text w-fit min-w-[1rem] nodrag focus-visible:outline-none' >
                        funcName
                    </div>
                    (
                    <div
                        onInput={(e) => {
                            onParamsChange(e)
                        }}
                        suppressContentEditableWarning={true}
                        contentEditable={true} className='cursor-text w-fit min-w-[1rem] nodrag focus-visible:outline-none' >
                        p1
                    </div>
                    <div>

                        ){"{"}
                    </div>
                    <div className='p-[1px] flex items-center cursor-pointer bg-slate-300 rounded-sm w-fit h-[13px] mt-[3px]'>
                        <img onClick={() => setIsModalOpen(true)} alt="" src={threeDots} />
                    </div>
                    <div>
                        {"}"}:
                    </div>
                    <TypeComponent onChange={(val) => changeProperties("returnType", val)} id={id} data={["void"]} />
                </div>
            </div>
            <Modal
                closable={false}
                footer={[<Button onClick={() => setIsModalOpen(false)}>Ok</Button>]}
                title={value.funcName} open={isModalOpen}>
                <TextArea onChange={(e) => { setvalue(val => { return { ...val, description: e.target.value } }) }} value={value.description} rows={10} placeholder="Function Description" />
            </Modal>
        </>
    )
}
