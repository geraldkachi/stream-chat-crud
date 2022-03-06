const reducer = (state=0, { type, payload }: any) => {
    switch (type) {
        case "deposite":
            return state + payload;
        case "widthdraw":
            return state - payload
        default:
            return state;
    }
}

export default reducer