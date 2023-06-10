import React, { memo, useEffect, useState } from 'react';
import { Handle, Position } from 'reactflow';
import '../../App.css'
// import { store } from '../../store';
import uniqId from "uniqid"
import { FunctionComponent } from '../FunctionComponent';
import AddImage from '../../assets/addimg.svg'
import { DigramTypes } from '../types';
import redArrow from '../../assets/redArrow.svg'
import greenArrow from '../../assets/greenArrow.svg'

export default memo<any>(({ data:{store}, isConnectable, ...props }) => {
    const [properties, setProperties] = useState([])
    const [functions, setFunctions] = useState([])
    const [title, setTitle] = useState("className")


    const onAddFunction = () => {
        let id = uniqId("func")
        setFunctions(functions.concat({ id, funcName: "propName", returnType: "void", funcScope: "public", description: [], parameters: "", functionsCall: [] }))
        setTimeout(() => {
            document.getElementById(id)?.focus()
        }, 10)
    }
    useEffect(() => {
        if (!store.current[props.id]) {
            store.current[props.id] = {}
            store.current[props.id].componentType = DigramTypes.interface
            store.current[props.id].innerClasses = []

        }
        store.current[props.id].componentName = title
        store.current[props.id].componentScope = "public"
    }, [title, props.id])
    // const changefunction = (id, val) => {
    //     let func = functions.filter(ele => ele.id === id)[0]
    //     func.name = val.name
    //     func.param = val.param
    //     func.comment = val.comment

    //     setFunctions([...functions])
    //     store[props.id].functions = functions
    // }
    const changefunction = (id, val) => {
        let func = functions.filter(ele => ele.id === id)[0]
        func.funcName = val.funcName
        func.parameters = val.parameters
        func.description = val.description
        func.funcScope = val.funcScope
        func.returnType = val.returnType

        setFunctions([...functions])
        store.current[props.id].functions = functions
    }
    const focus = (id) => {
        // document.getElementById(id)?.focus()
    }
    return (
        <div>
            <div className='interfacedigram-container'>
                <Handle
                    position={Position.Top}
                    style={{ left: "45%", top: '-8px', width: "10px", height: '10px', background: 'none', border: 'none' }}
                    // className={getClassImg()}
                    id={"class_tt"}
                    type="target"
                    isConnectable={isConnectable}
                >
                    <img src={greenArrow} className='w-[100%] h-[100%]  pointer-events-none' alt="" />
                </Handle>

                <Handle
                    position={Position.Top}
                    style={{ left: "55%", top: '-8px', width: "10px", height: '10px', background: 'none', border: 'none' }}
                    id={"class_st"}
                    type="source"
                    isConnectable={isConnectable}
                >
                    <img src={redArrow} className='w-[100%] h-[100%] rotate-180 pointer-events-none' alt="" />
                </Handle>
                <Handle
                    position={Position.Bottom}
                    style={{ left: "45%", top: 'calc(100% - 1px)', width: "10px", height: '10px', background: 'none', border: 'none' }}
                    id={"class_tb"}
                    type="target"
                    isConnectable={isConnectable}
                >
                    <img src={greenArrow} className='w-[100%] h-[100%] rotate-180 pointer-events-none' alt="" />
                </Handle>
                <Handle
                    position={Position.Bottom}
                    style={{ left: "55%", top: 'calc(100% - 1px)', width: "10px", height: '10px', background: 'none', border: 'none' }}
                    id={"class_sb"}
                    type="source"
                    isConnectable={isConnectable}
                >
                    <img src={redArrow} className='w-[100%] h-[100%] pointer-events-none' alt="" />
                </Handle>
                <div className='title flex relative p-[2px] '>

                    <div suppressContentEditableWarning={true} tabIndex={0}
                        contentEditable={true} className='min-w-[1rem] focus-visible:outline-none nodrag cursor-text w-fit'
                        onInput={(e) => { setTitle((e.target as HTMLElement).innerText) }}>
                        InterfaceName
                    </div>
                    {/* <Handle
                        position={Position.Left}
                        style={{ top: "65%", background: 'green' }}
                        id={"t1_t"}
                        type="target"

                        isConnectable={isConnectable}
                    />
                    <Handle
                        position={Position.Left}
                        style={{ top: "35%", background: 'red' }}
                        id={"s1_t"}
                        type="source"

                        isConnectable={isConnectable}
                    />
                    <Handle
                        position={Position.Right}
                        style={{ top: "65%", background: 'green' }}
                        id={"t2_t"}
                        type="target"

                        isConnectable={isConnectable}
                    />
                    <Handle
                        position={Position.Right}
                        style={{ top: "35%", background: 'red' }}
                        id={"s2_t"}
                        type="source"

                        isConnectable={isConnectable}
                    /> */}
                </div>

                <div className='function flex flex-col relative'>
                    {functions.map(ele =>
                        <div className='relative w-[100%] border-b-neutral-200 ' >

                            <FunctionComponent id={ele.id} onChange={(e) => { changefunction(ele.id, e) }} />
                            <Handle
                  position={Position.Left}
                  style={{ top: "70%", left: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                  id={"t1_" + ele.id}
                  type="target"
                  isConnectable={isConnectable}
                >
                  <img src={greenArrow} className='w-[100%] h-[100%] rotate-[-90deg] pointer-events-none' alt="" />
                </Handle>
                <Handle
                  position={Position.Left}
                  style={{ top: "30%", left: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                  id={"s1_" + ele.id}
                  type="source"
                  isConnectable={isConnectable}
                >
                  <img src={redArrow} className='w-[100%] h-[100%] rotate-90  pointer-events-none' alt="" />
                </Handle>
                <Handle
                  position={Position.Right}
                  style={{ top: "65%", right: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                  id={"t2_" + ele.id}
                  type="target"
                  isConnectable={isConnectable}
                >
                  <img src={greenArrow} className='w-[100%] h-[100%] rotate-90 pointer-events-none' alt="" />
                </Handle>
                <Handle
                  position={Position.Right}
                  style={{ top: "30%", right: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                  id={"s2_" + ele.id}
                  type="source"
                  isConnectable={isConnectable}
                  >
                  <img src={redArrow} className='w-[100%] h-[100%] rotate-[-90deg] pointer-events-none' alt="" />
                </Handle>
                        </div>
                    )}
                    <div className='flex w-[100%] justify-center' > <button onClick={onAddFunction}><img className='w-[20px] h-[20px]' src={AddImage} /></button></div>

                </div>
            </div>
        </div>
    );
});


