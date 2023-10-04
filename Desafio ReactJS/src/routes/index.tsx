import { Route, RouteProps, Routes as RoutesProvider } from 'react-router-dom';

// Pages
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Feedback } from '../pages/Feedback';

/** All application routes */
export const paths = {
  home: '/',
  cart: '/cart',
  feedback: '/feedback',
} as const;

export function Routes() {
  const appRoutes: RouteProps[] = [
    { path: paths.home, element: <Home /> },
    { path: paths.cart, element: <Cart /> },
    { path: paths.feedback, element: <Feedback /> },
  ];

  return (
    <RoutesProvider>
      {appRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </RoutesProvider>
  );
}
