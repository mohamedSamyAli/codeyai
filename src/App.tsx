import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, ReactFlowProvider, Background, updateEdge, MarkerType, ConnectionLineType, Connection } from 'reactflow';
import 'reactflow/dist/style.css';

import ClassDigram from './components/classes/ClassDigram';
import InnerClassDigram from './components/classes/InnerClassDigram';
import InterfaceDigram from './components/classes/InterfaceDigram';

import './index.css';
import { SideBar } from './components/SideBar';
// import { store } from './store';
import { toast } from 'react-toastify';
import uniqId from "uniqid"
import { DigramTypes } from './components/types';
import { download } from './components/utils';
import { EdgeWithDescription } from './components/customEdges/EdgeWithDescription';
import { __edges, __nodes } from './data';

const initBgColor = '#1A192B';

const nodeTypes = {
  ClassDigram: ClassDigram,
  InnerClassDigram: InnerClassDigram,
  InterfaceDigram: InterfaceDigram,
};

const getId = () => `dndnode_${uniqId()}`;

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
  const edgeUpdateSuccessful = useRef(true);
  const store = useRef({});

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);


  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);


  const onDrop =
    useCallback(
      (event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type || type === "InnerClassDigram") {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
          id: getId(),
          type,
          // dragHandle: '.function',
          position,
          // parentNode: nodes[0]?.id,

          data: { reactFlowWrapper, setNodes, setEdges, reactFlowInstance, nodes, store },
        };

        setNodes((nds) => nds.concat(newNode));
      }
      ,
      [reactFlowInstance, nodes, reactFlowWrapper, setNodes]
    );

  useEffect(() => {
    __nodes.forEach(ele=>{
      store.current[ele.customData.id]=ele.customData.id
    })
    setNodes(__nodes.map(ele => ({ ...ele, data: {customData:ele.customData, reactFlowWrapper, setNodes, setEdges, reactFlowInstance, nodes, store } })))
    setEdges(__edges)
  }, [])
  const onConnect = useCallback(
    (params: Connection) => {

      let edge = edges.filter(ele => ele.target === params.target
        && ele.targetHandle !== 'innerclass'
        && params.targetHandle.split("_")[0] === "class"
        && store.current[params.source].componentType !== DigramTypes.interface)[0]

      if (!edge) {
        return setEdges((eds) => addEdge({ ...params, type: "EdgeWithDescription" }, eds))
      } else {
        toast.error("this class has already inherit another class")
      }
    }, [edges, setEdges]
  );

  const getData = () => {
    let digramName = document.getElementById("d_name").innerText
    let _store = JSON.parse(JSON.stringify(store.current))
    let nodes_data = nodes.map((e: any) => {
      e.customData = _store[e.id]
      return e
    })
    edges.forEach(ele => {
      if (ele.targetHandle.split('_')[0] === "class") {
        if (!_store[ele.target].parentClass)
          _store[ele.target].parentClass = []

        _store[ele.target].parentClass.push({
          componentName: _store[ele.source].componentName,
          componentType: _store[ele.source].componentType,
          componentScope: _store[ele.source].componentScope
        })
      } else {
        let currentfunction = _store[ele.target].functions.filter(e => e.id == ele.targetHandle.split("_")[1])[0]
        console.log(currentfunction, _store, ele)
        currentfunction?.functionsCall?.push({
          className: _store[ele.source].componentName,
          id: ele.sourceHandle.split("_")[1],
          name: _store[ele.source].functions.filter(e => e.id == ele.sourceHandle.split("_")[1])[0].funcName
        })
      }
      if (ele.targetHandle === "innerclass") {
        _store[ele.source].innerClasses?.push(store.current[ele.target])
      }
    })
    let components = []
    Object.getOwnPropertyNames(_store).forEach(n => {
      components.push(_store[n])
    })
    download("digram.json", JSON.stringify({
      [digramName]: {
        components
      }
    }))
    //@ts-ignore
    download("nodes.json", JSON.stringify(nodes.map(({ customData, dragging, height, id, position, positionAbsolute, selected, type, width }) => {
      return { customData, dragging, height, id, position, positionAbsolute, selected, type, width }
    })))
    download("edges.json", JSON.stringify(edges))
    console.log("store", {
      [digramName]: {
        components
      }
    })
  }

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }
    edgeUpdateSuccessful.current = true;
  }, []);

  const handelNodeChange = (params) => {
    onNodesChange(params)
  }

  return (
    <div style={{ display: "flex" }}>
      <ReactFlowProvider>
        <div style={{ width: '20vw', height: '100vh', backgroundColor: "white", border: "2px solid grey" }}>
          <SideBar />
          <button onClick={getData}>get data</button>
        </div>
        <div className='w-[80vw] h-[100vh] relative ' style={{ width: '80vw', height: '100vh' }} ref={reactFlowWrapper}>
          <div id="d_name" className='absolute z-10 focus-visible:outline-none top-[-2px] left-[5px] cursor-text  font-bold text-[35px]' contentEditable={true} suppressContentEditableWarning >
            Name
          </div>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={handelNodeChange}
            // onNodeDrag={(ele) => { console.log("nodeDrag", ele) }}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            // snapToGrid={true}
            // snapGrid={[20, 20]}
            onDrop={onDrop}
            connectionLineType={ConnectionLineType.Step}
            edgeTypes={{ EdgeWithDescription }}
            onDragOver={onDragOver}
            onInit={setReactFlowInstance}
            onEdgeUpdate={onEdgeUpdate}
            onEdgeUpdateStart={onEdgeUpdateStart}
            onEdgeUpdateEnd={onEdgeUpdateEnd}
            defaultViewport={defaultViewport}
            fitView
            attributionPosition="bottom-left"
          >
            <MiniMap

              nodeColor={(n) => {
                if (n.type === 'selectorNode') return bgColor;
                return '#fff';
              }}
            />
            <Controls />
            <Background color="#aaa" gap={16} />

          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default CustomNodeFlow;





