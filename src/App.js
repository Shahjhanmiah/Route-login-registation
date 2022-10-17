import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Orders from './component/Orders';
import PrivateRouter from './component/PrivateRouter';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<PrivateRouter><Home></Home></PrivateRouter>


        },
        {
          paath:'/orders',
          element:<PrivateRouter><Orders></Orders></PrivateRouter>

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
      
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
       
    </div>
  );
}

export default App;
