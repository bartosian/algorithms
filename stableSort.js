Array.prototype.stableSort = function(cmp) {
    cmp = !!cmp ? cmp : (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }

    let stabilizedTHis = this.map((el, index) => [el, index]);
    let stableCmp = (a, b) => {
      let order = cmp(a, b);
      if (order !== 0) return order;

      return a[1] - b[1];
    }

    stabilizedTHis.sort(stableCmp);

    for (let i = 0; i < this.length; i++) {
      this[i] = stabilizedTHis[i][0];
    }

    return this;
}
