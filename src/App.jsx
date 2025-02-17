import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout></MainLayout> }>
      <Route index element={ <HomePage></HomePage> } />
      <Route path='jobs' element={ <JobsPage> </JobsPage>} />
      <Route path='*' element={ <NotFoundPage></NotFoundPage>} />
    </Route>
    )
);


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App