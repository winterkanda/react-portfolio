import React from 'react'

const Resume = () => {
    return (
        <div className="resume-container">
            
            <div>
                <h4>My Relevant Profiencies</h4>

                <h3>Front-End</h3>
                <ul>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Version Control</li>
                    <li>Responsive Design</li>
                    <li>Bootstrap</li>
                    <li>Git/GitHub</li>
                </ul>

                <h3>Back-End</h3>
                <ul>
                    <li>APIs</li>
                    <li>Express</li>
                    <li>Progressive Web Applications</li>
                    <li>NodeJS</li>
                </ul>

                <h3>Coding Languages</h3>
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

                <h3>Databases</h3>
                <ul>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                </ul>

                <h3>Other</h3>
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

            <h5 className="mt-4">Download My Resume <a href={`${process.env.PUBLIC_URL}/images/resume.pdf`} download>Here</a> </h5>

        </div>
    )
}

export default Resume
