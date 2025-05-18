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
import CalendarPage from "./components/pages/CalendarPage";
import TaskList from "./components/pages/TaskList";
import FormPage from "./components/pages/FormPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from './components/pages/RegisterPage';
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
                path="calendar-page"
                element={
                  <PrivateRoute>
                    <CalendarPage />
                  </PrivateRoute>
                }
              />
              <Route path="register-page" element={<RegisterPage />} />
              <Route
                path="task-list-page"
                element={
                  <PrivateRoute>
                    <TaskList />
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
