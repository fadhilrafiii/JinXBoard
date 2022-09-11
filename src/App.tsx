import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FlowAssurance from 'Pages/FlowAssurance';

import BasePage from 'Layouts/BasePage';

import Loading from 'Components/Loading';

const Home = lazy(() => import('Pages/Home'));
const About = lazy(() => import('Pages/About'));
const DevelopmentPlan = lazy(() => import('Pages/DevelopmentPlan'));

const App = () => {
  return (
    <BrowserRouter>
      <BasePage>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/development-plan" element={<DevelopmentPlan />} />
            <Route path="/flow-assurance" element={<FlowAssurance />} />
          </Routes>
        </Suspense>
      </BasePage>
    </BrowserRouter>
  );
};

export default App;
