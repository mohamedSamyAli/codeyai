import React, { memo, useEffect, useState } from 'react';
import { Handle, NodeResizeControl, Position } from 'reactflow';
import '../../../App.css'
import uniqId from "uniqid"
import { FunctionComponent } from '../FunctionComponent';
import AddImage from '../../../assets/addimg.svg'
import { DigramTypes } from '../types';

import { ResizeIcon } from '../CustomResizer';
import { FunctionHandels } from './FunctionHandels';
import { ClassHandels } from './ClassHandels';
import Del from '../../../assets/del.png'

export default memo<any>(({ data: { store, customData }, isConnectable, ...props }) => {
    const [functions, setFunctions] = useState([])
    const [title, setTitle] = useState("interfaceName")
    const [selectedFunc, setSelectedFunc] = useState([])


    const onAddFunction = () => {
        let id = uniqId("func")
        setFunctions(functions.concat({ id, funcName: "propName", returnType: "void", funcScope: "public", description: [], parameters: [], functionsCall: [] }))
        setTimeout(() => {
            document.getElementById(id)?.focus()
        }, 10)
    }
    useEffect(() => {
        // if (!store.current[props.id]) {
        //     store.current[props.id] = {}
        //     store.current[props.id].componentType = DigramTypes.interface
        //     store.current[props.id].innerClasses = []
        //     store.current[props.id].componentScope = "public"

        // }
        initComponentInTheStore()
        store.current[props.id].componentName = title
    }, [title, props.id])
    const initComponentInTheStore  = ()=>{
        if (!store.current[props.id]) {
          store.current[props.id] = {}
          store.current[props.id].componentType = DigramTypes.interface
          store.current[props.id].componentScope = "public"
        //   store.current[props.id].innerClasses = []
        //   store.current[props.id].classVariables = []
          store.current[props.id].functions = []
        }
      }
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
    
    useEffect(() => {
        // if (!store.current[props.id]) {
        //   store.current[props.id] = {}
        // }
        initComponentInTheStore()

        if (customData) {
          document.getElementById(props.id + "title").innerText = customData.componentName
          store.current[props.id].componentName = customData.componentName
          if (customData?.functions) {
            let tempFunctions = customData?.functions.map(({ id, funcName, returnType, funcScope, description, parameters }) => {
              return { id, funcName, returnType, funcScope, description, parameters, functionsCall: [] }
            }
            )
            setFunctions(tempFunctions)
            store.current[props.id].functions = [...tempFunctions]
          }
        }
      }, [])
    const onDelFunc = () => {
        let temp = functions.filter(e => !selectedFunc.includes(e.id))
        setFunctions(temp)
        store.current[props.id].functions = temp

    }
    return (
        <div>
            <div className='interfacedigram-container'>
                <ClassHandels isConnectable={isConnectable} />
                <div className='title flex relative p-[2px] '>
                    <div
                        id={props.id + "title"}
                        suppressContentEditableWarning={true} tabIndex={0}
                        contentEditable={true} className='min-w-[1rem] focus-visible:outline-none nodrag cursor-text w-fit'
                        onInput={(e) => { setTitle((e.target as HTMLElement).innerText) }}>
                        InterfaceName
                    </div>
                </div>
                <div className='function flex flex-col relative'>
                    {functions.map(ele =>
                        <div className='relative w-[100%] border-b-neutral-200 ' >

                            <FunctionComponent data={{...ele}} setSelectedFunc={setSelectedFunc} id={ele.id} onChange={(e) => { changefunction(ele.id, e) }} />
                            <FunctionHandels isConnectable={isConnectable} id={ele.id} />
                        </div>
                    )}
                    <div className='flex justify-center w-[100%]'>
                        <div className='flex justify-center' > <button onClick={onAddFunction}><img className='w-[20px] h-[20px]' src={AddImage} /></button></div>
                        <div className='flex  justify-center' > <button disabled={selectedFunc.length === 0} onClick={onDelFunc}><img className='w-[20px] h-[20px]' src={Del} /></button></div>
                    </div>
                    <NodeResizeControl minWidth={200} minHeight={50}>
                        <ResizeIcon />
                    </NodeResizeControl>
                </div>
            </div>
        </div>
    );
});


