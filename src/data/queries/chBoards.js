/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import ChanBoardsType from '../types/chBoardsType';

// React.js News Feed (RSS)
const url = 'http://a.4cdn.org/boards.json';

let boards = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const chanBoards = {
  type: new List(ChanBoardsType),
  resolve() {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      boards = data.boards;
    })
    return boards;
  },
};

export default chanBoards;
