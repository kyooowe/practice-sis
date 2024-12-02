import { lazy} from "react";
import { createBrowserRouter } from "react-router";

// Page
const LoadingPage = lazy(() => import('@/App'))
const SignInPage = lazy(() => import('@/pages/auth/sign-in/page'))


let router = createBrowserRouter([
   {
      path: '/',
      Component: LoadingPage
   },
   {
      path: '/signin',
      Component: SignInPage
   }
])

export default router;