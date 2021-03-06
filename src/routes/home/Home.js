/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import BoardSelection from '../../components/BoardSelection';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    chanboards: PropTypes.arrayOf(PropTypes.shape({
      board: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    // console.log(this.props.chanboards);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>4Chan Webhook</h1>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
