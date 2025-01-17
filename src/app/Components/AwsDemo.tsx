import React from "react";

// Define a functional component with TypeScript
const AwsDemo: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to My Website
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This site is running on AWS. 🚀
        </p>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <p className="text-center text-lg font-semibold text-gray-800 animate-bounce">
              This app is built with ❤️ by{" "}
              <span className="text-blue-500">Tapas Mondal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwsDemo;
