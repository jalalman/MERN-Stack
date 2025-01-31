import {Routes, Route ,Link} from 'react-router-dom';
import About from './component/About.jsx';
import Home from './component/Home.jsx';
import UserForm from './component/UserForm.jsx';
import ShowUser from './component/ShowUser.jsx';
function App() {
  

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/UserForm" element={<UserForm />} />
          <Route path="/users/:id" element={<ShowUser />} /> 

        </Routes>

      </div>
  );
}

export default App;
