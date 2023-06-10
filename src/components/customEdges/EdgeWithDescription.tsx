import React, { useState } from 'react';
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath ,getSmoothStepPath } from 'reactflow';
import threeDots from '../../assets/three-dots.svg'

import { Button, Input, Modal } from 'antd';
// import { store } from '../../store';

const { TextArea } = Input;

const onEdgeClick = (evt, id) => {
    evt.stopPropagation();
    alert(`remove ${id}`);
};

export const EdgeWithDescription = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    source,
    target,
}: EdgeProps) => {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        fontSize: 12,
                        // everything inside EdgeLabelRenderer has no pointer events by default
                        // if you have an interactive element, set pointer-events: all
                        pointerEvents: 'all',
                    }}
                    className="nodrag nopan"
                >
                    <div className='p-[1px] flex items-center cursor-pointer bg-slate-300 rounded-sm w-fit h-[13px] mt-[3px]'>
                        <img onClick={() => setIsModalOpen(true)} alt="" src={threeDots} />
                    </div>

                </div>
            </EdgeLabelRenderer>
            <Modal
                footer={[<Button onClick={() => setIsModalOpen(false)}>Ok</Button>]}
                // title={store[source]?.componentName + "--->" + store[target]?.componentName}
                open={isModalOpen}
                closable={false}
                >
                
                <TextArea
                    // onChange={(e) => { setvalue(val => { return { ...val, description: e.target.value } }) }} value={value.description} 
                    rows={10} placeholder="Function Description" />
            </Modal>
        </>
    );
}
