{
    type Coffee = {
        shot: number,
        hasMilk:boolean,
    }

    type shot = 1 | 2 | 3;

    class CoffeeMaker {
        private static BEANS_PER_SHOT:number = 30;
        private bean:number = 0;

        private constructor() {
            // this.bean = bean;
        }

        makeCoffee = (shot: shot): Coffee => {
            if (this.bean >= CoffeeMaker.BEANS_PER_SHOT * shot) {
                this.bean = this.bean - CoffeeMaker.BEANS_PER_SHOT * shot
                return {shot,hasMilk:false}
            } else {
                throw new Error("커피가 부족합니다!");
            }
        }

        static makeMachine = () => {
            return new CoffeeMaker();
        }

        showBean ():number {
            return this.bean;
        }

        fillBeans (bean:number):number {
            if (bean > 0 && bean % 1 === 0) {
                return this.bean += bean;
            }
            throw new Error("커피는 양의 정수여야합니다.");
        }
    }

    const coffeeMachine = CoffeeMaker.makeMachine();
    coffeeMachine.fillBeans(60);
    console.log(coffeeMachine);
    console.log(coffeeMachine.makeCoffee(1));
    console.log(coffeeMachine.showBean());
    // console.log(coffeeMachine.showBean());
    // console.log(coffeeMachine.makeCoffee(2));
    // console.log(coffeeMachine.showBean());
    // const newMaker = CoffeeMaker.makeMachine(50);
    // console.log(newMaker);

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4

        get age():number{
            return this.internalAge;
        }

        set age(num:number){
            this.internalAge = num;
        }

        constructor(private firstName:string, private lastName:string) {
        }
    }

    const user = new User("kim","min");
    console.log(user);
    console.log(user.fullName);
    console.log(user.age);
    user.age = 10;
    console.log(user.age);
}