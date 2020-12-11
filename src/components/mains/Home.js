import React from 'react';

/* Components */
import FeaturedArt from '../FeaturedArt'
import Scroll from '../Scroll'
import Hero from '../Hero'

/* Other JS */
import { client } from '../../client';

/* Other */
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'


class Home extends React.Component {

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
<div>
      <Hero />
        {this.state.articles.map((e,i) => (
          <div class="section">
        <FeaturedArt image={e.fields.image.fields.file.url} date={e.fields.date} title={e.fields.title} description={e.fields.description}/>
        </div>
        ))}
      </div>
  );
  }
}

export default Home;