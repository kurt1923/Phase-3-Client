import React from "react";
import Projectcard from "./Projectcard";

function Customerprojects({ user, noUsers, projects, handleDelete }) {
  return (
    <div className="user_page">
        {noUsers ? null : (
      <div>
          <>
            <h2>{user.full_name}'s Projects</h2>
            <h3>
              {user.email} | {user.phone_number}{" "}
            </h3>
          </>
        {projects === undefined || projects.length === 0 ? (
          <h3>No Projects. Go to Create Projects to get started!</h3>
          ) : (
            <ul>
            {projects.map((project) => (
              <Projectcard
              key={project.id}
              project={project}
              handleDelete={handleDelete}
              />
              ))}
          </ul>
        )}
      </div>
              )}
    </div>
  );
}

export default Customerprojects;
