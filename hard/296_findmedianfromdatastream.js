
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const binarySearch = n => {
        let left = 0
        let right = this.arr.length
        while(left < right) {
            let middle = Math.floor((left+right)/2)
            if ( n > this.arr[middle] ) left = middle + 1
            else right = middle
        }
        this.arr.splice(left,0,n)
    }
    
    if(this.arr.length === 0) this.arr.push(num)
    else binarySearch(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const avg = Math.floor(this.arr.length/2)
    if (this.arr.length%2 === 0) {
        return ((this.arr[avg - 1] + this.arr[avg]) / 2)
    } else {
        return (this.arr[avg])
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */