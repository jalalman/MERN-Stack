import react, { useState } from 'react'

function ColorForm(props) {
    const [color, setColor] = useState('')
    const [colors, setColors] = useState([])
    const {onRecolor} = props
    const handleSubmit = (e) => {
        e.preventDefault()
        setColors([...colors, color])
        props.onRecolor(color)
        console.log(colors)
        setColor('')
    }
    const updateColor = (e) => {
        setColor(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={color}
            onChange={ updateColor}
        />
        <button type="submit">Add</button>

        </form>
    )
}
export default ColorForm