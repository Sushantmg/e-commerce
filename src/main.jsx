import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Layout from './components/Layout.jsx'

import CartPage from './pages/CartPage.jsx'
import App from './App.jsx'
// import Login from './pages/Login.jsx'
// import AdminLayout from './pages/AdminLayout.jsx'
// import Users from './pages/Users.jsx'
// import UserDetails from './pages/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },         // Home as default route
      { path: 'cart', element: <CartPage /> },
      { path: "/login", element: <Login /> },
    ],
  },
  // { path: '/login', element: <Login /> },
  // {
  //   path: '/admin',
  //   element: <AdminLayout />,
  //   children: [
  //     { path: 'users', element: <Users /> },
  //     { path: 'users/:id', element: <UserDetails /> },
  //   ],
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
