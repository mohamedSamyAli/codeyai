import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import { AddProject_Modal } from './components/AddProjectModal'
import { getAllProjects } from './fakeApi'
import { Link } from "react-router-dom"
export const Projects = () => {
    const [isAddModalopen, setIsAddModalOpen] = useState(false)
    const [projects, setProJects] = useState([]);

    useEffect(() => {

        updateProjects()
    }, [isAddModalopen])
    const updateProjects = () => {
        setProJects(getAllProjects())
    }
    const onAddProjectClick = () => {
        setIsAddModalOpen(true)
    }
    return (
        <div>
            <Button onClick={onAddProjectClick}>
                AddProject
            </Button>
            <div className='flex'>
                {projects.map(ele => {
                    return <div key={ele.id} className='w-fit p-2  hover:cursor-pointer m-1 
                border-solid border-black border-[1px] border-solid'>
                        <Link to={'/digrame/'+ele.id}>
                            {ele.PackageName}
                        </Link>
                    </div>
                })}
            </div>
            <AddProject_Modal isOpen={isAddModalopen} setIsOpen={setIsAddModalOpen} />
        </div>
    )
}
