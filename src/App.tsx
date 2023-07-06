import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import UseCasesPage from "./pages/UseCasesPage"
import OurTeamPage from "./pages/OurTeamPage"
import UseCaseDetailPage from "./pages/UseCaseDetailPage"

// define router with each element having it's own path path 

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

  },
  {
    path:'/team',
    element:<OurTeamPage />

  },
  {
    path:'/use-casesdetail',
    element:<UseCaseDetailPage  />

  }
])
function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
