// class Logger {
//     _count;
//     get _count() {
//         return 'get'
//     }
//     set _count() {
//         this._count = '1111';
//     }
//     constructor() {
//         this.printName = this.printName.bind(this);
//     }
//     printName(name = 'there') {
//         this.print(`Hello ${name}`);
//     }

//     print(text) {
//         console.log(text);
//     }
// }

// const logger = new Logger();
// logger._count;
// const { printName } = logger;
// printName();

// class Person {
//     constructor(name) {
//         if (new.target !== undefined) {
//             this.name = name;
//         } else {
//             throw new Error('必须使用 new 命令生成实例');
//         }
//     }
// }
// var person = new Person('张三');
// var notAPerson = Person.call(person, '张三');



// class Shape {
//     constructor() {
//         if (new.target === Shape) {
//             throw new Error('本类不能实例化');
//         }
//     }
// }

// class Rectangle extends Shape {
//     constructor(length, width) {
//         super();
//         // ...
//     }
// }

// var x = new Shape();  // 报错
// var y = new Rectangle(3, 4);