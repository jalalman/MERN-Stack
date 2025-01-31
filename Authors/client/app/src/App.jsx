import { Route,Routes,Link } from "react-router-dom"
import Index from "./Index"
import AuthorForm from "./components/AuthorForm"
import AuthorEdit from "./components/AuthorEdit"
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/authors" element={<Index />} />
      <Route path="/authors/new" element={<AuthorForm/>} />
      <Route path="/authors/:id/edit" element={<AuthorEdit/>} />
    </Routes>
      
    </>
  )
}

export default App
