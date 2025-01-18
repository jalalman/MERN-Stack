import './Com.css'

function Com(props) {

    const {firstname,lastname,age,hairColor}=props
    return(
        <>
            <div className="com">
                <h1>name : {firstname} {lastname}</h1>
                <h2>age : {age}</h2>
                <h3>hair color : {hairColor}</h3>
            </div>
        </>
    )
}

export default Com ;