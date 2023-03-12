import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./assets/pages/Home/Home"
import Product from "./assets/pages/Product/Product"
import Pay from "./assets/pages/Pay/Pay"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {PRODUCTS_MOCK} from "./mock/products.mock"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/product/:productId",
    element: <Product/>,
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
