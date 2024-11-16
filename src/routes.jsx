// routes/MainRoutes.js
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayouts.jsx"; // Обновленный компонент с анимациями
import ErrorElement from './components/ui/ErrorElement.jsx';
import App from "./pages/App.jsx";
import Ref from "./pages/Ref.jsx";
import Task from "./pages/Task.jsx";
import Wallet from "./pages/Wallet.jsx";

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Используем MainLayout для всех страниц
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'task',
        element: <Task />,
      },
      {
        path: 'Ref',
        element: <Ref />,
      },
      {
        path: 'Wallet',
        element: <Wallet />,
      },
    ],
  },
]);

export default MainRoutes;
