import { createRoot } from "react-dom/client"; 
import './css/reset.css';
import './css/global.scss';

import App from './components/App';

const container = document.getElementById("app"); 
const root = createRoot(container)
root.render(<App />); 