{
    type successState = {
        result:'success',
        response: {
            body: 'logged in!'
        }
    };
    type failState = {
        result:'fail',
        reason: string
    };

    type loginResult = successState | failState;

    const login = (id:string, pw:string) : loginResult => {
        if (id===pw) {
            return {
                result:"fail",
                reason:'아무튼 안됨'
            }
        }
        return {
            result:"success",
            response: {body:"logged in!"}
        }
    }
    const printLogin = (state:loginResult):void => {
        if ("response" in state) {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
    printLogin(login('id','id'));
}