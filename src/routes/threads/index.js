/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import BoardSelection from '../../components/BoardSelection';

export default {
  path: '/threads/:id',
  async action(params) {
    const resp = await fetch('/graphql?query={chanBoards{board,title}}')
    const { data } = await resp.json();
    console.log(params.params.id);
    // if (!data || !data.chanBoards) throw new Error('Failed to load the news feed.');
    return {
      title: '4Chan Webhook',
      component: <Layout><pre>ABCDE</pre></Layout>,
    };
  },

};
