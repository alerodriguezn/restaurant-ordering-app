import { useState, useEffect , createContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axiosClient";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()


  useEffect(() => {
    
    const authenticateUsers = async () => {
        const token = localStorage.getItem("token")
        if(!token){
            setIsLoading(false)
            return
        }

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            }
        }

        try {
            const { data } = await axiosClient('/users/profile', config)
            console.log(data)
            setAuth(data)
        } catch (error) {
            setAuth({})
        } finally{
            setIsLoading(false)
        }
    }
    authenticateUsers()

  },[])

  const logout = () => {
    setAuth({})
  }

  return (
    <AuthContext.Provider
        value={{
            auth,
            setAuth,
            isLoading,
            logout

        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }

export default AuthContext