import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Register } from "./pages/Register";
import { ClientLayout } from "./layouts/ClientLayout";
import { ClientHome } from "./pages/ClientHome";
import { ClientServices } from "./pages/ClientServices";
import { ClientProfessionals } from "./pages/ClientProfessionals";
import { ClientDateTime } from "./pages/ClientDateTime";
import { ClientCheckout } from "./pages/ClientCheckout";
import { ClientProfile } from "./pages/ClientProfile";
import { ClientNotifications } from "./pages/ClientNotifications";
import { ClientAppointmentDetails } from "./pages/ClientAppointmentDetails";
import { ClientSettingsPlaceholder } from "./pages/ClientSettingsPlaceholder";
import { ProDashboard } from "./pages/ProDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminAddPro } from "./pages/AdminAddPro";
import { AdminAddService } from "./pages/AdminAddService";
import { AdminTeam } from "./pages/AdminTeam";
import { AdminServicesList } from "./pages/AdminServicesList";
import { AdminSchedule } from "./pages/AdminSchedule";
import { AdminReports } from "./pages/AdminReports";

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/forgot-password", Component: ForgotPassword },
  { path: "/register", Component: Register },
  {
    path: "/client",
    Component: ClientLayout,
    children: [
      { index: true, Component: ClientHome },
      { path: "services", Component: ClientServices },
      { path: "professionals", Component: ClientProfessionals },
      { path: "datetime", Component: ClientDateTime },
      { path: "checkout", Component: ClientCheckout },
      { path: "profile", Component: ClientProfile },
    ],
  },
  { path: "/client/notifications", Component: ClientNotifications },
  { path: "/client/appointment-details", Component: ClientAppointmentDetails },
  { path: "/client/settings", Component: ClientSettingsPlaceholder },
  
  { path: "/pro", Component: ProDashboard },
  
  { path: "/admin", Component: AdminDashboard },
  { path: "/admin/add-pro", Component: AdminAddPro },
  { path: "/admin/add-service", Component: AdminAddService },
  { path: "/admin/team", Component: AdminTeam },
  { path: "/admin/schedule", Component: AdminSchedule },
  { path: "/admin/reports", Component: AdminReports },
  { path: "/admin/services-list", Component: AdminServicesList },
]);
