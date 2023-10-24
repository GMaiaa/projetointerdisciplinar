import {Routes, Route} from 'react-router-dom'

import { AdminPanel } from '../pages/AdminPanel'
import { New } from '../pages/New'
import {Home } from "../pages/Home"
import { Update } from '../pages/Update'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adminpanel" element={<AdminPanel/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/update" element={<Update/>}/>

        </Routes>
    )
}