{
    type Coffee = {
        shot: number,
        hasMilk:boolean,
    }

    type shot = 1 | 2 | 3;

    class CoffeeMaker {
        static BEANS_PER_SHOT:number = 30;
        bean:number = 0;

        constructor(bean:number) {
            this.bean = bean;
        }

        makeCoffee = (shot: shot): Coffee => {
            if (this.bean > CoffeeMaker.BEANS_PER_SHOT * shot) {
                this.bean = this.bean - CoffeeMaker.BEANS_PER_SHOT * shot
                return {shot,hasMilk:false}
            } else {
                throw new Error("커피가 부족합니다!");
            }
        }

        static makeMachine = (bean:number) => {
            return new CoffeeMaker(bean);
        }
    }

    const coffeeMachine = new CoffeeMaker(150);
    console.log(coffeeMachine);
    console.log(coffeeMachine.bean);
    console.log(coffeeMachine.makeCoffee(1));
    console.log(coffeeMachine.bean);
    console.log(coffeeMachine.makeCoffee(2));
    console.log(coffeeMachine.bean);
    const newMaker = CoffeeMaker.makeMachine(50);
    console.log(newMaker);

}