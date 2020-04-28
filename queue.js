class PrintQueue {
    constructor() {
        this._queue = [];
    }

    enqueJob(job) {
        this._queue.push(job);
    }

    print() {
        while(this._queue.length) {
            let nextJob = this._queue.unshift();
            this.printDocument(nextJob);
        }
    }

    printDocument(doc) {
        console.log(doc);
    }
}