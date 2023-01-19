import React from "react";


function Newprojectcards({ newProject, user, addNewProject}) {
  function submitNewProject(e) {
    const newProjectData = {
      project_name: newProject.project_name,
      project_description: newProject.project_description,
      labor_cost: newProject.labor_cost,
      customer_id: user.id,
    };
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProjectData),
    })
      .then((r) => r.json())
      .then((data) => {
        addNewProject(data);
      });
  }
  
  //patch request array of items with id and quantity as keys build join tables in patch request
  // imgur string in table
  return (
    <div className="p-2 col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
      <div className="p-2 card w-100">
        <h3 className="card-title text-center">{newProject.project_name}</h3>
        <img src="../src/pics/fan.jpg" alt="fan" className="img-fluid"></img>
        <h5>{newProject.project_description}</h5>
        <div className="d-flex flex-row justify-content-center mt-auto">
        <button onClick={submitNewProject} type="submit" className="btn btn-secondary">
          Add
        </button>
        </div>
      </div>
    </div>
  );
}

export default Newprojectcards;
