import React from 'react';
import './Project.css';

/* Components */
import ProjectHeader from '../ProjectHeader'

class Project extends React.Component {
    render() {
        return(
            <div className="project-container">
                <ProjectHeader />
            </div>
        )
    }
}

export default Project