/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import { GraphQLString as StringType } from 'graphql';
import fetch from '../../core/fetch';
import ChanThreadsType from '../types/chThreadsType';


// React.js News Feed (RSS)
const url = 'http://a.4cdn.org/boards.json';

let threads = [];

const chanThreads = {
  type: new List(ChanThreadsType),
  args: {
  	board: { type: StringType }
  },
  resolve(root, args) {
    fetch(`https://a.4cdn.org/${args.board}/threads.json`)
    .then(res => res.json())
    .then((data) => {
      threads = data;
    })
    return threads;
  },
};

export default chanThreads;
