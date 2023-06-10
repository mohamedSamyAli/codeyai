import React, { useState } from 'react'
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

let signs = {
    1: "+",
    2: "-",
    3: "#",
    4: "~",
    
}
export const ScopeComponent = ({onChange}) => {
    const [val, setval] = useState(1)

    const items: MenuProps['items'] = [
        {
            key: 1,
            label: (<div onClick={()=>{onChange("public") ;setval(1)}}>public</div>)
        },
        {
            key: 2,
            label: (<div onClick={()=>{onChange("private") ;setval(2)}}>private</div>)
        },
        {
            key: 3,
            label: (<div onClick={()=>{onChange("internal") ;setval(3)}}>internal</div>)
        },
        {
            key: 4,
            label: (<div onClick={()=>{onChange("protected") ;setval(4)}}>protected</div>)
        }
    ];
    return (
        <Dropdown menu={{ items }}>
            <div className='cursor-pointer'>{signs[val]}</div>
        </Dropdown>
    )
}
