const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-lg font-medium text-purple-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
