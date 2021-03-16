class MaxArea {
  constructor() {
    this.mod = 1000000007;
  }

  getMax(height, width, horCuts, vertCuts) {
    horCuts.sort((a, b) => a - b);
    vertCuts.sort((a, b) => a - b);

    horCuts.unshift(0);
    horCuts.push(height);

    vertCuts.unshift(0);
    vertCuts.push(width);

    let maxWArea = Number.MIN_SAFE_INTEGER,
        maxHArea = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < horCuts.length; i++) {
      maxHArea = Math.max(horCuts[i] - horCuts[i - 1], maxHArea);
    }

    for (let i = 1; i < vertCuts.length; i++) {
      maxWArea = Math.max(vertCuts[i] - vertCuts[i - 1], maxWArea);
    }

    return (maxHArea * maxWArea) % this.mod;
  }
}
