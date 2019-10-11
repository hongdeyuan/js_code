//Array 对象属性 constructor \ length  \ prototype

// - constructor  ->返回对创建此对象的数组函数的引用。
//  constructor 属性是专门为 function 而设计的，
// 它存在于每一个function 的prototype 属性中。这个constructor 保存了指向 function 的一个引用
function employee(name, job, born) {
    this.name = name;
    this.job = job;
    this.born = born;
    this.a = 5;
}


var bill = new employee("Bill Gates", "Engineer", 1985);


console.log(employee.prototype.constructor);
console.log(typeof bill.constructor);


//prototype 使您有能力向对象添加属性和方法

employee.prototype.salary = 20000;

let efunc = new employee();

console.log('工作 ：' + efunc.salary)


function MyClass(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function(name, age) {
        console.log('name :\t' + name + '\t age : \t' + age);
    }
}




//使用prototype添加一个方法
MyClass.prototype.exam = function() {
    console.log("姓名 ：" + this.name);
}
var cls1 = new MyClass("dhyuan", 10);

console.log('MyClass.constructor.prototype \t' + cls1.constructor.prototype)

// console.log('MyClass.constructor.prototype.prototype \t' + MyClass.constructor.prototype.prototype)


cls1.exam()
cls1.toString('袁德红', '22');

//可以正常删除exam方法
delete MyClass.prototype.exam;
console.log(MyClass.prototype.exam); //undefined