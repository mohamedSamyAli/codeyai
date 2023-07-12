import React, { memo, useCallback, useEffect, useState } from 'react';
import { Handle, NodeResizeControl, Position, addEdge, useStore } from 'reactflow';
import '../../../App.css'
import uniqId from "uniqid"
import { FunctionComponent } from '../FunctionComponent';
import AddImage from '../../../assets/addimg.svg'
import { DigramTypes } from '../types';
import { PropertyComponent } from '../PropertyComponent';
import Del from '../../../assets/del.png'
import { ResizeIcon } from '../CustomResizer';
import { ClassHandels } from './ClassHandels';
import { FunctionHandels } from './FunctionHandels';

const getId = () => `innernode_${uniqId()}`;

export default memo<any>(({ data: { customData, store, setNodes, setEdges, reactFlowWrapper, reactFlowInstance, ...Data }, isConnectable, ...props }) => {
  const [properties, setProperties] = useState([])
  const [functions, setFunctions] = useState([])
  const [title, setTitle] = useState("innerCalss")
  const [selectedProps, setSelectedProps] = useState([])
  const [selectedFunc, setSelectedFunc] = useState([])
  const onAddFunction = () => {
    let id = uniqId("func")
    setFunctions(functions.concat({ id, funcName: "funcName", returnType: "int", funcScope: "public", description: "", parameters: [], functionsCall: [] }))
    setTimeout(() => {
      document.getElementById(id)?.focus()
    }, 10)
  }
  useEffect(() => {
    // if (!store.current[props.id]) {

    //   store.current[props.id] = {}
    //   store.current[props.id].componentType = DigramTypes.inerClass
    //   store.current[props.id].parentId = DigramTypes.inerClass
    //   store.current[props.id].componentScope = "public"
    //   store.current[props.id].innerClasses = []

    // }
    initComponentInTheStore()
    store.current[props.id].componentName = title
  }, [title, props.id])
  const initComponentInTheStore  = ()=>{
    if (!store.current[props.id]) {
      store.current[props.id] = {}
      store.current[props.id].componentType = DigramTypes.inerClass
      store.current[props.id].componentScope = "public"
      store.current[props.id].innerClasses = []
      store.current[props.id].classVariables = []
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
  const onAddProperties = () => {
    let id = uniqId("prop")
    let newProps = properties.concat({ id, propName: "propName", propScope: "public", propType: "int" })
    setProperties(newProps)
    setTimeout(() => {
      document.getElementById(id)?.focus()
    }, 10)
    console.log("first")
    store.current[props.id].classVariables = newProps
  }
  const changeProperties = (id, val) => {
    let prop = properties.filter(ele => ele.id === id)[0]
    prop.propName = val.propName
    prop.propScope = val.propScope
    prop.propType = val.propType
    console.log(properties)
    setProperties([...properties])
    store.current[props.id].classVariables = properties

  }
  const onDelProps = () => {
    let newProps = properties.filter(e => !selectedProps.includes(e.id))
    setProperties(newProps)
    console.log("first")
    store.current[props.id].classVariables = newProps

  }
  const onDelFunc = () => {
    let temp = functions.filter(e => !selectedFunc.includes(e.id))
    setFunctions(temp)
    store.current[props.id].functions = temp

  }
  const onClassDataChange = () => {

  }
  const focus = (id) => {
    // document.getElementById(id)?.focus()

  }
  useEffect(() => {
    // if (!store.current[props.id]) {
    //   store.current[props.id] = {}
    // }
    initComponentInTheStore()

    if (customData) {
      document.getElementById(props.id + "title").innerText = customData.componentName
      store.current[props.id].componentName = customData.componentName

      if (customData?.classVariables) {
        setProperties(customData?.classVariables)
        store.current[props.id].classVariables = customData?.classVariables
      }
      if (customData?.functions) {
        let tempFunctions = customData?.functions.map(({ id, funcName, returnType, funcScope, description, parameters }) => {
          return { id, funcName, returnType, funcScope, description, parameters, functionsCall: [] }
        }
        )
        setFunctions(tempFunctions)
        store.current[props.id].functions = [...tempFunctions]
      }
    }
    console.log("innnner",store.current[props.id])

  }, [])

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      // const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (type === "InnerClassDigram") {

        let id = getId()
        const newNode = {
          id: id,
          type,
          // dragHandle: '.function',
          position: {
            x: 100,
            y: 100
          },
          parentNode: props.id,
          data: { reactFlowWrapper, setNodes, setEdges, store, reactFlowInstance },
        };
        debugger
        setNodes(nds => nds.concat(newNode));
        setEdges(eds => addEdge({ source: props.id, sourceHandle: "s1_t", target: id, targetHandle: "innerclass" }, eds))
      } else {
        return;
      }

    },
    [reactFlowInstance]
  );

  return (
    <>
      <div onDrop={onDrop}>
        <div className='innerclassdigram-container border-red'>
          <ClassHandels isConnectable={isConnectable} />

          <div className='title flex relative p-[2px]'>

            <div
              id={props.id + "title"}
              suppressContentEditableWarning={true} tabIndex={0}
              contentEditable={true} className='min-w-[1rem] focus-visible:outline-none nodrag cursor-text w-fit'
              onInput={(e) => { setTitle((e.target as HTMLElement).innerText) }}>
              innerCalss
            </div>
            <Handle
              position={Position.Right}
              style={{ top: "35%", background: 'red' }}
              id={"s1_t"}
              type="source"
              isConnectable={isConnectable}
            />

          </div>

          <div className='function flex flex-col relative'>
            {properties.map(ele =>
              <div key={ele.id} className='relative w-[100%] border-b-neutral-200 ' >
                <PropertyComponent setSelectedProps={setSelectedProps} data={{ ...ele }} id={ele.id} onChange={(val) => { changeProperties(ele.id, val) }} />
              </div>
            )}

            <div className='flex justify-center w-[100%]'>

              <div className='flex  justify-center' > <button onClick={onAddProperties}><img className='w-[20px] h-[20px]' src={AddImage} /></button></div>
              <div className='flex  justify-center' > <button disabled={selectedProps.length === 0} onClick={onDelProps}><img className='w-[20px] h-[20px]' src={Del} /></button></div>
            </div>          </div>
          <div className='function flex flex-col relative'>
            {functions.map(ele =>
              <div key={ele.id} className='relative w-[100%] border-b-neutral-200 ' >
                <FunctionComponent setSelectedFunc={setSelectedFunc} data={{ ...ele }} id={ele.id} onChange={(e) => { changefunction(ele.id, e) }} />
                <FunctionHandels isConnectable={isConnectable} id={ele.id} />
              </div>
            )}
            <div className='flex justify-center w-[100%]'>
              <div className='flex justify-center' > <button onClick={onAddFunction}><img className='w-[20px] h-[20px]' src={AddImage} /></button></div>
              <div className='flex  justify-center' > <button disabled={selectedFunc.length === 0} onClick={onDelFunc}><img className='w-[20px] h-[20px]' src={Del} /></button></div>
            </div>            <NodeResizeControl minWidth={200} minHeight={50}>
              <ResizeIcon />
            </NodeResizeControl>
          </div>
        </div>
      </div>
    </>
  )
});


