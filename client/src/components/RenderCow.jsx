import React from 'react';
import IndividualCowForm from './IndividualCowForm.jsx'

class RenderCow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const individualCow = this.props.cowList.map((eachCow) =>
        <IndividualCowForm eachCow={eachCow} />
    )
    return (
      <div>
        {individualCow}
      </div>
    )
  }
}

export default RenderCow;