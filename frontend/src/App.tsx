import {RouterProvider} from "react-router";
import {router} from "./AppRoutes.tsx";

function App() {

    return (
      <RouterProvider router={router} />
    )
}

export default App
