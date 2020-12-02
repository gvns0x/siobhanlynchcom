import React from 'react';
import './FeaturedArt.css'
import Tilt from 'react-tilt'
import withSizes from 'react-sizes'

class FeaturedArt extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
<div className="featuredart">
        
    {this.props.isMobile ? 
    
    /* For mobile – no tilting */
    <div className="featuredart-container">
        <div className="featuredart-content">
            <div className="featuredart-image" style={{backgroundImage: `url(${this.props.image})`}}/>
        </div>
        <div className="featuredart-copy">
            <h3 className="featuredart-date">{this.props.date}</h3>
                <h1 className="featuredart-title">{this.props.title}</h1>
                <p className="featuredart-description">{this.props.description}</p>
        </div>
    </div> :
    
    /* Desktop, above 1024 – tilting is on */
    <Tilt className="Tilt" options={{ max : 50 , reset: false, reverse:true, speed: 5000, scale:1}}>
        <div className="Tilt-inner featuredart-content">
            <div className="featuredart-image" style={{backgroundImage: `url(${this.props.image})`}}/>
            <div className="featuredart-copy">
            <h3 className="featuredart-date">{this.props.date}</h3>
            <h1 className="featuredart-title">{this.props.title}</h1>
            <p className="featuredart-description">{this.props.description}</p>
        </div>
        </div> 
        </Tilt>}
        </div>
        )
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 1024,
})

export default withSizes(mapSizesToProps)(FeaturedArt)