import { Percolation } from "percolation";
import "mathjs" as "math";
import "perf_hooks" as "performance";

class PercolationStats {
  constructor(n , trials) {
    if (n <= 0 || trial <= 0) throw new RangeError("arguments must be > 0");

    this.openSitesCount = 0;
    this.openSitesFractions = [];
    this.gridSize = n;
    this.trials = trials;

    for (let i = 0; i < this.trials; i++) {
      let p = new Percolation(n);

      while (!p.percolates()) {
        let row = Math.floor(Math.random() * 5 + 1),
            column = Math.floor(Math.random() * 5 + 1);

        if (!p.isOpen(row, column)) {
          this.openSitesCount++;
          p.open(row, column);
        }
      }

      this.openSitesFractions[i] = this.openSitesCount / this.gridSize;
      this.openSitesCount = 0;
    }

  }

  mean() {
    return this.openSitesFractions.reduce((sum, num, id) => sum + num) / this.openSitesFractions.length;
  }

  stddev() {
    if (this.trials === 1) return Null;

    return math.std(this.openSitesFractions);
  }

  confidenceLo() {
    return this.mean() - ((1.96 * this.stddev()) / Math.sqrt(trials));
  }

  confidenceHi() {
    return this.mean() + ((1.96 * this.stddev()) / Math.sqrt(trials));
  }

  main(args) {
    if (args.length !== 2) return;

    let gridSize = args[0],
        trials = args[1];

    let start = performance.now();
    let percolationStats = new PercolationStats(gridSize, trials);
    let finish = performance.now();
    let elapsedTime = start - end;

    console.log(`Elapsed time: ${elapsedTime} ms`);
    console.log(`MEAN: ${percolationStats.mean()}`);
    console.log(`STDDEV: ${percolationStats.stddev()}`);
    console.log(`95%% confidence interval: ${percolationStats.confidenceLo()}, ${percolationStats.confidenceHi()}`);
  }
}
