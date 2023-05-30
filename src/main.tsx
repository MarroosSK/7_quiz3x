import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HistoryContextProvider } from './context/historyContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <HistoryContextProvider>
      <App />
    </HistoryContextProvider>
  </BrowserRouter>,
)
