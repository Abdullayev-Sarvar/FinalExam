import { useRoutes } from "react-router-dom"
import { lazy } from "react"

const Home = lazy(() => import('./home/Home'))

const index = () => {
  return useRoutes([
    {
        path: '/',
        element: <Home />
    }
  ])
}

export default index