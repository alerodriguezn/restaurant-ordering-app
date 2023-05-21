import { Outlet, Navigate } from "react-router-dom"
import AdminNavbar from "../components/AdminNavbar"
import useAuth from "../hooks/useAuth"

const ProtectedRoute = () => {

  const { auth, isLoading } = useAuth()
  if (isLoading) return "Cargando"

  console.log(auth)

  return (
    auth.isAdmin ? (
      <>
        <AdminNavbar />

        <main>
          <Outlet />
        </main>
      </>


    ) : (<Navigate to="/" />)

  )
}

export default ProtectedRoute