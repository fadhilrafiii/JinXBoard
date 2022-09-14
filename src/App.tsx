import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BasePage from 'Layouts/BasePage';

import Loading from 'Components/Loading';

const Home = lazy(() => import('Pages/Home'));
const About = lazy(() => import('Pages/About'));
const DevelopmentPlan = lazy(() => import('Pages/DevelopmentPlan'));
const FlowAssurance = lazy(() => import('Pages/FlowAssurance'));
const HSE = lazy(() => import('Pages/HSE'));
const PowerPlant = lazy(() => import('Pages/PowerPlant'));

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
            <Route path="/hse" element={<HSE />} />
            <Route path="/power-plant" element={<PowerPlant />} />
          </Routes>
        </Suspense>
      </BasePage>
    </BrowserRouter>
  );
};

export default App;
