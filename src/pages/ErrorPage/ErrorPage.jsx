import React from "react";
import { Link } from "react-router";

const ErrorPage = ({ status = 404, message = "Page Not Found" }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-9xl font-bold text-red-500 animate-pulse">
                {status}
            </div>

            <h1 className="mt-4 text-3xl font-semibold text-gray-800">{message}</h1>
            <p className="mt-2 text-gray-600 text-center max-w-md">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                to={'/'}
                className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;