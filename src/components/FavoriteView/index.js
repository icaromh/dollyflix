import React from 'react'
import { Helmet } from 'react-helmet'

import FavoriteList from '../../containers/FavoriteList'

const FavoriteView = () => (
  <div className="container">
    <Helmet title={'Dollyflix'} />
    <FavoriteList />
  </div>
)

export default FavoriteView
