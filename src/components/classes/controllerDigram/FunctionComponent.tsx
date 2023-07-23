import React, { useState, useEffect } from 'react'
import threeDots from '../../../assets/three-dots.svg'
import { Modal } from 'antd';
import { Input, Button } from 'antd';
import { TypeComponent } from '../TypeComponent';
import { ScopeComponent } from '../ScopeComponent';
import classNames from 'classnames';
import { AnnotaionComponent } from './AnnotaionComponent';

const { TextArea } = Input;
export const FunctionComponent = ({ data = null, setSelectedFunc = null, onChange, id }) => {
    const [value, setvalue] = useState({ funcName: 'funcName', parameters: [], description: '', annotaion: [], funcScope: "public", returnType: "int" })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [annotation, setAnnotation] = useState('');
    const [isAnotationModalOpen, setIsAnotationModalOpen] = useState(false);
    const [isFocus, setIsFocus] = useState(false)
    const changeProperties = (id, name) => {
        setvalue(val => ({ ...val, [id]: name }))
    }
    useEffect(() => {
        onChange(value)
    }, [value])
    useEffect(() => {
        if (data) {
            setvalue(data)
            document.getElementById(id + 'funcName').innerText = data.funcName
            try {

                setAnnotation(data.annotaion?.join("\n") ?? [])
            } catch (error) {

            }
            let paramText = ''
            data?.parameters?.forEach((ele, i) => {
                paramText += ele.paramName
                paramText += ":" + ele.paramType
                if (i < data.parameters.length - 1) {
                    paramText += ","
                }
            })
            document.getElementById(id + 'param').innerText = paramText
        }
    }, [])
    useEffect(() => {
        if (isFocus && setSelectedFunc) {
            setSelectedFunc(e => {
                let a = e.concat(id)
                return a
            }
            )
        }
        if (!isFocus && setSelectedFunc) {
            setTimeout(() => {

                setSelectedFunc(e => e.filter(ele => ele != id))
            }, 500);
        }
    }, [isFocus])
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
    const onAnnotaionChange = (_annotations) => {
        let annotations = _annotations.split("/n")

        changeProperties("annotaion", annotations)
        setAnnotation(_annotations)
    }
    return (
        <>
            <div className={classNames('w-[100%]', { 'overflow-clip': !isFocus })}>
                {/* <div onClick={() => setIsAnotationModalOpen(true)} className='p-[1px] rounded-sm text-[10px] bg-slate-200 cursor-pointer w-fit'>
                    @
                </div> */}
                <AnnotaionComponent value={data.annotaion} onChange={(e)=>{changeProperties("annotaion", e)}} />
                <div onFocus={(e) => { setIsFocus(true) }} onBlur={(e) => setIsFocus(false)}
                    className='functiondata w-max items-center flex min-w-[1rem] nodrag cursor-text p-[1px] focus-visible:outline-none'>
                    <ScopeComponent onChange={(val) => changeProperties("funcScope", val)} _val={data?.funcScope} />
                    <div
                        id={id + 'funcName'}
                        onInput={(e) => {
                            changeProperties("funcName", (e.target as HTMLElement).innerText)
                        }}
                        suppressContentEditableWarning={true}
                        contentEditable={true} className='cursor-text w-fit min-w-[1rem] nodrag focus-visible:outline-none' >
                        funcName
                    </div>
                    (
                    <div
                        id={id + 'param'}
                        onInput={(e) => {
                            onParamsChange(e)
                        }}
                        suppressContentEditableWarning={true}
                        contentEditable={true} className='cursor-text w-fit min-w-[1rem] nodrag focus-visible:outline-none' >

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
                    <TypeComponent onChange={(val) => changeProperties("returnType", val)} _val={data?.returnType} id={id} data={["void"]} />
                </div>
            </div>
            <Modal
                closable={false}
                footer={[<Button onClick={() => setIsModalOpen(false)}>Ok</Button>]}
                title={value.funcName} open={isModalOpen}>
                <TextArea onChange={(e) => { setvalue(val => { return { ...val, description: e.target.value } }) }} value={value.description} rows={10} placeholder="Function Description" />
            </Modal>
            <Modal
                closable={false}
                footer={[<Button onClick={() => setIsAnotationModalOpen(false)}>Ok</Button>]}
                title={"Anotations"} open={isAnotationModalOpen}>
                <TextArea onChange={(e) => { onAnnotaionChange(e.target.value) }} value={annotation} rows={10} placeholder="Anotations" />
            </Modal>
        </>
    )
}
