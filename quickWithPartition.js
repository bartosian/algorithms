class QuickSort {
    constructor(array) {
        this._array = array;
    }

    swap(leftPointer, rightPointer) {
        let temp = this.array[leftPointer];
        this.array[leftPointer] = this.array[rightPointer];
        this.array[rightPointer] = temp;
    }

    partition(leftPointer, rightPointer) {
        let pivotId = rightPointer,
            pivot = this.array[rightPointer];

        rightPointer -= 1;
        
        while(true) {
            while(this.array[leftPointer] <= pivot) {
                leftPointer += 1;
            }

            while(this.array[rightPointer] > pivot) {
                rightPointer -= 1;
            }

            if(leftPointer >= rightPointer) {
                break;
            } else {
                this.swap(leftPointer, rightPointer);
            }
        }

        this.swap(leftPointer, pivotId);

        return leftPointer;
    }

    run(leftPointer, rightPointer) {
        if((rightPointer - leftPointer) <= 0) {
            return;
        }

        let pivot = this.partition(leftPointer, rightPointer);
        console.log(pivot);

        this.run(leftPointer, pivot - 1);
        this.run(pivot + 1, rightPointer);
    }

    get array() {
        return this._array;
    }

    quickSelect(kthLowestValue, leftPointer, rightPointer) {
        if((rightPointer - leftPointer) <= 0) {
            return this.array[leftPointer];
        }

        let pivot = this.partition(leftPointer, rightPointer);

        if(kthLowestValue < pivot) {
            this.quickSelect(kthLowestValue, leftPointer, pivot - 1);
        } else if(kthLowestValue > pivot) {
            this.quickSelect(kthLowestValue, pivot + 1, rightPointer);
        } else {
            return this.array[pivot];
        }
    }
}