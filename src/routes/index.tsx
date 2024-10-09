import { useRoutes } from "react-router-dom"
import { lazy } from "react"
import { SuspenseComponent as Suspense } from "../utils"

const Home = lazy(() => import('./home/Home'))
const NotFound = lazy(() => import('./not-found/NotFound'))

const RoutesController = () => {
  return useRoutes([
    {
        path: '/',
        element: <Suspense><Home /></Suspense>
    },
    {
      path: '*',
      element: <Suspense><NotFound /></Suspense>
    }
  ])
}

export default RoutesController