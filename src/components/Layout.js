import { Outlet } from 'react-router-dom';
import MyAppBar from './AppBar/AppBar';
import { Suspense} from 'react';




export const Layout = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 960 }}>
        <Suspense fallback={null}>
          <MyAppBar />
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};