import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            <Analytics />
        </BrowserRouter>
    </StrictMode>,
)
