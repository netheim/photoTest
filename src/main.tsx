import {lazy, StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";



const Catalog = lazy(() => import("./pages/catalog/Catalog.tsx"));
const Basket = lazy(() => import("./pages/basket/Basket.tsx"));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Suspense fallback={<div className='text-center text-xl'>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
