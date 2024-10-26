import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import Notelist from "./features/notes/Notelist";
import Userslist from "./features/users/Userlist";
import SignUpForm from "./features/auth/SignUp";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="dash" element={<DashLayout />} />
          <Route index element={<Welcome />} />
          <Route path="notes">
            <Route index element={<Notelist />} />
          </Route>
          <Route path="users">
            <Route index element={<Userslist />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
