import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      
      <Link to="/" className="flex items-center space-x-2">
        <img src="/assets/logo.png" alt="logo" className="h-10" />
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-2xl leading-6">Tibcat</p>
          <p className="text-xs">by MonlamAi</p>
        </div>
      </Link>
      <div className="flex space-x-4">
        <Link to="/dashboard" className="font-medium text-sm">DashBoard</Link>
        <div className="font-medium text-sm">Signin</div>
      </div>
    </div>
  );
}
