// let isDone: boolean = true;
// //类型推导
// //在基础类型赋值的时候可以免去类型声明
// const num = 2

// const str: string = 'hello'
// //数组需要指定类型
// const arr: Array<string> = ['1', '2']
// const arr2: string[] = ['1']

// const what: any = {};

// //函数返回类型写在()之后
// function handle(param: string): string{
//     return "1"
// }

// // 函数不返回
// function handle2(param: string): void{

// }

// //null void any never unknown类型
// //unknown类型只能够赋值给any类型？

// //枚举类型
// enum Season{
//     Spring,
//     Summer,
//     Autumn,
//     Winter
// }

// let a: Season = Season.Spring

// //箭头函数
// //msg为any类型，可以打印任何类型的数据
// //可选参数需在参数后面加个问号
// let callback = (msg?: any): void => console.log(msg)

// //自定义类型
// interface Student{
//     age: number;
//     name: string;
//     bestSeasson:Season
// }

// let student: Student;

// student = {
//     age: 1,
//     name: 'XXX',
//     bestSeasson :Season.Autumn  //必须取自Season
// }

// //混合类型
// interface IPerson{
//     id:string
// }
// interface IWorker{
//     companyId:number
// }

// //取二两类型交叉
// type IStaff = IPerson & IWorker

// //前端和后端如何使用ts
//     //前端--装饰器
//     //后端-pm2 tsnode

// enum ErrorTypetoCode {
//   Success = 200,
//   NotFound = 404,
//   Unauthorized = 401,
//   InternalServerError = 500,
// }

// console.log(ErrorTypetoCode.Success);

// type Season = "spring" | "summer" | "autumn" | "winter";

// function showSeason(season: Season): void {
//   console.log(season);
// }

// showSeason("spring");

// 单类型数组
let arr: Array<string> = ["1"];


