import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CollectionPage from "./pages/CollectionPage"
import UseCasesPage from "./pages/UseCasesPage"


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />

  },
  {
    path:'/collections',
    element:<CollectionPage />

  },
  {
    path:'/use-cases',
    element:<UseCasesPage />

  }
])
function App() {

  return (
    <main>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </main>
  )
}

export default App
