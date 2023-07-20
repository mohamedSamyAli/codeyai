import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, ReactFlowProvider, Background, updateEdge, MarkerType, ConnectionLineType, Connection, OnSelectionChangeParams } from 'reactflow';
import 'reactflow/dist/style.css';
import ClassDigram from '../../components/classes/classDigram/ClassDigram';
import InnerClassDigram from '../../components/classes/innerClassDigram/InnerClassDigram';
import InterfaceDigram from '../../components/classes/interfaceDigram/InterfaceDigram';
import '../../index.css';
// import { SideBar } from '../components/SideBar';
import { toast } from 'react-toastify';
import uniqId from "uniqid"
// import { DigramTypes } from '../components/types';
// import { download } from '../components/utils';
import { EdgeWithDescription } from '../../components/customEdges/EdgeWithDescription';
import { DigramTypes } from '../../components/classes/types';
import { download } from '../../components/classes/utils';
import { SideBar } from '../../components/classes/SideBar';
import { useParams } from 'react-router-dom';
import { addOrUpdateProject, getProject } from '../Projects/fakeApi';
import axios from 'axios'
import { saveAs } from 'file-saver';
import { Button } from 'antd';
const initBgColor = '#1A192B';

const nodeTypes = {
  ClassDigram: ClassDigram,
  InnerClassDigram: InnerClassDigram,
  InterfaceDigram: InterfaceDigram,
};

