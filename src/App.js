import React from 'react';
import './App.css';

/* Components */
import Navbar from './components/Navbar'
import FeaturedArt from './components/FeaturedArt'
import Scroll from './components/Scroll'

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
<div class="world">

<Navbar pages={["About", "Media", "Contact"]}/>
    <div className="App">
      <div className="App-container">
        {this.state.articles.map((e,i) => (
        <FeaturedArt image={e.fields.image.fields.file.url} date={e.fields.date} title={e.fields.title} description={e.fields.description}/>
        ))}
      </div>
    </div>
  <a href="https://www.vecteezy.com/free-vector/illustrator-cc-brushes">Illustrator Cc Brushes Vectors by Vecteezy</a>
</div>
  );
  }
}

export default App;
