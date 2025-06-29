'use client';

import { useAuth } from "react-oidc-context";

export default function Account() {
  const auth = useAuth();
  
  const logout = () => {
    auth.signoutRedirect();
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      {auth.isAuthenticated ? (
        <div>
          <p className="mb-2">Welcome, {auth.user?.profile.name}!</p>
          <p className="mb-2">Email: {auth.user?.profile.email}</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>Please log in to view your account details.</p>
          <button
            onClick={() => auth.signinRedirect()}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}