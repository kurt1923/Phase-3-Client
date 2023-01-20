import React from "react";
import Newprojectcards from "./Newprojectcards";

function Createnewproject({ user, addNewProject, noUsers, projects }) {
  // const [newProjects, setNewProjects] = useState([]);

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:9292/projects`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setNewProjects(data);
  //     });
  // }, []);
console.log(projects)

  const newProjectCards = projects.map((project) =>
    project.customer_id === 0 && user != null ? (
      <Newprojectcards
        key={project.id}
        project={project}
        user={user}
        addNewProject={addNewProject}
        items={project.items}
      />
    ) : null
  );
  return (
    <div className="container">
      <h2 className="p-5 title text-center">Select A Project To Add To Your Page</h2>
      {noUsers ? null : (
      <div className="row">
      {newProjectCards}
      </div>
      )}
    </div>
  );
}

export default Createnewproject;
