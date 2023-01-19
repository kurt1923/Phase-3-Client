import React from "react";
import Projectcard from "./Projectcard";

function Customerprojects({ user, noUsers, projects, handleDelete, editProject, setEditProject }) {
  return (
    <div className="container">
        {noUsers ? null : (
      <div  className="user_page">
          <>
          <h2 className="p-5 title text-center">{user.full_name}'s Projects</h2>
          </>
        {projects === undefined || projects.length === 0 ? (
          <h3>No Projects. Go to Create Projects to get started!</h3>
          ) : (
            <div className="row">
            {projects.map((project) => (
              <Projectcard
              key={project.id}
              project={project}
              handleDelete={handleDelete}
              user={user}
              editProject={editProject}
              setEditProject={setEditProject}
              />
              ))}
          </div>
        )}
      </div>
              )}
    </div>
  );
}

export default Customerprojects;
