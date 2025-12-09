import { useReducer} from "react"

function reducer(formData, action) {
    switch (action.type) {
        case "update_form":
            return {
                ...formData,
                [action.field]: action.value
            }
        default:
            return formData

    }
}

export default function Form() {


    const [formData, dispatch] = useReducer(reducer, { name: "", email: "" })



    const handleChange = (e) => {
        dispatch({
            type: "update_form",
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted : ", formData);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" />
                <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" />
                <button type="submit"> submit</button>
            </form>

        </>
    )
}
