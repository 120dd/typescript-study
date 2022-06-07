{
    type Coffee = {
        shot: number,
        hasMilk:boolean,
    }

    type shot = 1 | 2 | 3;

    let bean:number = 150;

    const BEANS_PER_SHOT:number = 30;

    const makeCoffee = (shot: shot): Coffee => {
        if (bean > BEANS_PER_SHOT * shot) {
            bean = bean-BEANS_PER_SHOT * shot;
            return {shot,hasMilk:false}
        } else {
            throw new Error("커피가 부족합니다!");
        }
    }
    console.log(bean);
    console.log(makeCoffee(1));
    console.log(bean);
    console.log(makeCoffee(2));
    console.log(bean);
    // console.log(makeCoffee(2));
    // console.log(bean);
}