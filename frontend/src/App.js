import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Landing from "./pages/Landing.jsx"
import {useState} from "react"
function App() {
  const [users, setUsers] = useState([]); // Start with an empty users array

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login users={users} />} />
                  <Route path="/SignUp" element={<Signup users={users} setUsers={setUsers} />} />
                  <Route path="/Landing" element={<Landing />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;