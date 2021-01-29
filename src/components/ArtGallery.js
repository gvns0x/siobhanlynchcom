import React from 'react';
import './ArtGallery.css'
import './OpenArt'
import withSizes from 'react-sizes'
import styled from 'styled-components'

/* Other JS */
import { client } from '../client';
import OpenArt from './OpenArt';

const firstColumnLength = 5;
const secondColumnLength = 10;

var endLeftRowOn = 1;
var endRightRowOn = 1;

let heightsLeft = [1];
let heightsRight = [1];

var startRightRowOn = 0;
var startLeftRowOn = 0;
    
    const getEndRow = (i,w,h) => {
      const imgSize = [w, h];
      const ratio = Math.round((imgSize[1] / imgSize[0])*100)/100;
      /* Right side column */

      if(i & 1) {
        console.log("the i (right) is " + i)
      // console.log(heightsRight);
    
      console.log("Ratio (right) is " + ratio)

      let rightImageHeight = Math.round(4 * ratio);

      endRightRowOn = endRightRowOn + rightImageHeight;

      heightsRight.push(endRightRowOn);

      startRightRowOn = heightsRight[heightsRight.length - 1] + endRightRowOn;

      console.log("It's on the right and endRightRowOn = " + endRightRowOn);
      console.log("Does this make sense: start next right row on: " + startRightRowOn);

      return endRightRowOn
      } else {
        console.log("the i (left) is " + i)
        console.log("Ratio (left) is " + ratio)
        let startLeftRowOn = heightsLeft[heightsLeft.length - 1];

        let leftImageHeight = Math.round(5 * ratio);

        endLeftRowOn = endLeftRowOn + leftImageHeight;

        heightsLeft.push(endLeftRowOn);

        startLeftRowOn = heightsLeft[heightsLeft.length - 1];

        console.log("Does this make sense: start next left row on: " + startLeftRowOn);
        console.log("It's on the left, and endLeftRowOn = " + endLeftRowOn)

        return endLeftRowOn
      }
    };

    const ArtDiv = styled.div`
    height:100%;
    width:100%;
    grid-column-start: ${props => props.startColumn};
    grid-column-end: ${props => props.endColumn};
    grid-row-start: ${props => props.startRow};
    grid-row-end: ${props => props.endRow};
    background-position: center;
  `

    const GalleryGrid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(9,1fr);
    grid-template-rows: repeat(${props => props.numberOfRows}, 40%);
    max-width: 1152px;
    width: 100%;
    `

/* Handling image click */
// var showImage = "none";

// function openItem() {
//   if(showImage === "none") {
//     showImage = "flex";
//     console.log("CLIQUEIIIIII")
//     console.log(showImage)
//   } else {
//     showImage = "none";
//     console.log(showImage)
//   }
// }
class ArtGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {artList: [],
    openImage: "none",
    imageIs: "",
    pageScroll: "scroll",
    firstColumnLength: 5,
    secondColumnLength: 10,
    endLeftRowOn: 1,
    endRightRowOn: 1,
    heightsLeft: [1],
    heightsRight: [1],
    startRightRowOn: 0,
    startLeftRowOn: 0
};
  }

componentDidMount() {
  client.getEntries()
  .then((response) => {
    console.log(response)
    this.setState({
      artList: response.items
    })
  })
  .catch(console.error)
}
    // With state //
    // getEndRow(i,w,h) {
    //   const imgSize = [w, h];
    //   const ratio = Math.round((imgSize[1] / imgSize[0])*100)/100;
    //   /* Right side column */

    //   if(i & 1) {
    //     console.log("the i (right) is " + i)
    //   // console.log(heightsRight);
    
    //   console.log("Ratio (right) is " + ratio)

    //   let rightImageHeight = Math.round(4 * ratio);
    //   var newHeightsRight = [...this.state.heightsRight];
    //   newHeightsRight.push(this.state.endRightRowOn);

    //   this.setState({
    //     endRightRowOn: this.state.endRightRowOn + rightImageHeight,
    //     heightsRight: newHeightsRight,
    //     startRightRowOn: this.state.heightsRight[this.state.heightsRight.lengh - 1] + this.state.endRightRowOn
    //   })

    //   console.log("It's on the right and endRightRowOn = " + this.state.endRightRowOn);
    //   console.log("Does this make sense: start next right row on: " + this.state.startRightRowOn);

    //   return this.state.endRightRowOn
    //   } else {
    //     console.log("the i (left) is " + i)
    //     console.log("Ratio (left) is " + ratio)

    //     let leftImageHeight = Math.round(5 * ratio);

    //     var newHeightsLeft = [...this.state.heightsLeft];
    //     newHeightsLeft.push(this.state.endLeftRowOn);

    //     this.setState({
    //       startLeftRowOn: this.state.heightsLeft[this.state.heightsLeft.length - 1],
    //       endLeftRowOn: this.state.endLeftRowOn + leftImageHeight,
    //       heightsLeft: newHeightsLeft,
    //       startLeftRowOn: this.state.heightsLeft[this.state.heightsLeft.length - 1]
    //     })

    //     console.log("Does this make sense: start next left row on: " + this.state.startLeftRowOn);
    //     console.log("It's on the left, and endLeftRowOn = " + this.state.endLeftRowOn)

    //     return this.state.endLeftRowOn
    //   }
    // };

openItem(i) {
  this.setState({
    // Image is now visible
    openImage: "flex",
    // Image clicked is displayed
    imageIs: i,
    // Page scroll is blocked
    // pageScroll: "hidden"
  });
}

closeItem() {
  this.setState({
    openImage: "none"
  })
}

    render() {
        return(
          <div class="gallery-world">
          <GalleryGrid numberOfRows={24}>
            {this.state.artList.slice().map((e,i) => (e.sys.contentType.sys.id === "art" ?
              <ArtDiv startColumn={i & 1 ? firstColumnLength : 1}
              endColumn={i & 1 ? 10 : firstColumnLength}
              startRow={i & 1 ? endRightRowOn : endLeftRowOn}
              endRow={getEndRow(i,(e.fields.image.fields.file.details.image.width),(e.fields.image.fields.file.details.image.height))}
              className="artImage"
              id={"artImage-" + (i)}
              style={{backgroundImage: `url(${e.fields.image.fields.file.url})`}} onClick={() => this.openItem(e.fields.image.fields.file.url)}></ArtDiv>
              : 
              "")
            )}
          </GalleryGrid>
          <OpenArt imageToOpen={this.state.imageIs} displayArt={this.state.openImage} closeItem={() => this.closeItem()}/>
          </div>
        );
    }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
})

export default withSizes(mapSizesToProps)(ArtGallery)