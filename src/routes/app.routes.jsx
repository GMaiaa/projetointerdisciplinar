import { Routes, Route } from 'react-router-dom'

import { AdminPanel } from '../pages/AdminPanel'
import { New } from '../pages/New'
import { Home } from "../pages/Home"
import { Update } from '../pages/Update'
import { Support } from '../pages/Support'
import { Details } from '../pages/Details'
import { User } from '../components/User'
import { Cart } from '../pages/Cart'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/new" element={<New />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/support" element={<Support />} />
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/users" element={<User />} />
            <Route path="/cart" element={<Cart />} />


        </Routes>
    )
}