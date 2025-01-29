import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList.jsx"
import Header from "./components/ProductDetail.jsx"
import { Route, Routes } from "react-router-dom"
import ProductDetail from "./components/ProductDetail.jsx"
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

      </Routes>
    </>
  )
}

export default App
