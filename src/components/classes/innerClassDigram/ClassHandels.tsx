import React from 'react'
import { Handle, Position } from 'reactflow'
import redArrow from '../../../assets/redArrow.svg'
import greenArrow from '../../../assets/greenArrow.svg'
export const ClassHandels = ({ isConnectable }) => {
    return (
    <>
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
                style={{ left: "50%", background: 'black', width: "10px", height: "10px", top: "calc(0% - 10px)" }}
                id={"innerclass"}
                type="target"

                isConnectable={isConnectable}
            />
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
            
            </>
            )
}
