import React, { useState, useEffect } from "react";
import Newprojectcards from "./Newprojectcards";

//CREATE NEW PROJECT
////map all projects in the DB
///list items that have project category matching selected created project
///selecting item creates a foreign key to the new project
function Createnewproject({user, addNewProject}) {
  const [newProjects, setNewProjects] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/projects`)
    .then((r) => r.json())
    .then((data) => {
      setNewProjects(data)
    })
  }, [])

  
  const newProjectCards = newProjects.map((newProject) => (
    newProject.customer_id === 0 ? 
    <Newprojectcards
    key={newProject.id}
    newProject={newProject}
    user = {user}
    addNewProject={addNewProject}
    />
    : null
  ))
  return (
    <div>{newProjectCards}</div>
  )
}

export default Createnewproject