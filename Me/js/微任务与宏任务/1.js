const promise1 = new Promise((resolve) => {
    console.log('promise1');
    resolve('1');
    return '1t';
});

const promise2 = promise1.then((res) =>{
    console.log('promise2: ', res);
})