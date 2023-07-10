import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import all pages here
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import UseCasesPage from "./pages/UseCasesPage"
import OurTeamPage from "./pages/OurTeamPage"
import MintPage  from "./pages/MintPage"
import UseCaseDetailPage from "./pages/UseCaseDetailPage"
import CollcetioPreviewPopup from "./popups/Collection-Popup"

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
    path:'/mint',
    element:<MintPage />
  },
  {
    path:'/use-casesdetail',
    element:<UseCaseDetailPage  />
  },
  {
    path:'/collection-popup',
    element:<CollcetioPreviewPopup   />
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
