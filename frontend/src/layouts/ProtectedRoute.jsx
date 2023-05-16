import { Outlet, Navigate } from "react-router-dom"
import AdminNavbar from "../components/AdminNavbar"

const ProtectedRoute = () => {
  return (
    <>
        <AdminNavbar/>

        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default ProtectedRoute