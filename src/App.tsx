import React, { lazy, Suspense } from 'react';

import BasePage from 'Layouts/BasePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('Pages/Home'));
const About = lazy(() => import('Pages/About'));

const App = () => {
  return (
    <BrowserRouter>
      <BasePage>
        <Suspense>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Suspense>
      </BasePage>
    </BrowserRouter>
  );
};

export default App;
