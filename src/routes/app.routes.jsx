import { Routes, Route } from 'react-router-dom'

import { AdminPanel } from '../pages/AdminPanel'
import { New } from '../pages/New'
import { Home } from "../pages/Home"
import { Update } from '../pages/Update'
import { Support } from '../pages/Support'
import { Details } from '../pages/Details'
import { Cart } from '../pages/Cart'
import { Fruits } from '../pages/AllProducts/fruits'
import { Vegetables } from '../pages/AllProducts/vegetables'
import { Greenerys } from '../pages/AllProducts/greenerys'
import { Drink } from '../pages/AllProducts/drink'
import { NonFood } from '../pages/AllProducts/nonFood'
import { PaymentMethods } from '../pages/PaymentMethods'
import { ExchangeAndTrade } from '../pages/ExchangeAndTrade'
import { AboutStore } from '../pages/AboutStore'



export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/new" element={<New />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/support" element={<Support />} />
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fruits" element={<Fruits/>}/>
            <Route path="/vegetables" element={<Vegetables/>}/>
            <Route path="/greenerys" element={<Greenerys/>}/>
            <Route path="/drinks" element={<Drink/>}/>
            <Route path="/nonfoods" element={<NonFood/>}/>
            <Route path="/paymentinfo" element={<PaymentMethods/>}/>
            <Route path="/exchangeinfo" element={<ExchangeAndTrade/>}/>
            <Route path="/aboutstore" element={<AboutStore/>}/>




        </Routes>
    )
}