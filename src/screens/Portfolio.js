import React from 'react'
import Project from '../components/Project';
import projectdata from '../projectdata.js';
import {Row, Col} from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h1>My Projects</h1>
            <h2 className="mb-4">Check Out What I've Been Building!</h2>

            {/* loops through the array we made and renders a project card for each project */}
            <Row class="cards-container">
                {projectdata.map( (project) => {
                    return <Col sm={12} md={6} lg={4} className="project-col"><Project project={project}/></Col>
                })}
            </Row>
        </div>
    )
}

export default Portfolio
