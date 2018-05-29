import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './postIt.css';

export default class PostIt extends Component {
  static propTypes = {
    text: PropTypes.string,
    id: PropTypes.id,
    updatePostIt: PropTypes.func.isRequired
  }

  updateText = (event) => {
    const { updatePostIt, id } = this.props;
    updatePostIt(id, event.target.value)

  }

  render() {
    const { text, id,  } = this.props;
    return (
      <div className='postIt' >
        <input className='postItInput' value={text} onChange={this.updateText} />
      </div>
    )
  }
}



