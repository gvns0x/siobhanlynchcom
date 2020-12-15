import React from 'react';
import './Project.css';

/* Components */
import ProjectHeader from '../ProjectHeader'
import ArtGallery from '../ArtGallery'

class Project extends React.Component {
    render() {
        return(
            <div className="project-container">
                <ProjectHeader />
                <ArtGallery/>
            </div>
        )
    }
}

export default Project