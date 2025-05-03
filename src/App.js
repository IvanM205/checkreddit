import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import { Home } from './Components/Home/Home';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
      </Route>
    </>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
