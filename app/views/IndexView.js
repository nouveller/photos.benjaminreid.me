import React from 'react';
import { connect } from 'react-redux';

import Collections from 'components/Collections';

class IndexView extends React.Component {
  componentDidMount() {
    this.props.getCollections();
  }

  render() {
    return (
      <div>
        <Collections collections={this.props.collections}></Collections>
      </div>
    );
  }
}

export default IndexView;
