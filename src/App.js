import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Offers from './components/Offers'
import Search from './components/Search'
import Support from './components/Support'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import RestaurantDetails from './components/RestaurantDetails'
import FoodCategoryPage from './components/FoodCategoryPage'

import { Provider } from 'react-redux'
import appStore from './store/appStore'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'


const Grocery = lazy(() => import('./components/Grocery'));


const AppLayout = () => {
	return (
        <Provider store={appStore}>
            <>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
                <Footer />
            </>
        </Provider>
	)
}


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <RestaurantDetails />
      },
      {
        path: '/checkout',
        element: <Cart />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);