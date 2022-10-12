import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PublicLayout from './PublicLayout/PublicLayout';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import RequireAuth from './RequireAuth/RequireAuth';
import ContactList from './ContactList/ContactList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<PublicLayout />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="contacts" element={<ContactList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
