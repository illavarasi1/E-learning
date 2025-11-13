import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './components/appcontext/AppContext.tsx'
import { Provider } from 'react-redux'
import store from './components/core/store.ts'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <AppProvider>

        <App />
      </AppProvider>
    </BrowserRouter>

</Provider>

  </StrictMode>,
)
