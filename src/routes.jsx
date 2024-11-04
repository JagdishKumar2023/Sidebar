import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import User from "./pages/User";
import Message from "./pages/Message";
import Analytics from "./pages/Analytics";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
import Order from "./pages/Order";
import FileManager from "./pages/FileManager";

export default function RouteWrapper() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/message" element={<Message />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}
