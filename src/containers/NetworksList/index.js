// import React from 'react'
import { connect } from 'react-redux'

import { selectShow } from '../../actions/show'
import { networksFetchData } from '../../actions/networks'
import NetworksList from './NetworksList'

const mapStateToProps = state => ({
  items: state.networks,
})

const mapDispatchToProps = dispatch => ({
  selectShow: show => dispatch(selectShow(show)),
  fetchData: () => dispatch(networksFetchData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NetworksList)
