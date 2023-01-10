import React, {useEffect, useState} from 'react'
import Projectcard from './Projectcard'
import Createnewproject from "./Createnewproject";

function Customerprojects({ user, setUser }) {
 const [projects, setProjects] = useState([])
  
 useEffect(() => {
    fetch(`http://127.0.0.1:9292/customers/${user.id}/projects`)
    .then((r) => r.json())
    .then((data) => {
      setProjects(data)
    })
  }, [user])
console.log(projects)

function handleDelete(id) {
  const updatedProjects = projects.filter((project) => project.id !== id)
  setProjects(updatedProjects)
}

function addNewProject(addedProject) {
    const updatedProjects = [...projects, addedProject]
    setProjects(updatedProjects)
  }
  


const projectCards = projects.map((project) => (
    <Projectcard 
    key={project.id}
    project={project}
    handleDelete={handleDelete}
    />
  ))
    
  return (
    <div className='user_page'>
      <h2>{user.full_name}'s Projects</h2>
      <h3>{user.email} | {user.phone_number} </h3>
      <button>create project</button> 
      {/* btn directs to createnewprojectpage */}
       <Createnewproject user = {user} addNewProject={addNewProject}  /> 
      <h3>Projects</h3>
      {projectCards}
      



    
    </div>
  )
}

export default Customerprojects