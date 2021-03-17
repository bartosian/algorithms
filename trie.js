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

class Trie {
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
    node.isWord = true;
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
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}
