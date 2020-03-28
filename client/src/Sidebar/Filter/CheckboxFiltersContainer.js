import { connect } from 'react-redux'
import CheckboxFilters from './CheckboxFilters'
import { toggleFilter } from '../../Redux/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  }
}

const mapDispatchToProps = { toggleFilter }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxFilters)