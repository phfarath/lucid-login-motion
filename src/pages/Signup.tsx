
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Create account</h1>
          <p className="text-gray-600">Join us today</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
