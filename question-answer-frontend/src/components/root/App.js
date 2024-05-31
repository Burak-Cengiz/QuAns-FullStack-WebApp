import QuestionList from "../question/QuestionList";
import { Route, Routes, Navigate } from "react-router-dom";
import AskQuestion from "../question/AskQuestion";
import NotFound from "../notFound/NotFound";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import SignIn from "../Auth/SignIn";
import "../../css/global/index.css";
import { useEffect, useState } from "react";
import NotAuthorized from "../notFound/NotAuthorized";
import SignUp from "../Auth/SingUp";
import { validateToken } from "../../helpers/validateToken";
import UserProfile from "../user/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Yeni loading state'i
  const authState = useSelector((state) => state.authReducer);

  useEffect(() => {
    const checkAuthentication = async () => {
      
      let token = localStorage.getItem("token")
      try {
        const response = await validateToken(token)
        if (response) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Doğrulama tamamlandığında loading state'ini false yap
      }
    };

    checkAuthentication();
  }, [authState]);

  if (loading) {
    return <div>Loading...</div>; // Loading sırasında göstereceğiniz bileşen
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout isAuthenticated={isAuthenticated}>
              <QuestionList />
            </MainLayout>
          }
        />
        <Route
          path="/askquestion"
          element={
            isAuthenticated ? (
              <MainLayout isAuthenticated={isAuthenticated}>
                <AskQuestion />
              </MainLayout>
            ) : (
              <Navigate to="/notauthorized" />
            )
          }
        />
        <Route
          path="/notauthorized"
          element={
            <AuthLayout isAuthenticated={isAuthenticated}>
              <NotAuthorized />
            </AuthLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthLayout isAuthenticated={isAuthenticated}>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout isAuthenticated={isAuthenticated}>
              <SignUp />
            </AuthLayout>
          }
        />
        <Route
          path="/users/:id"
          element={
            isAuthenticated ? (
              <MainLayout isAuthenticated={isAuthenticated}>
                <UserProfile />
              </MainLayout>
            ) : (
              <Navigate to="/notauthorized" />
            )
          }
        />
        <Route
          path="*"
          element={
            <MainLayout isAuthenticated={isAuthenticated}>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
