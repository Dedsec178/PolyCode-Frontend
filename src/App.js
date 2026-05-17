import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./features/navigation/components/Navbar";
import Sidebar from "./features/navigation/components/Sidebar";
import { PlaygroundProvider } from "./features/playground/context/PlaygroundContext";
import { AuthProvider } from "./features/auth/context/AuthContext";
import "./App.css";
import "./styles/theme-light.css";
import "./styles/stack-picker-dark.css";

const LanguageSelectPage = lazy(
  () => import("./features/language/pages/LanguageSelectPage"),
);
const HomePage = lazy(() => import("./features/docs/pages/Home/HomePage"));
const DocumentPage = lazy(() => import("./features/docs/pages/DocumentPage"));
const CategoryPage = lazy(() => import("./features/docs/pages/CategoryPage"));
const SearchPage = lazy(() => import("./features/docs/pages/SearchPage"));
const PlaygroundPage = lazy(
  () => import("./features/playground/pages/PlaygroundPage"),
);
const LoginPage = lazy(() => import("./features/auth/pages/LoginPage"));
const SignupPage = lazy(() => import("./features/auth/pages/SignupPage"));
const DailyChallenge = lazy(() => import("./pages/DailyChallenges"));

const PageFallback = () => (
  <div className="loading">
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  </div>
);

function MainApp({
  selectedLanguage,
  onLanguageSelect,
  onGoToStackPicker,
  theme,
  onToggleTheme,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => setIsSidebarOpen((o) => !o);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        theme={theme}
        onToggleTheme={onToggleTheme}
        onGoToStackPicker={onGoToStackPicker}
      />
      <div className="layout">
        {isSidebarOpen && (
          <div className="backdrop" onClick={closeSidebar} />
        )}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          selectedLanguage={selectedLanguage}
          onLanguageSelect={onLanguageSelect}
          onGoToStackPicker={onGoToStackPicker}
        />
        <main className="main-content">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Navigate to="/hub" replace />} />
              <Route
                path="/hub"
                element={<HomePage selectedLanguage={selectedLanguage} />}
              />
              <Route
                path="/doc/*"
                element={
                  <DocumentPage
                    selectedLanguage={selectedLanguage}
                    theme={theme}
                  />
                }
              />
              <Route
                path="/category/*"
                element={
                  <CategoryPage selectedLanguage={selectedLanguage} />
                }
              />
              <Route
                path="/search"
                element={<SearchPage selectedLanguage={selectedLanguage} />}
              />
              <Route
                path="/playground"
                element={
                  <PlaygroundPage
                    theme={theme}
                    onToggleSidebar={toggleSidebar}
                    sidebarOpen={isSidebarOpen}
                  />
                }
              />
              <Route
                path="/daily-challenge"
                element={<DailyChallenge theme={theme} />}
              />
              <Route path="*" element={<Navigate to="/hub" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}

function ThemedShell({ theme, children }) {
  return (
    <div className={`app ${theme === "light" ? "theme-light" : ""}`}>{children}</div>
  );
}

/** Language picker is always dark — overrides global light theme on html/body */
function StackPickerShell({ children, savedTheme }) {
  React.useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.setAttribute("data-theme", "dark");
    body.classList.remove("light-theme");
    html.style.backgroundColor = "#03050a";
    body.style.backgroundColor = "#03050a";

    return () => {
      html.style.backgroundColor = "";
      body.style.backgroundColor = "";
      html.setAttribute("data-theme", savedTheme);
      body.classList.toggle("light-theme", savedTheme === "light");
    };
  }, [savedTheme]);

  return <div className="app stack-picker-dark">{children}</div>;
}

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem("theme") || "dark",
  );

  React.useEffect(() => {
    localStorage.removeItem("selectedLanguage");
    sessionStorage.removeItem("selectedLanguage");
  }, []);

  const handleLanguageSelect = React.useCallback(
    (language) => {
      setSelectedLanguage(language);
      navigate("/hub", { replace: true });
    },
    [navigate],
  );

  const goToStackPicker = React.useCallback(() => {
    navigate("/select-language");
  }, [navigate]);

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (location.pathname === "/select-language") {
      return;
    }
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme, location.pathname]);

  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route
          path="/login"
          element={
            <ThemedShell theme={theme}>
              <LoginPage />
            </ThemedShell>
          }
        />
        <Route
          path="/signup"
          element={
            <ThemedShell theme={theme}>
              <SignupPage />
            </ThemedShell>
          }
        />
        <Route
          path="/select-language"
          element={
            <StackPickerShell savedTheme={theme}>
              <LanguageSelectPage
                onLanguageSelect={handleLanguageSelect}
                continueLanguage={selectedLanguage}
              />
            </StackPickerShell>
          }
        />
        <Route
          path="/*"
          element={
            <ThemedShell theme={theme}>
              {selectedLanguage ? (
                <MainApp
                  selectedLanguage={selectedLanguage}
                  onLanguageSelect={handleLanguageSelect}
                  onGoToStackPicker={goToStackPicker}
                  theme={theme}
                  onToggleTheme={toggleTheme}
                />
              ) : (
                <Navigate to="/select-language" replace />
              )}
            </ThemedShell>
          }
        />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <PlaygroundProvider>
        <Router>
          <AppRoutes />
        </Router>
      </PlaygroundProvider>
    </AuthProvider>
  );
}

export default App;
