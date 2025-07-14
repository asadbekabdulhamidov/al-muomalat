//react router dom
import { Outlet } from 'react-router-dom';
//components
function MainLayout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
