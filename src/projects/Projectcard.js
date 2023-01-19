import React from "react";
import { NavLink } from "react-router-dom";


function Projectcard({ project, handleDelete, user, editProject, setEditProject }) {
  function deleteProject() {
    fetch(`http://127.0.0.1:9292/projects/${project.id}`, {
      method: "DELETE",
    });
    handleDelete(project.id);
  }
function checker(){
  setEditProject(project) 
}
  return (
    <div className="p-2 col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
      <div className="p-2 card w-100">
      <h3 className="card-title text-center">{project.project_name}</h3>
        <img src="../src/pics/fan.jpg" alt="fan" className="img-fluid"></img>
        <div className="d-flex flex-row justify-content-center m-auto">
      <button onClick={checker} className="btn m-1 btn-secondary"><NavLink to="/Customerprojects/Additems">Add Items</NavLink></button>
      <button  className="btn m-1 btn-secondary">Update Quantity</button>
      <button onClick={deleteProject} className="btn m-1 btn-secondary">Delete</button>
      </div>
    </div>
    </div>
  );
}

export default Projectcard;
