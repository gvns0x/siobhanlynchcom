import React from 'react';

/* Components */
import ProjectMeta from './ProjectMeta'
import {ReactComponent as Signature} from '../images/signature.svg';
import {ReactComponent as Year2019} from '../images/year2019.svg';

/* CSS */
import './ProjectHeader.css'

class ProjectHeader extends React.Component {

    render() {
        return(
            <div class="project">
            <div className="project-header">
                <div class="project-header-wrapper">
                    <div className="project-header-content">
                        <Year2019 className="year"/>
                        <div className="project-header-title">
                            <Signature/>
                            <h1>Graphic scores</h1>
                        </div>
                    </div>
                    <div className="project-header-description">
                    <p>This series of oil paintings was based on the preparation and competition for a boxing title. It looks at a dialogue and relationship between father and son both in their coaching and contention.</p>
                    </div>
                </div>
                <ProjectMeta/>
            </div>
            </div>
        )
    }
}

export default ProjectHeader