import { Route, Routes } from 'react-router-dom';

import MainPage from './containers/MainPage/MainPage';
import SecondPage from './containers/SecondPage/SecondPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
