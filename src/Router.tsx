import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage } from './pages';

export const Router = () => {
  return (
    <Routes>
      <Route path='' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='contact' element={<ContactPage />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
