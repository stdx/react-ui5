import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import sap from '../../src'

class Page1 extends React.Component {
  render() {
    return (
      <sap.ui.layout.Splitter>
        <sap.m.Page title='Page 1'>
          <sap.m.Button
            onPress={() => this.context.router.push('/page2')}
            type={sap.m.ButtonType.Emphasized}
          >
            To page 2
          </sap.m.Button>
        </sap.m.Page>
      </sap.ui.layout.Splitter>
    )
  }
}

Page1.contextTypes = {
  router: React.PropTypes.object
}

export default Page1
