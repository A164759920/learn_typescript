// 不能写import exoprt, tsc编译器会把当前文件视为一个模块
// 使用该方法可以完成对第三方变量的声明
declare const wx_: any;
declare module "wx" { 
    declare const id: string
    declare function getMsg(id:string): void
}