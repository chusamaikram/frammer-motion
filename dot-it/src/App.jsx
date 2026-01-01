import { BrowserRouter } from "react-router-dom"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import CustomRoutes from "./routes/Custom-routes"
import ScrollManager from "./hooks/ScrollManager"
import { Analytics } from '@vercel/analytics/react';



function App() {

  return (
    <BrowserRouter>
      <Analytics />
      <ScrollManager />
      <Header />
      <main>
        <CustomRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
