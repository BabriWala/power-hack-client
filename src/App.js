import './App.css';
import { RouterProvider } from 'react-router-dom';
import {routes} from './Routes/Routes';
import Main from './Layout/Main';

function App() {
  return (
      <div className='container' style={{margin: "0 auto"}}>
      <RouterProvider router={routes}></RouterProvider>
      </div>
  );
}

export default App;
