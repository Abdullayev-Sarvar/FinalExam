import { useRoutes } from "react-router-dom"
import { lazy } from "react"
import { SuspenseComponent as Suspense } from "../utils"

const Home = lazy(() => import('./home/Home'))
const Products = lazy(() => import('./products/Products'))
const Details = lazy(() => import('./details/Details'))
const Liked = lazy(() => import('./liked/Liked'))
const Cart = lazy(() => import('./cart/Cart'))
const Category = lazy(() => import('./category/Category')) 
const NotFound = lazy(() => import('./not-found/NotFound'))

const RoutesController = () => {
  return useRoutes([
    {
        path: '/',
        element: <Suspense><Home /></Suspense>
    },
    {
      path: '/products',
      element: <Suspense><Products /></Suspense>
    },
    {
      path: '/details/:id',
      element: <Suspense><Details /></Suspense>
    },
    {
      path: '/liked',
      element: <Suspense><Liked /></Suspense>
    },
    {
      path: '/cart',
      element: <Suspense><Cart /></Suspense>
    },
    {
      path: '/category/:category',
      element: <Suspense><Category /></Suspense>
    },
    {
      path: '*',
      element: <Suspense><NotFound /></Suspense>
    }
  ])
}

export default RoutesController