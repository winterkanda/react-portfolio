import React from "react";
import { Card, Button } from "react-bootstrap";

const Project = ({project}) => {
    
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/${project.img}`} />
      <Card.Body className="project-body">
        <Card.Title>{project.title}</Card.Title>
        
        <div className="project-buttons"> 
            <Button className="mr-3" style={{marginRight: "5px"}} variant="primary" href={project.link} target="_blank">Live Site</Button>
            <Button variant="primary" href={project.github} target="_blank">Github Repo</Button>
        </div>
            
      </Card.Body>
    </Card>
  );
};

export default Project;
