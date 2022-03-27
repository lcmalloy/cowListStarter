import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCowSubmission = this.handleCowSubmission.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  handleCowSubmission(event) {
    event.preventDefault();
    this.props.handleAddCow(this.state.name, this.state.description);
    this.setState({name: '', description: ''});
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Add Name...'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type='text'
            placeholder='Add Description...'
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <button onClick={this.handleCowSubmission}>Add Cow</button>
        </form>
      </div>
    )
  }
}

export default AddCow;

