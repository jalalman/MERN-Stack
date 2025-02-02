import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList.jsx"

import { Route, Routes } from "react-router-dom"
import ProductDetail from "./components/ProductDetail.jsx"
import ProductEdit from "./components/ProductEdit.jsx"
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <ProductForm />
            <ProductList />
            
          </>
        } />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} />
      </Routes>
    </>
  )
}

export default App
