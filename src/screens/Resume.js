import React from 'react'

const Resume = () => {
    return (
        <div className="resume-container">
            
            <div className="resume-header">
                <h3>My Relevant Profiencies</h3>
            </div>
            <div>
                

                <h4>Front-End</h4>
                <ul>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Version Control</li>
                    <li>Responsive Design</li>
                    <li>Bootstrap</li>
                    <li>Git/GitHub</li>
                </ul>

                <h4>Back-End</h4>
                <ul>
                    <li>APIs</li>
                    <li>Express</li>
                    <li>Progressive Web Applications</li>
                    <li>NodeJS</li>
                </ul>

                <h4>Coding Languages</h4>
                <ul>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>HTML5</li>
                    <li>ES6</li>
                    <li>c++</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                </ul>

                <h4>Databases</h4>
                <ul>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                </ul>

                <h4>Other</h4>
                <ul>
                    <li>Trilingual</li>
                    <li>Product Management</li>
                    <li>Marketing</li>
                    <li>Finance</li>
                    <li>Adobe Suite</li>
                    <li>SAP Systems</li>
                    <li>Google Suite</li>
                    <li>Microsoft Suite</li>
                    <li>Visual Basic Application (VBA)</li>
                </ul>

            </div>

            <h1 className="mt-4">Download My Resume <a href={`${process.env.PUBLIC_URL}/images/resume.pdf`} download>Here</a> </h1>

        </div>
    )
}

export default Resume
