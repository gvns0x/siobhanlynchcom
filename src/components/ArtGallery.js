import React from 'react';
import Gallery from "react-photo-gallery";
import './ArtGallery.css'
import withSizes from 'react-sizes'
import styled from 'styled-components'

/* Other JS */
import { client } from '../client';

const photos = [
  {
    src:'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 800,
    height: 799
  },
  {
    src:'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    width: 800,
    height: 599
  },
  {
    src:'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 600,
    height: 799
  },
  {
    src:'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 600,
    height: 799
  }
];

const firstColumnLength = 4;

let endRowOn = firstColumnLength;
    
    const getEndRow = (w,h) => {
      let startRowOn = 1;
      const imgSize = [w, h];
      const ratio = Math.round((imgSize[1] / imgSize[0])*100)/100;
    
      
      endRowOn = Math.round(endRowOn * ratio);
      console.log("Row start: " + 1 + " Row end: " + endRowOn);

      startRowOn = endRowOn

      return endRowOn
    };

    const ArtDiv = styled.div`
    height:100%;
    width:100%;
    grid-column-start: ${props => props.startColumn};
    grid-column-end: ${props => props.endColumn};
    grid-row-start: ${props => props.startRow};
    grid-row-end: ${props => props.endRow};
  `

    const GalleryGrid = styled.div`
    height:500px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: ${props => props.numberOfRows};
    max-width: 1152px;
    width: 100%;
}
    `

class ArtGallery extends React.Component {
  state = {
    artList: []
  }

componentDidMount() {
  client.getEntries()
  .then((response) => {
    console.log(response)
    this.setState({
      artList: response.items
    })
    // console.log(this.state.artList)
  })
  .catch(console.error)
}

    render() {
        return(
          <GalleryGrid>
            {this.state.artList.map((e,i) => (e.sys.contentType.sys.id == "art" ?
              <ArtDiv startColumn={i & 1 ? firstColumnLength : 1}
              endColumn={i & 1 ? 10 : firstColumnLength}
              startRow={1}
              endRow={getEndRow((e.fields.image.fields.file.details.image.width),(e.fields.image.fields.file.details.image.height))}
              className="artImage"
              id={"artImage-" + (i+1)}
              style={{backgroundImage: `url(${e.fields.image.fields.file.url})`}}></ArtDiv>
              : 
              "")
            )}
            {/* <div className="gallery-content">
            <Gallery photos={photos} margin={20} direction={"column"} columns={this.props.isMobile ? "1" : "2"}/>
            </div> */}
          </GalleryGrid>
        );
    }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
})

export default withSizes(mapSizesToProps)(ArtGallery)