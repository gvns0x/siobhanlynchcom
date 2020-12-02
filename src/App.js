import React from 'react';
import './App.css';

/* Components */
import Navbar from './components/Navbar'
import FeaturedArt from './components/FeaturedArt'

/* Other JS */
import { client } from './client';

/* Other */
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

class App extends React.Component {

  state = {
    articles: []
  }

componentDidMount() {
  client.getEntries()
  .then((response) => {
    console.log(response)
    this.setState({
      articles: response.items
    })
    console.log(this.state.articles)
  })
  .catch(console.error)
}
  render() {
  return (
<Fullpage>
  <FullPageSections>
    <div className="App">
      <div className="App-container">
        <FullpageSection>
          <Navbar pages={["About", "Media", "Contact"]}/>
        </FullpageSection>

        {/* Featured art goes in here */}
        {this.state.articles.map((e,i) => (
          <FullpageSection>
        <FeaturedArt image={e.fields.image.fields.file.url} date={e.fields.date} title={e.fields.title} description={e.fields.description}/>
      </FullpageSection>
        ))}
      
      </div>
    </div>
  </FullPageSections>
</Fullpage>

  );
  }
}

export default App;
