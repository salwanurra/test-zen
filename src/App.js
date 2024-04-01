import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="app">
      <div className="max-w-full">
        <div className='flex flex-col items-center h-screen max-w-full w-11/12 mx-auto'>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  )
}

export default App;

