import { Route, Routes } from "react-router-dom"
import { HeroesRoutes  } from "../Heroes"
import { LogingPages } from "../auth"
import { Navbar } from "../ui"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <>
        <Routes>


            <Route path="login" element={
            <PublicRoute>
              <LogingPages />
            </PublicRoute>
          } />
            {/* <Route path="login" element={<LogingPages />} /> */}

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }/>

            {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
    </>
  )
}
