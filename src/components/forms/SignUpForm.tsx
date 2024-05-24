import { useForm, Controller } from "react-hook-form";
import { Button, Input, message } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { SignUpFormType } from "@/types";
import { registerUser } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import { setUserData } from "@/features/auth";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsloading] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState<string | null>(null);
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<SignUpFormType>();

  const onSubmit = (formResult: SignUpFormType) => {
    if (!isCaptchaValid) return message.error("fill the captcha");

    setIsloading(true);
    registerUser(formResult)
      .then(({ data }) => {
        setTimeout(() => {
          navigate("/");
        }, 1500);
        dispatch(setUserData(data?.data));
        setIsloading(false);
        message.success("signed up successfully");
      })
      .catch((err) => {
        setIsloading(false);
        message.error(err?.response?.data?.message);
      });
  };

  const captchaHandler = (data: string | null) => setIsCaptchaValid(data);

  return (
    <div className="flex flex-col gap-y-3">
      {/* Using Controller for Ant Design's Input with validation rules */}
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field }) => <Input {...field} placeholder="name" />}
      />

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
            value: 5,
            message: "Password must be at least 5 characters",
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
        loading={isLoading}
      >
        sign up
      </Button>
    </div>
  );
};

export default SignUpForm;
