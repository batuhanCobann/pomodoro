export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "Increment":
            return {
                ...state,
                counter: state.counter + payload
            };
        case "decrement":
            return {
                ...state,
                counter: state.counter - payload
            };
            case "loginUser":
                return{
                    ...state,
                    isLoggedIn: true
                }
            case"logautUser":
                return{
                    ...state,
                    isLoggedIn: false
                }
            case"changeColorMode":
                return{
                    ...state,
                    colorMode: payload
                }
            case"changeTime":
            const {key, value} = payload
                return{
                    ...state.time,
                    time: {
                        [key]: value
                    }
                }
        default:
            return state;
    }
}