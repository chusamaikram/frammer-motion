import { useReducer } from "react";

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            default:
                throw new Error();
        }
    }
    return (
        <>
            <h2> count :{state.count}</h2>
            <button style={{ marginLeft: "10px" }} onClick={() => dispatch({ type: "increment" })}>+</button>
            <button style={{ marginLeft: "10px" }} onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button style={{ marginLeft: "10px" }} onClick={() => dispatch({ type: "reset" })}>reset</button>
        </>
    )

}