import { useState } from "react";

function MyForm(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("The name you entred was: ${name}");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text" value={name} placeholder="write here"
                onChange={(e) => setName(e.target.value)}/>
            </label>
            <input type="submit"/>
        </form>
        </>
    );
}

export default MyForm