import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { ScopeComponent } from './ScopeComponent'
import { TypeComponent } from './TypeComponent'

export const PropertyComponent = ({ onChange, id,data=null }) => {
    const [value, setvalue] = useState({ propName: 'propName', PropScope:"public", propType:"int" })
    const changeProperties = (id, name) => {
        setvalue(val => ({ ...val, [id]: name }))
    }
    useEffect(() => {
        onChange(value)
    }, [value])
    useEffect(()=>{
if(data){
    document.getElementById(id+"title").innerText = data.propName
}
    },[])
    return (
        <div className='flex nodrag'>
            <div>
                <ScopeComponent onChange={(val)=>changeProperties("PropScope",val) } />
            </div>

            <div 
            id={id+"title"}
            className='focus-visible:outline-none min-w-[1rem]' 
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => {
                changeProperties("propName", (e.target as HTMLElement).innerText)
            }}
            >propName</div>
            :
            <TypeComponent onChange={(val)=>changeProperties("propType", val)} _val= {data?.propType} id={id} data={[]} />
        </div>
    )
}
