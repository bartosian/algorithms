const util = require('util')

class TrieNode {
  constructor() {
    this.RADIX = 26;
    this.isEnd = false;
    this.links = new Array(this.Radix);
  }

  containsKey(ch) {
    let charCode = ch.charCodeAt(0);

    return !!this.links[charCode - 97];
  }

  get(ch) {
    let charCode = ch.charCodeAt(0);

    return this.links[charCode - 97];
  }

  put(ch, node) {
    let charCode = ch.charCodeAt(0);

    this.links[charCode - 97] = node;
  }

  setEnd() {
    this.isEnd = true;
  }

  isEnd() {
    return this.isEnd;
  }
}

class Trie2 {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let currentChar = word[i];

      if (!node.containsKey(currentChar)) {
        node.put(currentChar, new TrieNode());
      }

      node = node.get(currentChar);
    }

    node.setEnd();
  }

  searchPrefix(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let curLetter = word[i];

      if (node.containsKey(curLetter)) {
        node = node.get(curLetter);
      } else {
        return null;
      }
    }

    return node;
  }

  search(word) {
    let node = this.searchPrefix(word);

    return node && node.isEnd();
  }

  startsWith(prefix) {
    let node = this.searchPrefix(prefix);

    return !!node;
  }
}

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.word = word;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.word !== undefined;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

class Solution {
    constructor() {
        this.result = [];
        this.trie = new Trie();
        this.board = null;
    }

    findWords(board, words) {
        let root = this.trie.root;

        for (let word of words) {
            this.trie.insert(word);
        }

        this.board = board;
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (root[board[row][col]]) {
                    this.backtracking(row, col,root);
                }
            }
        }

        return this.result;
    }

    backtracking(row, col, parent) {
        let letter = this.board[row][col],
            currNode = parent[letter];

        if (currNode.word) {
            this.result.push(currNode.word);
            currNode.word = null;
        }

        this.board[row][col] = "#";

        let rowOffset = [-1, 0, 1, 0],
            colOffset = [0, 1, 0, -1];

        for (let i = 0; i < 4; i++) {
            let newRow = row + rowOffset[i],
                newCol = col + colOffset[i];

            if (newRow < 0 || newRow >= this.board.length || newCol < 0 || newCol >= this.board[0].length) continue;

            if (currNode[this.board[newRow][newCol]]) this.backtracking(newRow, newCol, currNode);
        }

        this.board[row][col] = letter;

        if (Object.keys(currNode).length === 0) {
            delete parent[letter];
        }
    }
}


var findWords = function(board, words) {
    let solution = new Solution();

    return solution.findWords(board, words);
};

function orangesRotting(grid) {
  let queue = [],
      minutes = 0,
      fresh = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] == 2) queue.push([i, j]);
    }
  }

  while (queue.length && fresh) {
    let dR = [0, -1, 0, 1],
        dC = [-1, 0, 1, 0];

    let next = [];

    while (queue.length) {
      let current = queue.shift();

      for (let i = 0; i < dR.length; i++) {
        let nR = current[0] + dR[i],
            nC = current[1] + dC[i];

        if (nR >= 0 && nC >= 0 && nR < grid.length && nC < grid[0].length) {
          if (grid[nR][nC] === 1) {
            grid[nR][nC] = 2;
            fresh--;
            next.push([nR, nC]);
          }
        }
      }
    }

    minutes++;
    queue = next;
  }

  return fresh == 0 ? minutes : -1;
}
