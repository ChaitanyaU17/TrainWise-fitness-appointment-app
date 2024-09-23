import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBM6iwWRs8F6wTNcCXCsX8P97vDVsxiTMY`;
  const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBM6iwWRs8F6wTNcCXCsX8P97vDVsxiTMY`;
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    const payload = {
      email,
      password,
      returnSecureToken: true,
      ...(state === "Sign Up" && { displayName: name }), // Add displayName only for sign up
    };
  
    try {
      const response = await fetch(state === "Sign Up" ? signUpUrl : loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || "Network response was not ok");
      }
      
      if (data.error) {
        setError(data.error.message);
        toast.error(data.error.message); // Show error notification
      } else {
        setError(null); // Clear any previous errors
  
        // Handle successful login/signup (e.g., redirect or save token)
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("email", email);
  
        toast.success(state === "Sign Up" ? "Account created successfully!" : "Logged in successfully!"); // Show success notification
      }

      if (state === "Sign Up") {
        navigate('/login'); // Navigate to login after sign-up success
      } else {
        navigate('/'); // Navigate to home after login success
      }
      
    } catch (error) {
      setError(error.message || "An error occurred");
      toast.error(error.message || "An error occurred"); // Show error notification
    }
  };
    return (
        <>
        <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
            <p className="text-2xl font-semibold">
              {state === "Sign Up" ? "Create Account" : "Login"}
            </p>
            <p>
              Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
            </p>
            {error && <p className="text-red-500">{error}</p>}
            {state === "Sign Up" && (
              <div className="w-full">
                <p>Full Name</p>
                <input
                  className="border border-zinc-300 rounded w-full p-2 mt-1"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
            )}
    
            <div className="w-full">
              <p>Email</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="w-full">
              <p>Password</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <button className="bg-primary text-white w-full py-2 rounded-md text-base" type="submit">
              {state === "Sign Up" ? "Create Account" : "Login"}
            </button>
            {state === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="text-primary underline cursor-pointer"
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Create a new account?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="text-primary underline cursor-pointer"
                >
                  Click here
                </span>
              </p>
            )}
          </div>
        </form>
        <ToastContainer />
        </>
      );
}

export default Login;
