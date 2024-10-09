import { useRoutes } from "react-router-dom"
import { lazy } from "react"

const Home = lazy(() => import('./home/Home'))
const NotFound = lazy(() => import('./not-found/NotFound'))

const RoutesController = () => {
  return useRoutes([
    {
        path: '/',
        element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
}

export default RoutesController