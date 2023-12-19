import { Routes, Route } from 'react-router-dom';
import AllmeetupPage from './pages/Allmeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';
import Layout from './components/layout/ui/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllmeetupPage />} />
        <Route path='/Favorites' element={<FavoritesPage />} />
        <Route path='/new-meet' element={<NewMeetUpPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

