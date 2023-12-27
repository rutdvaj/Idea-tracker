import "./App.css";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { UserProvider, useUser } from "./Components/user";
import { IdeasProvider } from "./Components/ideas";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const isLogInPage = window.location.pathname === "/login";

  return (
    <>
      <div>
        <UserProvider>
          <IdeasProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </IdeasProvider>
        </UserProvider>
      </div>
    </>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <>
      <nav>
        <a href="/">Idea tracker</a>
        <div>
          {user.current ? (
            <>
              <span>{user.current.email}</span>
              <button type="button" onClick={() => user.logout()}>
                Logout
              </button>
            </>
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
      </nav>
    </>
  );
}

export default App;
