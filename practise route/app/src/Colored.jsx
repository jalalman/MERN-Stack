import { useParams } from "react-router-dom";

function Colored(){
    const {textColor, bgColor ,name} = useParams();
    console.log(textColor, bgColor, name);
    const styles = {
        color: textColor,
        backgroundColor: bgColor

    }

    return (
        <div>
            <h1 style={styles}> The word is: {name}</h1>
        </div>
    )
}
export default Colored;