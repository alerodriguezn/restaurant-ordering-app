import { Outlet, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useToast } from "@chakra-ui/react"

import useAuth from "../hooks/useAuth"

const UserRoute = () => {

  const toast = useToast()
  const { auth, isLoading } = useAuth()
  if (isLoading) return "Cargando"

  return (
    auth._id ? (
      <>
        <Navbar />

        <main>
          <Outlet />
        </main>
      </>


    ) : ( <Navigate to="/login" />
    )

  )
}

export default UserRoute