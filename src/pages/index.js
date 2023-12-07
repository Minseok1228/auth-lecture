import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import LogInPage from './LogInPage'
import Header from '../components/Header'
import DefaultLayout from '../layouts/DefaultLayout'
import SignUpPage from './SignUpPage'
import PrivateRoutesLayout from '../layouts/PrivateRoutesLayout'
import PublicRoutesLayout from '../layouts/PublicRoutesLayout'

function Pages() {
    return (
        <BrowserRouter>{/**이걸로 감싸야 브라우저 라우팅됨 */}
            <Routes>
                <Route element={<DefaultLayout />}>
                    {/**프라이빗 */}
                    <Route element={<PrivateRoutesLayout />}>
                        <Route path='/' element={<HomePage />} />
                    </Route>
                    {/**퍼블릭 */}
                    <Route element={<PublicRoutesLayout />}>
                        <Route path='/log-in' element={<LogInPage />} />
                        <Route path='/sign-up' element={<SignUpPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Pages