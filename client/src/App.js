import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login-page/Login";
import LandingPage from "./pages/landing-page/LandingPage.js";
import PageLayout from "./pages/PageLayout.js";
import ErrorPage from "./pages/error-page/ErrorPage";
import Signup from "./pages/signup-page/SignupPage.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <LandingPage />
      </PageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <PageLayout>
        <Login />
      </PageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <PageLayout>
        <Signup />
      </PageLayout>
    ),
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
