import React from 'react';
import {BrowserRouter ,Link , Route , Routes } from 'react-router-dom';
import logo from "./assets/pixislogo.png";
import {Home , CreatePost} from './pages';

const App = () => {
  return (
   <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#f9fafe] sm:px-8 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
      <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
        Create
      </Link>

    </header>

    {/* <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]"> */}
    <main className="sm:p-8 px-4 py-8 w-full bg-[url('https://images.unsplash.com/photo-1614850523060-8da1d56ae167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBjb2xvdXJ8ZW58MHx8MHx8&w=1000&q=80')] bg-no-repeat bg-cover min-h-[calc(100vh-73px)]">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>

      </main>




   </BrowserRouter>
  )
}

export default App