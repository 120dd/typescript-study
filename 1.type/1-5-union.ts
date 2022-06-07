{
    type lanking = 1 | 2 | 3;
    const logLanking = (lanking: lanking) => {
        console.log(`랭킹: ${lanking}등 입니다`);
    }
    logLanking(2);


    type successLogin = {
        response: {
            body: 'logged in!'
        }
    };
    type failLogin = {
        resion: string
    };

    type loginResult = successLogin | failLogin;

    const login = (id:string, pw:string) : loginResult => {
        if (id===pw) {
            return {resion: '아무튼 안됨'}
        }
        return {response: {body:"logged in!"}}
    }
    const printLogin = (state:loginResult):void => {
        if ("response" in state) {
            console.log(state.response.body);
        } else {
            console.log("로그인 실패ㅠㅠ")
        }
    }
    printLogin(login('id','pw'));
}