import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://sphoton.com">GDND</a> &copy; 2020.</span>
        <span className="ml-auto">Powered by <a href="https://www.facebook.com/trongnguyen.vutran">Vũ Trần Trọng Nguyên và nhóm 6 - GDND</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
