import React, { useEffect, useState } from 'react'
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

let signs = {
    1: "int",
    2: "double",
    3: "string",

}

let _signs = {
    "int": 1,
    "double": 2,
    "string": 3,

}

export const TypeComponent = ({ data = [], id, onChange, _val = null }) => {
    const [val, setval] = useState(1)
    const changeTxt = (txt) => {
        document.getElementById("prop_" + id).innerText = txt
        onChange(txt)
    }
    useEffect(() => {
        if (_val) {
            setval(_signs[_val])
        }
    }, [])
    const items: MenuProps['items'] = [
        {
            key: 1,
            label: (<div onClick={() => { changeTxt("int") }}>int</div>)
        },
        {
            key: 2,
            label: (<div onClick={() => { changeTxt("double") }}>double</div>)
        },
        {
            key: 3,
            label: (<div onClick={() => { changeTxt("string") }}>string</div>)
        },
        ...data.map(ele => ({
            key: ele,
            label: (<div onClick={() => { changeTxt(ele) }}>{ele}</div>)
        }))
    ];
    return (
        <Dropdown menu={{ items }}>
            <div className='cursor-pointer focus-visible:outline-none min-w-[1rem]' contentEditable suppressContentEditableWarning id={"prop_" + id} >{signs[val]}</div>
        </Dropdown>
    )
}
