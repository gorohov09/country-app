import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { Header } from './features/theme/Header';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={
            <HomePage />
          } />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
