import React from 'react';

class IndividualCowForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameClick: false
    }
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  handleNameClick(event) {
    if(this.state.nameClick === false) {
      this.setState({nameClick: true})
    } else {
      this.setState({nameClick: false})
    }
  }

  render() {
    if (this.state.nameClick === true) {
      return (
        <div>
          <li onClick={this.handleNameClick}>
            Name: {this.props.eachCow.name_}
          </li>
          <li>
            Detail: {this.props.eachCow.description_}
          </li>
          <br></br>
        </div>
      )
    } else {
      return (
        <div>
        <li onClick={this.handleNameClick}>
          Name: {this.props.eachCow.name_}
        </li>
        <br></br>
      </div>
      )
    }
  }
}

export default IndividualCowForm;