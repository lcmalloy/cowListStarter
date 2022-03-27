import React from 'react';
import ReactDOM from 'react-dom';
import AddCow from './components/AddCow.jsx';
import axios from 'axios';
import RenderCow from './components/RenderCow.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cows: []
    };
    this.handleAddCow = this.handleAddCow.bind(this);
  }

  handleAddCow(name, detail) {
    const cowDetail = {name: name, description: detail};
    axios.post('/api/create', cowDetail)
    .then(() => {
      axios.get('/api/retrieve')
      .then((result) => {
        this.setState({cows: result.data});
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }

  componentDidMount() {
    axios.get('/api/retrieve')
    .then((result) => {
      this.setState({cows: result.data});
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      console.log(this.state.cows);
    })
  }

  render() {
    return (
      <div>
        Cow List
        <div>
          <RenderCow cowList={this.state.cows}/>
        </div>
        <div>
          <AddCow handleAddCow={this.handleAddCow}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));