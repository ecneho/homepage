import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter as Router } from "react-router-dom";
import {SpinningDisk} from "./components";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
          <SpinningDisk />
          <App />
      </Router>
  </StrictMode>,
)
