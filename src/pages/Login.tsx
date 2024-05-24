import LoginForm from "@/components/forms/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <h1 className="text-5xl font-bold text-primary">Log in</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
