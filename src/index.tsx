import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Routes } from "./routes"

export const App: React.FC = () => {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    )
}