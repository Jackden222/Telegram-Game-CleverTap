// components/ui/BottomNavigation.jsx
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation(); // Получаем текущий путь

  return (
    <div className="fixed bottom-0 z-50 w-full px-10 py-4 flex justify-between items-center">
      <Link
        to="/"
        className={`bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl transition-all duration-300 ${
          location.pathname === '/' ? 'bg-blue-500/60' : ''
        }`}
      >
        <img className="justify-between items-center pt-2 m-auto" src="/clever.png" alt="/" width={30} height={30} />
        <p className="font-sans text-sm">Tap</p>
      </Link>

      <Link
        to="/Ref"
        className={`bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl transition-all duration-300 ${
          location.pathname === '/Ref' ? 'bg-blue-500/60' : ''
        }`}
      >
        <img className="justify-between items-center pt-2 m-auto" src="/users.png" alt="/" width={30} height={30} />
        <p className="font-sans text-sm">Ref</p>
      </Link>

      <Link
        to="/Task"
        className={`bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl transition-all duration-300 ${
          location.pathname === '/Task' ? 'bg-blue-500/60' : ''
        }`}
      >
        <img className="justify-between items-center pt-2 m-auto" src="/package-check.png" alt="/" width={30} height={30} />
        <p className="font-sans text-sm">Task</p>
      </Link>

      <Link
        to="/Wallet"
        className={`bg-[#1f2942] w-[70px] h-[70px] p-1 text-center ml-2 justify-between items-center rounded-xl transition-all duration-300 ${
          location.pathname === '/Wallet' ? 'bg-blue-500/60' : ''
        }`}
      >
        <img className="justify-between items-center pt-2 m-auto" src="/wallet.png" alt="/" width={30} height={30} />
        <p className="font-sans text-sm">Wallet</p>
      </Link>
    </div>
  );
};

export default BottomNavigation;
