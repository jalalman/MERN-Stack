
import { useContext } from "react";

import { MyContext } from "./App";

function ComD() {
    const data=useContext(MyContext);
    return (
        <div style={{backgroundColor: 'yellow', padding: '10px' ,border: '1px solid black', margin: '10px'}}>
            <h1>ComD</h1>
            <h2>{data.names}</h2>

        </div>
    )
}

export default ComD;