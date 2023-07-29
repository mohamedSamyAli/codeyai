import React, { useRef, useState } from 'react'
import { Handle, Position } from 'reactflow'
import redArrow from '../../../assets/redArrow.svg'
import greenArrow from '../../../assets/greenArrow.svg'



export const FunctionHandels = ({ id, isConnectable }) => {
    return (
        <>
            <Handle
                position={Position.Left}
                style={{ top: "70%", left: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                id={"func_t1_" + id}
                type="target"
                isConnectable={isConnectable}
            >
                <img src={greenArrow} className='w-[100%] h-[100%] rotate-[-90deg] pointer-events-none' alt="" />
            </Handle>
            <Handle
                position={Position.Left}
                style={{ top: "30%", left: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                id={"func_s1_" + id}
                type="source"
                isConnectable={isConnectable}
            >
                <img src={redArrow} className='w-[100%] h-[100%] rotate-90  pointer-events-none' alt="" />
            </Handle>
            <Handle
                position={Position.Right}
                style={{ top: "65%", right: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                id={"func_t2_" + id}
                type="target"
                isConnectable={isConnectable}
            >
                <img src={greenArrow} className='w-[100%] h-[100%] rotate-90 pointer-events-none' alt="" />
            </Handle>
            <Handle
                position={Position.Right}
                style={{ top: "30%", right: "-10px", width: "10px", height: '10px', background: 'none', border: 'none' }}
                id={"func_s2_" + id}
                type="source"
                isConnectable={isConnectable}
            >
                <img src={redArrow} className='w-[100%] h-[100%] rotate-[-90deg] pointer-events-none' alt="" />
            </Handle>
        </>
    )
}
