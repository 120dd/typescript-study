{
    type HP = number;
    type ATP = number;
    type DFP = number;
    type hero = {
        name:string,
        hp:HP,
        atp:ATP,
        dfp: DFP
    }

    const chris: hero = {
        name:"chris",
        hp:100,
        atp:10,
        dfp:1,
    }
    console.log(chris);

    //String Literal type
    type json = "json";
    const JSON:json = "json";
    console.log(JSON);
}