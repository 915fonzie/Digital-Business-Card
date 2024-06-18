import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

document.addEventListener('click', function (e) {
    if (e.target.className === 'linkedin-btn') {
        window.open("https://www.linkedin.com/in/fonziepruneda/", "_blank")
    }
    if (e.target.className === 'email-btn') {
        window.open("mailto:alfonso.pru@outlook.com")
    }
})
