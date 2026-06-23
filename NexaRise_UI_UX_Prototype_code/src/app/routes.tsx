import { createBrowserRouter } from "react-router";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ChooseRoleScreen from "./screens/ChooseRoleScreen";
import JobSeekerDashboard from "./screens/JobSeekerDashboard";
import JobSearchScreen from "./screens/JobSearchScreen";
import JobDetailsScreen from "./screens/JobDetailsScreen";
import JobApplicationScreen from "./screens/JobApplicationScreen";
import ApplicationSuccessScreen from "./screens/ApplicationSuccessScreen";
import MentorDirectoryScreen from "./screens/MentorDirectoryScreen";
import MessagingScreen from "./screens/MessagingScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import EmployerDashboard from "./screens/EmployerDashboard";
import PostJobScreen from "./screens/PostJobScreen";
import ApplicationsScreen from "./screens/ApplicationsScreen";
import MentorDashboard from "./screens/MentorDashboard";
import UserProfileScreen from "./screens/UserProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/register",
    Component: RegistrationScreen,
  },
  {
    path: "/choose-role",
    Component: ChooseRoleScreen,
  },
  {
    path: "/job-seeker/dashboard",
    Component: JobSeekerDashboard,
  },
  {
    path: "/job-seeker/search",
    Component: JobSearchScreen,
  },
  {
    path: "/job-seeker/job/:jobId",
    Component: JobDetailsScreen,
  },
  {
    path: "/job-seeker/apply/:jobId",
    Component: JobApplicationScreen,
  },
  {
    path: "/job-seeker/application-success",
    Component: ApplicationSuccessScreen,
  },
  {
    path: "/job-seeker/mentors",
    Component: MentorDirectoryScreen,
  },
  {
    path: "/messaging",
    Component: MessagingScreen,
  },
  {
    path: "/notifications",
    Component: NotificationsScreen,
  },
  {
    path: "/employer/dashboard",
    Component: EmployerDashboard,
  },
  {
    path: "/employer/post-job",
    Component: PostJobScreen,
  },
  {
    path: "/employer/applications",
    Component: ApplicationsScreen,
  },
  {
    path: "/mentor/dashboard",
    Component: MentorDashboard,
  },
  {
    path: "/profile",
    Component: UserProfileScreen,
  },
  {
    path: "/settings",
    Component: SettingsScreen,
  },
]);
