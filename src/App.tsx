import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@layout/Layout';
import Home from '@pages/Home';
import * as S from './App.styled';
import Calendar from '@components/Calendar';

function App() {
  return (
    <BrowserRouter>
      <S.AppContainer>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Calendar />} />
          </Route>
        </Routes>
      </S.AppContainer>
    </BrowserRouter>
  );
}

export default App;
