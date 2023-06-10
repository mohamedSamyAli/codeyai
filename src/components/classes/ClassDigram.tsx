import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Handle, NodeResizer, Position, addEdge, useStore } from 'reactflow';
import '../../App.css'
// import { store } from '../../store';
import uniqId from "uniqid"
import { FunctionComponent } from '../FunctionComponent';
import AddImage from '../../assets/addimg.svg'
import { DigramTypes } from '../types';
import { PropertyComponent } from '../PropertyComponent';
import redArrow from '../../assets/redArrow.svg'
import greenArrow from '../../assets/greenArrow.svg'
const getId = () => `innernode_${uniqId()}`;

export default memo<any>(({ data: { store, setNodes, setEdges, reactFlowWrapper, isConnectable, reactFlowInstance, customData, ...Data }, ...props }) => {
  console.log("--->", store)
  const [properties, setProperties] = useState([])
  const [functions, setFunctions] = useState([])
  const [title, setTitle] = useState("className")
  // const setNodes = useStore(st=>st.setNodes);
  // const setEdges = useStore(st=>st.setEdges);
  const getNodes = useStore(st => st.getNodes);
  // const edges = useStore(st=>st.edges);
  const onAddFunction = () => {
    let id = uniqId("func")
    setFunctions(functions.concat({ id, funcName: "propName", returnType: "void", funcScope: "public", description: "", parameters: [], functionsCall: [] }))
    setTimeout(() => {
      document.getElementById(id)?.focus()
    }, 10)
  }

  useEffect(() => {
    if (!store.current[props.id]) {
      store.current[props.id] = {}
      store.current[props.id].componentType = DigramTypes.class
      store.current[props.id].componentScope = "public"
      store.current[props.id].innerClasses = []
    }
    store.current[props.id].componentName = title

  }, [title, props.id])
  const changefunction = (id, val) => {
    let func = functions.filter(ele => ele.id === id)[0]
    func.funcName = val.funcName
    func.parameters = val.parameters
    func.description = val.description
    func.funcScope = val.funcScope
    func.returnType = val.returnType

    setFunctions([...functions])
    console.log('fff>>', id, val)
    store.current[props.id].functions = functions
  }
  const onAddProperties = () => {
    let id = uniqId("prop")
    let newProps = properties.concat({ id, propName: "propName", PropScope: "public", propType: "int" })
    setProperties(newProps)
    setTimeout(() => {
      document.getElementById(id)?.focus()
    }, 10)
    store.current[props.id].classVariables = newProps
  }
  useEffect(() => {
    if (customData?.classVariables)
      setProperties(customData?.classVariables)
    if (customData?.functions)
      setFunctions(customData?.functions.map(({ id, funcName, returnType, funcScope, description, parameters }) => ({ id, funcName, returnType, funcScope, description, parameters })))
  }, [])
  useEffect(() => {
    console.log("prop", properties)
  }, [properties])
  const changeProperties = (id, val) => {
    let prop = properties.filter(ele => ele.id === id)[0]
    prop.propName = val.propName
    prop.PropScope = val.PropScope
    prop.propType = val.propType
    setProperties([...properties])
  }
  const onClassDataChange = () => {

  }
  const focus = (id) => {
    // document.getElementById(id)?.focus()

  }

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
          data: { setNodes, store, setEdges, reactFlowInstance },
        };
        setNodes(nds => nds.concat(newNode));
        setEdges(eds => addEdge({ source: props.id, sourceHandle: "s1_t", target: id, targetHandle: "innerclass" }, eds))
      } else {
        return;
      }

    },
    [reactFlowInstance]
  );
  const getClassImg = () => {
    return `url(${greenArrow})`
  }
  return (
    <>
      {/* <NodeResizer minWidth={200} minHeight={30} /> */}

      <div onDrop={onDrop}>
        <div className='classdigram-container border-red'>
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
          <div className='title flex relative p-[2px]'>

            <div
              suppressContentEditableWarning={true} 
              tabIndex={0}
              contentEditable={true}
              className='min-w-[1rem] focus-visible:outline-none nodrag cursor-text w-fit'
              onInput={(e) => { setTitle((e.target as HTMLElement).innerText) }}>
              ClassName
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
                {/* <div id={ele.id}
                suppressContentEditableWarning={true} contentEditable={true} key={ele.id}
                className='functiondata min-w-[1rem] nodrag focus-visible:outline-none cursor-text p-[1px] w-fit'
                placeholder='add function ...'
                onInput={(e) => {
                  changeProperties(ele.id, (e.target as HTMLElement).innerText)
                }}
                >
              </div> */}
                <PropertyComponent data={{...ele}}  id={ele.id} onChange={(val) => { changeProperties(ele.id, val) }} />
              </div>
            )}
            <div className='flex w-[100%] justify-center' > <button onClick={onAddProperties}><img className='w-[20px] h-[20px]' src={AddImage} /></button></div>
          </div>
          <div className='function flex flex-col relative'>
            {functions.map(ele =>
              <div key={ele.id} className='relative w-[100%] border-b-neutral-200 ' >
                {/* <div  id={ele.id}
                suppressContentEditableWarning={true} contentEditable={true} key={ele.id}
                className='functiondata min-w-[1rem] nodrag cursor-text p-[1px] w-fit focus-visible:outline-none'
                placeholder='add function ...'
                onInput={(e) => { changefunction(ele.id, e.target.innerText) }}
                >
              </div> */}
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
    </>
  );
});


