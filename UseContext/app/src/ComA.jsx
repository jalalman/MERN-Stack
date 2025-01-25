import ComB from "./ComB";
import { useContext } from "react";
import { MyContext } from "./App";
function ComA() {
    const data = useContext(MyContext)
    return (
        <div style={{backgroundColor: 'green', padding: '10px' ,border: '1px solid black', margin: '10px'}}>
            <h1>ComA</h1>
            <h2>{data.names}</h2>
            <ComB />
        </div>
    )
}

export default ComA;