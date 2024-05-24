import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const LoginForm = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState<true | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const captchaHandler = (data: string | null) => setIsCaptchaValid(data);

  return (
    <div className="flex flex-col gap-y-3">
      {/* Using Controller for Ant Design's Input with validation rules */}
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field }) => <Input {...field} placeholder="email" />}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        }}
        render={({ field }) => (
          <Input.Password {...field} placeholder="password" />
        )}
      />

      <ReCAPTCHA
        sitekey="6LdMW-YpAAAAABRn0Ojml-H6xaZkpL-7CeSKz_ik"
        onChange={captchaHandler}
      />
      <Button
        type={!isValid ? "default" : "primary"}
        htmlType="submit"
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
      >
        Log in
      </Button>
    </div>
  );
};

export default LoginForm;
