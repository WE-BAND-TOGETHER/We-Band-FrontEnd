import { BrowserRouter, Route, Routes } from 'react-router';
import * as S from './App.styled';

import Layout from '@layout/Layout';
import ProtectedRoute from '@components/ProtectedRoute';

import OnBoarding from '@pages/Onboarding';
import Auth from '@pages/Auth';
import MyCalenderPage from '@pages/MyCalendar';
import Meet from '@pages/Meet';
import MyPage from '@pages/MyPage';
import MeetDetail from '@pages/MeetDetail';

function App() {
  return (
    <BrowserRouter>
      <S.AppContainer>
        <Routes>
          <Route path="onboarding" element={<OnBoarding />} />
          <Route path="auth-callback" element={<Auth />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<MyCalenderPage />} />
              <Route path="/meet" element={<Meet />} />
              <Route path="/meet/:meetId" element={<MeetDetail />} />
              <Route path="/mypage" element={<MyPage />} />
            </Route>
          </Route>
        </Routes>
      </S.AppContainer>
    </BrowserRouter>
  );
}

export default App;
