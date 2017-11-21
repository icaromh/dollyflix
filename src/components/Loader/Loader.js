import React from 'react';
import Spinner from './Spinner';

export default class Loader extends React.Component {
  render() {
    if (this.props.for) return this.props.render();

    const title = this.props.title && (<h1 className='loader__title'>{this.props.title}</h1>)

    return (
      <div className="loader">
        {title}
        <Spinner />
      </div>
    );
  }
}
