import React, { useEffect, useState } from 'react'
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';



export const TypeComponent = ({ data = [], id, onChange, _val = null }) => {
    const [val, setval] = useState('int')
    const changeTxt = (txt) => {
        document.getElementById("prop_" + id).innerText = txt
        onChange(txt)
    }

    useEffect(() => {
        if (_val) {
            // setval(_signs[_val])
            setval(_val)
        }
    }, [])
    const items: MenuProps['items'] = [
        {
            key: 'int',
            label: (<div onClick={() => { changeTxt("int") }}>int</div>)
        },
        {
            key: 'double',
            label: (<div onClick={() => { changeTxt("double") }}>double</div>)
        },
        {
            key: 'string',
            label: (<div onClick={() => { changeTxt("string") }}>string</div>)
        },
        ...data.map(ele => ({
            key: ele,
            label: (<div onClick={() => { changeTxt(ele) }}>{ele}</div>)
        }))
    ];
    return (
        <Dropdown menu={{ items }}>
            <div
                className='cursor-pointer focus-visible:outline-none min-w-[1rem]'
                contentEditable
                suppressContentEditableWarning id={"prop_" + id}
                onInput={(e) => { onChange((e.target as HTMLElement).innerText) }}
            >
                {val}</div>
        </Dropdown>
    )
}
