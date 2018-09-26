import React from 'react'
import { Helmet } from 'react-helmet'

import NetworksList from '../../containers/NetworksList'

const NetworksView = () => (
  <div className="container">
    <Helmet title="Dollyflix - Emissoras" />

    <h1>Séries por Emissora</h1>

    <NetworksList />
  </div>
)

export default NetworksView
