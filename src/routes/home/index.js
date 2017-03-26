/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import BoardSelection from '../../components/BoardSelection';

export default 
  {
    path: '/',
    async action() {
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{chanBoards{board,title},news{title,link,content}}',
        }),
        credentials: 'include',
      });
      const { data } = await resp.json();
      if (!data || !data.chanBoards) throw new Error('Failed to load the news feed.');
      return {
        title: '4Chan Webhook',
        component: <Layout><BoardSelection board={data.chanBoards} /></Layout>,
      };
    },

  };
