import { Routes,Route,Link } from "react-router-dom"
import Index from "./Index"
import PlayerForm from "./component/PlayerForm"
import PlayerEdit from "./component/PlayerEdit"
import PlayerView from "./component/PlayerView"
function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/addplayers" element={<PlayerForm />} />
        <Route path="/players/:id/edit" element={<PlayerEdit />} />
        <Route path="/players/:id" element={<PlayerView />} />

        
        

    </Routes>

        
    </>
  )
}

export default App
