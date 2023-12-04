import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './Signup'
import Lay from './Layout'
import SignIn from './Signin'
import Home from './Home1'
import Contact from './Contact'
import Timer from './Timer'
import Begining from './Begining'
import Stress from './Stress'
import New from './New'
import Mind from './Mind'
const Navigate = () => {
  return (
    <BrowserRouter>
         <Routes>
            <Route index element={<Lay/>}/>
            <Route path="/Signup" element={<SignUp/>}/>
            <Route path="/Signin" element={<SignIn/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Timer" element={<Timer/>}/>
            <Route path="/Begining" element={<Begining />}/>
            <Route path="/Stress" element={<Stress />}/>
            <Route path="/Mind" element={<Mind />}/>
            <Route path="/New" element={<New />}/>
         </Routes>
    </BrowserRouter>
  )
}
export default Navigate