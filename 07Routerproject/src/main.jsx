import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { GitHubInfoLoader } from './components/Github/Github'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       } , 
//       {
//         path: "about",
//         element: <About />
//       } ,
//       {
//         path: "Contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="/" element={<Layout />}>

      {/* Home (default route) */}
      <Route index element={<Home />} />

      {/* About */}
      <Route path="about" element={<About />} />

      {/* Contact */}
      <Route path="contact" element={<Contact />} />

       {/* User */}
      <Route path="user/:userid" element={<User />} />

       {/* Github*/}
      <Route
      loader={GitHubInfoLoader}
       path="github"
        element={<Github />} 
        />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
