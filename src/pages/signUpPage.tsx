
const SignUpPage = () => {
  const handleSignUp = () => {
    // Implement sign-up logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-700">Join Game Store</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSignUp}
            className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-800 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{' '}
            <a href="/user/signin" className="text-purple-700 font-semibold">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
