import React, { useEffect, useState } from 'react'
import { ScopeComponent } from './ScopeComponent'
import { TypeComponent } from './TypeComponent'
import classNames from 'classnames'

export const PropertyComponent = ({ onChange, setSelectedProps = null, id, data = null }) => {
    const [value, setvalue] = useState({ propName: 'propName', propScope: "public", propType: "int" })
    const [isFocus, setIsFocus] = useState(false)

    const changeProperties = (id, name) => {
        setvalue(val => ({ ...val, [id]: name }))
    }
    useEffect(() => {
        onChange(value)
    }, [value])
    useEffect(() => {
        if (data) {
            document.getElementById(id + "title").innerText = data.propName
            changeProperties("propName", data.propName)
            changeProperties("propScope", data.propScope)
            changeProperties("propType", data.propType)
        }
    }, [])
    useEffect(() => {
        if (isFocus && setSelectedProps) {

            setSelectedProps(e => {

                let a = e.concat(id)
                console.log(e, a)
                return a
            }
            )
        }
        if (!isFocus && setSelectedProps) {
            setTimeout(() => {

                setSelectedProps(e => e.filter(ele => ele != id))
                console.log('rmv')
            }, 500);
        }
    }, [isFocus])
    return (
        <div className={classNames('w-[100%]', { 'overflow-clip': !isFocus })}>

            <div className='flex nodrag'
                onFocus={(e) => { setIsFocus(true) }} onBlur={(e) => setIsFocus(false)}
            >
                <div>
                    <ScopeComponent _val={data.propScope} onChange={(val) => changeProperties("propScope", val)} />
                </div>

                <div
                    id={id + "title"}
                    className='focus-visible:outline-none min-w-[1rem]'
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => {
                        changeProperties("propName", (e.target as HTMLElement).innerText)
                    }}
                >propName</div>
                :
                <TypeComponent onChange={(val) => changeProperties("propType", val)} _val={data?.propType} id={id} data={[]} />
            </div>
        </div>
    )
}
