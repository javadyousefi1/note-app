import SignUpForm from "@/components/forms/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <h1 className="text-5xl font-bold text-primary">sign Up</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
