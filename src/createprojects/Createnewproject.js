import React, { useState, useEffect } from "react";
import Newprojectcards from "./Newprojectcards";

function Createnewproject({ user, addNewProject }) {
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
      />
    ) : null
  );
  return (
    <div>
      <h4>pick new projects</h4>
      {newProjectCards}
    </div>
  );
}

export default Createnewproject;
