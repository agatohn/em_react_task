import { Route, Routes } from 'react-router-dom';

import MainPage from './containers/MainPage/components/MainPage';
import SecondPage from './containers/SecondPage/components/SecondPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
