{
    type Coffee = {
        shot: number,
        hasMilk: boolean,
    }

    type shot = 1 | 2 | 3;

    interface CoffeeMaker {
        makeCoffee(shot:shot): Coffee;
    }

    class Coffeemachine implements CoffeeMaker{
        private static BEANS_PER_SHOT: number = 30;
        private bean: number = 33;

        private constructor() {
            // this.bean = bean;
        }

        grindBeans(shot: shot) {
            console.log(`그라인드: ${shot}샷`);
            if (this.bean < Coffeemachine.BEANS_PER_SHOT * shot) {
                throw new Error("커피콩이 충분하지않아요!");
            }
            this.bean -= Coffeemachine.BEANS_PER_SHOT * shot;
        }

        preHeat () {
            console.log('커피머신 온도를 올리는 중 입니다.')
        }

        extract (shot: shot):Coffee {
            console.log(`커피를 내리는 중입니다(${shot}샷)`);
            return {
                shot,
                hasMilk: false,
            }
        }

        makeCoffee = (shot: shot): Coffee => {
            this.grindBeans(shot);
            this.preHeat();
            return this.extract(shot);
        }

        static makeMachine = () => {
            return new Coffeemachine();
        }

        showBean(): number {
            return this.bean;
        }

        fillBeans(bean: number): number {
            if (bean > 0 && bean % 1 === 0) {
                return this.bean += bean;
            }
            throw new Error("커피는 양의 정수여야합니다.");
        }
    }

    const maker1:Coffeemachine = Coffeemachine.makeMachine();
    maker1.fillBeans(2);
    maker1.makeCoffee(1);
    console.log(maker1);

    const maker2:CoffeeMaker = Coffeemachine.makeMachine();
    maker2.makeCoffee(1)
    console.log(maker2);
    // maker2.makeCoffee(1);
    // coffeeMachine.fillBeans(60);
    // console.log(coffeeMachine);
    // console.log(coffeeMachine.makeCoffee(2));
    // console.log(coffeeMachine.showBean());
    // console.log(coffeeMachine.showBean());
    // console.log(coffeeMachine.makeCoffee(2));
    // console.log(coffeeMachine.showBean());
    // const newMaker = Coffeemachine.makeMachine(50);
    // console.log(newMaker);
}