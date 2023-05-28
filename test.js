// insertion sort
const insertion_sort = (A) => {
    let n = A.length;
    for (j = 1; j < n; j++) {
        let key = A[j]
        let i = j - 1;
        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i]
            i = i - 1
        }
        A[i + 1] = key
    }
    return A
}

// merge sort
const merge_sort = (A) => {
    if (A.length <= 1) {
        return A
    }

    let mid = Math.floor(A.length / 2);
    let left = A.slice(0, mid);
    let right = A.slice(mid);

    let sorted_left = merge_sort(left)
    let sorted_right = merge_sort(right)

    return merge(sorted_left, sorted_right)
}

const merge = (left, right) => {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
    }

    return mergedArray;

}

// assign random number
function getRandomInt(A, size) {
    for (let i = 0; i < size; i++) {
        A.push(Math.floor(Math.random() * Math.floor(1000)))
    }
    return A
}

// main
let test1000 = new Array(1000)
let test2000 = new Array(2000)
let test3000 = new Array(3000)
let test4000 = new Array(4000)
let test5000 = new Array(5000)
let test6000 = new Array(6000)
let test7000 = new Array(7000)
let test8000 = new Array(8000)
let test9000 = new Array(9000)
let test10000 = new Array(10000)

getRandomInt(test1000, 1000)
getRandomInt(test2000, 2000)
getRandomInt(test3000, 3000)
getRandomInt(test4000, 4000)
getRandomInt(test5000, 5000)
getRandomInt(test6000, 6000)
getRandomInt(test7000, 7000)
getRandomInt(test8000, 8000)
getRandomInt(test9000, 9000)
getRandomInt(test10000, 10000)

// test insertion sort
console.log("********* insertion test start ********")

let start = Date.now()
insertion_sort(test1000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test2000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test3000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test4000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test5000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test6000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test7000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test8000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test9000)
console.log(Date.now() - start)

start = Date.now()
insertion_sort(test10000)
console.log(Date.now() - start)

console.log("********* insertion test end ********")

getRandomInt(test1000, 1000)
getRandomInt(test2000, 2000)
getRandomInt(test3000, 3000)
getRandomInt(test4000, 4000)
getRandomInt(test5000, 5000)
getRandomInt(test6000, 6000)
getRandomInt(test7000, 7000)
getRandomInt(test8000, 8000)
getRandomInt(test9000, 9000)
getRandomInt(test10000, 10000)

console.log("********* merge test start ********")

start = Date.now()
merge_sort(test1000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test2000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test3000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test4000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test5000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test6000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test7000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test8000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test9000)
console.log(Date.now() - start)

start = Date.now()
merge_sort(test10000)
console.log(Date.now() - start)

console.log("********* merge test end ********")