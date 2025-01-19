
import './App.css'
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import MainCont from './MainCont.jsx'
import SubCont from './SubCont.jsx'
import Adv from './Adv.jsx'
function App() {


  return (

      <div className='app'>
        <Header />
        <Navigation />
        <MainCont >
          <SubCont />
          <SubCont />
          <SubCont />
    
          <Adv />
        </MainCont>


      </div>



  )
}

export default App
