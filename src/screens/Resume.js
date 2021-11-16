import React from 'react'

const Resume = () => {
    return (
        <div className="resume-container">
            
            <div>
                <h4>My Relevant Profiencies</h4>

                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>React</li>
                </ul>

            </div>

            <h5 className="mt-4">Download My Resume <a href={`${process.env.PUBLIC_URL}/images/resume.pdf`} download>Here</a> </h5>

        </div>
    )
}

export default Resume
