import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface InputsInt {
  email: string;
  password: string;
}

export const Login = () => {
  const [inputs, setInputs] = useState<InputsInt>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!isValidEmail(inputs.email)) {
      alert('Invalid Email Format');
      return;
    }
  
    if (inputs.email !== '' && inputs.password !== '') {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-10">
      <h1 className="text-4xl">Welcome back</h1>
      <h2 className="text-2xl">Login in with credentials</h2>

      <form
        className="border rounded-2xl p-7 shadow-2xl space-y-8"
        onSubmit={handleSubmit} 
      >
        {/* Email Section */}
        <div className="flex flex-col space-y-3">
          <label>Email</label>
          <input
            type="email"
            placeholder="domain@example.com"
            required
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
            className="border rounded-2xl py-2 px-7 text-center outline-none ring-1  focus:ring-2 focus:border-transparent transition duration-300 focus:ring-blue-600"
          />
        </div>

        {/* Password Section */}
        <div className="flex flex-col space-y-3">
          <label>Password</label>
          <input
            type="password"
            placeholder="**********"
            required
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            className="border rounded-2xl py-2 px-7 text-center outline-none ring-1  focus:ring-2 focus:border-transparent transition duration-300 focus:ring-blue-600"
          />
        </div>

        <div className="flex justify-center">
          <button className="border rounded-2xl px-6 py-2" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};