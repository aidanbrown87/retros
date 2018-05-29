import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './postIt.css';

export default class PostIt extends Component {
  static propTypes = {
    text: PropTypes.string,
    id: PropTypes.id,
  }

  render() {
    const { text, id } = this.props;
    return (
      <div className='postIt' >
        {text}
      </div>
    )
  }
}




