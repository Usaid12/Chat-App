import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";
import SignUp from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/chat" element={<Chat/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
