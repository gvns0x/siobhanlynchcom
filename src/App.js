import React from 'react';
import './App.css';

/* Components */
import Home from './components/mains/Home'
import Project from './components/mains/Project'

/* Other JS */
import { client } from './client';

/* Other */
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

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
<div data-scroll-container class="world">
    <div data-scroll-section className="App">
      <div className="App-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/graphicscores" component={Project} />
        </Switch>
      </div>
    </div>
</div>
  );
  }
}

export default App;
