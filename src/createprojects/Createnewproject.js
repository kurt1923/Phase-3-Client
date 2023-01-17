import React, { useState, useEffect } from "react";
import Newprojectcards from "./Newprojectcards";

function Createnewproject({ user, addNewProject, noUsers }) {
  const [newProjects, setNewProjects] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/projects`)
      .then((r) => r.json())
      .then((data) => {
        setNewProjects(data);
      });
  }, []);

  const newProjectCards = newProjects.map((newProject) =>
    newProject.customer_id === 0 && user != null ? (
      <Newprojectcards
        key={newProject.id}
        newProject={newProject}
        user={user}
        addNewProject={addNewProject}
        items={newProject.items}
      />
    ) : null
  );
  return (
    <div className="container">
      <h2 className="p-4 title text-center">Select A Project To Add To Your Page</h2>
      {noUsers ? null : (
      <div className="row">
      {newProjectCards}
      </div>
      )}
    </div>
  );
}

export default Createnewproject;
