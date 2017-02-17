import { connect } from 'react-redux'
import Board from '../components/Board'
import { addPostIt } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    postIts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPostIt: (postIt) => dispatch(addPostIt(postIt))
  }
}

const PostIts = connect(mapStateToProps, mapDispatchToProps)(Board)

export default PostIts
