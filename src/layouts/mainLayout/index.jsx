//react router dom
import { Outlet } from 'react-router-dom';
//components
import { Navbar, Footer } from '../../components';
function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
