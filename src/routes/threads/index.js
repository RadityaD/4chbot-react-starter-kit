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
  path: '/threads/:board',
  async action(params) {
    const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{chanThreads(board:"${params.params.board}"){threads{no}}}`,
        }),
        credentials: 'include',
      });
    const { data } = await resp.json();
    console.log(data);
    // if (!data || !data.chanThreads) throw new Error('Failed to load the news feed.');
    return {
      title: '4Chan Webhook',
      component: <Layout><pre>abcde</pre></Layout>,
    };
  },

};
