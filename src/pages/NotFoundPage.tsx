import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page not found</p>
      <Link
        to={'/'}
        className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
      >
        Powrót do strony głównej
      </Link>
    </div>
  );
};

export default NotFoundPage;
