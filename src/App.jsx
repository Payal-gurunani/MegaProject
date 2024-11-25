import  React, { useEffect,useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/Auth'
import {login ,logOut} from "./Store/authSlice"
import { Footer, Header } from './components';
// import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const diapatch = useDispatch()

  useEffect(() =>{
    authService.getCurrntUser()
    .then((userData)=>{
      if (userData) {
        diapatch(login(userData))
      }
      else{
        diapatch(logOut())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer />
      </div>
    </div>
  ) : null
}

export default App
