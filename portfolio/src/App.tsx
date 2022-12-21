import React from 'react';
import './App.css';
import Home from './pages/home/App';
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
    children: [
      // {
      //   path: "team",
      //   element: <Team />,
      // }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RouterProvider router={router} fallbackElement={<div></div>} />
    </div>
  );
}

export default App;