const getId = () => `dndnode_${uniqId()}`;

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const { projectId } = useParams();

  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
  const edgeUpdateSuccessful = useRef(true);
  const onDeleteRef = useRef(() => { });
  const selectedItems = useRef<OnSelectionChangeParams>({ edges: [], nodes: [] });
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
      } else if (ele.targetHandle.split('_')[0] === "func") {
        debugger
        let currentfunction = _store[ele.target]?.functions?.filter(e => e.id == ele.targetHandle.split("_")[2])[0]
        currentfunction?.functionsCall?.push({
          className: _store[ele.source].componentName,
          id: ele.sourceHandle.split("_")[1],
          functionName: _store[ele.source].functions.filter(e => e.id == ele.sourceHandle.split("_")[2])[0].funcName,
          callDescription: ""
        })
      } else if (ele.targetHandle === "innerclass") {
        debugger
        _store[ele.source].innerClasses?.push(_store[ele.target])
      }
    })

    let components = []
    Object.getOwnPropertyNames(_store).forEach(n => {
      if (_store[n].componentType !== DigramTypes.inerClass) {
        components.push(_store[n])
      }
    })
    let downloaded_digram = JSON.stringify({
      [digramName]: {
        components
      },
      //@ts-ignore
      nodes: nodes.map(({ customData, dragging, height, id, position, positionAbsolute, selected, type, width }) => {
        return { customData, dragging, height, id, position, positionAbsolute, selected, type, width }
      }),
      edges: edges
    })
    // download("digram.json", downloaded_digram)
    let project = getProject(projectId)
    project.digram = downloaded_digram
    addOrUpdateProject(project, projectId)
    // download("data.json", JSON.stringify({
    //   [digramName]: {
    //     components
    //   }
    // }))
    let ProjectBody = { ...project }
    delete ProjectBody.digram
    delete ProjectBody.Project_Type
    delete ProjectBody.id

    axios.post(process.env.REACT_APP_META_DATA,
      ProjectBody
    ).then(e => {

     
      var xhr = new XMLHttpRequest();
      xhr.open("POST", process.env.REACT_APP_JSON_LOADER, true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          // alert("Failed to download:" + xhr.status + "---" + xhr.statusText);
          var blob = new Blob([xhr.response], { type: "octet/stream" });
          var fileName = "QCPReport1.zip";
          saveAs(blob, fileName);
        }
      }
      xhr.responseType = "arraybuffer";
      xhr.send(JSON.stringify(
        {
              [digramName]: {
                components
              }
            }
      ));
    })

    console.log("store", {
      [digramName]: {
        components
      }
    })
  }

  const getDataFromlocalStorge = () => {
    let project = getProject(projectId)
    if (project.digram) {
      addExistDigrame(JSON.parse(project.digram))

    }
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
  const onReadFile = (e) => {
    store.current = {}
    var fr = new FileReader();
    fr.onload = () => {
      let digramData = JSON.parse(fr.result as string)
      // digramData.nodes.forEach(ele => {
      //   store.current[ele.customData.id] = ele.customData.id
      // })
      addExistDigrame(digramData)
      // console.log('current', store.current)
      // setNodes(digramData.nodes.map(ele => ({ ...ele, data: { customData: ele.customData, reactFlowWrapper, setNodes, setEdges, reactFlowInstance, nodes, store } })))
      // // setNodes(digramData.nodes.map(ele => ({ ...ele, data: {  reactFlowWrapper, setNodes, setEdges, reactFlowInstance, nodes, store } })))
      // setEdges(digramData.edges)
      // document.getElementById('d_name').innerText = Object.getOwnPropertyNames(digramData)[0]
      // console.log(fr.result)
    }
    fr.readAsText(e.target.files[0]);
  }
  const addExistDigrame = (digramData) => {
    console.log('current', store.current)
    setNodes(digramData.nodes.map(ele => ({ ...ele, data: { customData: ele.customData, reactFlowWrapper, setNodes, setEdges, reactFlowInstance, nodes, store } })))
    // setNodes(digramData.nodes.map(ele => ({ ...ele, data: {  reactFlowWrapper, setNodes, setEdges, reactFlowInstance, nodes, store } })))
    setEdges(digramData.edges)
    document.getElementById('d_name').innerText = Object.getOwnPropertyNames(digramData)[0]
  }
  useEffect(() => {
    window.addEventListener('error', e => {
      if (e.message === 'ResizeObserver loop limit exceeded' || e.message === 'Script error.') {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        )
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        )
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    })
    getDataFromlocalStorge()
    console.log("added")
    document.addEventListener('keydown', (e: any) => {
      if (e.code === "Delete") {
        onDeleteRef.current()
      }
    })
  }, [])

  onDeleteRef.current = () => {
    let _nodes = []
    let _edges = []
    let isNodeParent = false
    nodes.forEach(ele => {
      if (ele.parentNode == selectedItems.current.nodes[0]?.id) {
        isNodeParent = true
      }
    })
    if (isNodeParent) {
      toast.error("can't delete node that contain inner class please delete inner class first")
    } else {

      nodes.forEach(ele => {
        console.log("res=>", selectedItems.current.nodes.find(n => n.id === ele.id))
        if (!selectedItems.current.nodes.find(n => n.id === ele.id)) {
          _nodes.push(ele)
        }
      })

      edges.forEach(ele => {
        if (!selectedItems.current.nodes.find(n => n.id === ele.source || n.id === ele.target)) {
          _edges.push(ele)
        }
      })
      setNodes(_nodes)
      setEdges(_edges)
      delete store.current[selectedItems.current.nodes[0]?.id]
      console.log("store->", store,_edges,_nodes)
    }

  }
  const onSelectionChange = (e: OnSelectionChangeParams) => {
    selectedItems.current = e
  }
  return (
    <div style={{ display: "flex" }}>
      <ReactFlowProvider>
        <div style={{ width: '20vw', height: '100vh', backgroundColor: "white", border: "2px solid grey" }}>
          <SideBar />
          <Button onClick={getData} type='primary'>genrate project</Button>
          {/* <input type="file" name="inputfile" id="inputfile" onChange={onReadFile} /> */}

        </div>
        <div className='w-[80vw] h-[100vh] relative ' style={{ width: '80vw', height: '100vh' }} ref={reactFlowWrapper}>
          <div id="d_name" className='absolute z-10 focus-visible:outline-none top-[-2px] left-[5px] cursor-text  font-bold text-[35px]' contentEditable={true} suppressContentEditableWarning >
            Name
          </div>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={handelNodeChange}
            onSelectionChange={onSelectionChange}
            // onSelect={(e) => console.log("kkl", e)}
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
            {/* <MiniMap

              nodeColor={(n) => {
                if (n.type === 'selectorNode') return bgColor;
                return '#fff';
              }}
            /> */}
            <Controls />
            <Background color="#aaa" gap={16} />

          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default CustomNodeFlow;





