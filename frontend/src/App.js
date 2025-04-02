import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import { ThemeProviderCustom } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Pages imports
import BotonConIconoPage from "./components/pages/BotonConIconoPage";
import TextBoxPage from "./components/pages/TextBoxPage";
import ModalConfirmationPage from "./components/pages/ModalConfirmationPage";
import TaskList from "./components/pages/TaskList";
import DashboardPage from "./components/pages/DashboardPage";
import UserCardPage from "./components/pages/UserCardPage";
import FormPage from "./components/pages/FormPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <ThemeProviderCustom>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<LoginPage />} />
              <Route
                path="boton-con-icono-page"
                element={
                  <PrivateRoute>
                    <BotonConIconoPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="text-box-page"
                element={
                  <PrivateRoute>
                    <TextBoxPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="modal-confirmation-page"
                element={
                  <PrivateRoute>
                    <ModalConfirmationPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="task-list-page"
                element={
                  <PrivateRoute>
                    <TaskList />
                  </PrivateRoute>
                }
              />
              <Route
                path="dashboard-page"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="user-card-page"
                element={
                  <PrivateRoute>
                    <UserCardPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="form-page"
                element={
                  <PrivateRoute>
                    <FormPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="profile-page"
                element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProviderCustom>
  );
}

export default App;
