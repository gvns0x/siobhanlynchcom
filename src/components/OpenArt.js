import React from 'react';
import './OpenArt.css'
import styled from 'styled-components'


const FullScreenContainer = styled.div`
    background-color: rgba(255,255,255,0.97);
    position: fixed;
    left: 0;
    top:0;
    display: ${props => props.displayArt};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 100;
  `

class OpenArt extends React.Component {
    render() {
        return(
            <FullScreenContainer displayArt={this.props.displayArt}>
                <div class="media-content">
                <img class="open-image" src={this.props.imageToOpen}/>
                <p class="image-description">Pen on cartridge | Construction no. 1 (2020)</p>
                </div>
                <button onClick={this.props.closeItem} class="close-button">Back</button>
            </FullScreenContainer>
        )
    }
}

export default OpenArt