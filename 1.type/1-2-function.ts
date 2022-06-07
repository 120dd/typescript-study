{
//     const add = (num1: number, num2: number): number => {
//         return num1 + num2
//     }
// }
//
// function jsFetchNum (id:string): Promise<number> {
//     return new Promise((resolve, reject) => {
//         resolve(100);
//     })

    const printName = (firstName:string = "ih", lastName?:string)=> {
        console.log(firstName);
        console.log(lastName);
    }
    printName("chris");
    printName("chris", "choi")
    printName();

    const addNums = (...numbers:number[]):number => {
        return numbers.reduce((a, b)=>a+b)
    }
    console.log(addNums(1,2,3));
}

