import React from 'react'
import { Routes, Route ,Navigate} from 'react-router-dom'
import {useEffect} from "react";

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';

import {Loader } from "lucide-react";

const App = () => {
  const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore();

  const {theme}=useThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

    console.log({authUser})

    if(isCheckingAuth && !authUser) return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
    );
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes> 
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login"/>} />
        <Route path="/profile" element={authUser ? <ProfilePage />: <Navigate to="/login"/>} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to ="/"/>} />
        <Route path="/login" element = {!authUser ? <LoginPage />: <Navigate to = "/"/>} />

      </Routes>
    </div>
  )
}

export default App
