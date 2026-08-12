import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import favicon from './imports/images/favicon.ico'

const existingIcon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null

if (existingIcon) {
  existingIcon.href = favicon
} else {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.href = favicon
  document.head.appendChild(link)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
