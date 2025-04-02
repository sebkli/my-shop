import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
  return (
    <div className="h-screen  bg-blue-950 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
