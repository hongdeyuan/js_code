//使用concat连接数组中的值
var a = [1, 2, 3];
console.log(a.concat(4, 5));

//使用concat连接两个数组
var arr1 = ['1', '2', '3'];
var arr2 = ['4', '5', '6'];

console.log(arr1.concat(arr2));

//使用concat连接 三个数组
var arr3 = ['1', '2', '3'];
var arr4 = ['4', '5', '6'];
var arr5 = ['7', '8', '9'];

console.log(arr3.concat(arr4, arr5));

// 由三个实例可以，总结出 ：虽然concat() 操作的参数是数组，但添加的是每个数组中的元素，而不是数组