{
    type Coffee = {
        shots:number,
        hasMilk:boolean
    }

    type shots = 1 | 2 | 3;

    interface CoffeeMaker {
        fillBeans (num:number):void,
        makeCoffee(shots:shots):Coffee,
    }

    class CoffeeMachine implements CoffeeMaker{

        private static BEANS_PER_SHOT:number = 30;

        constructor(private beans:number) {
        }

        fillBeans(num: number) {
            this.beans += num
        }

        makeCoffee(shots:shots):Coffee {
            if (this.beans < CoffeeMachine.BEANS_PER_SHOT * shots) {
                throw new Error('커피 부족');
            }
            this.beans -= CoffeeMachine.BEANS_PER_SHOT * shots;
            return { shots, hasMilk:false}
        }

        static makeMachine (beans:number) {
            return new CoffeeMachine(beans);
        }
    }
    const maker1: CoffeeMaker = CoffeeMachine.makeMachine(120);

    console.log(maker1.makeCoffee(2));
    console.log(maker1);
}