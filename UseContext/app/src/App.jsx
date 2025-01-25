import ComA from "./ComA"
import { createContext ,useContext,useState} from "react"

export const MyContext = createContext({
  names: 'default',
  setNames: () => {}}
)
function App() {
  const [names, setNames] = useState('Jalal')

  return (
    <>
       <div style={{backgroundColor: 'lightblue', padding: '10px' ,border: '1px solid black', margin: '10px'}}>
            <h1>APP</h1>
            <MyContext.Provider value={{names, setNames}}>
              <ComA />
            </MyContext.Provider>

        </div>

    </>
  )
}

export default App
