import { connect } from 'react-redux'
import RangeFilter from './RangeFilter'
import { changeLowerRange, changeUpperRange } from '../../Redux/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  }
}

const mapDispatchToProps = { changeLowerRange, changeUpperRange }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeFilter)