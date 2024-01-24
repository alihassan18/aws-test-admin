import Link from "next/link";
import ImageComponent from "@/components/ImageComponent";
import Input from "@/components/Forms/Input";
import { Button } from "@/components/Button";
import FormCheck from "@/components/Forms/FormCheck";
import { Label } from "@/components/Forms/Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/components/Forms/Schema";
import InputError from "@/components/Forms/InputError";
import { useMutation } from "@apollo/client";
import { ADMIN_LOGIN } from "@/graphql/auth";
import { useDispatch } from "react-redux";
import { setUser, login } from "@/store/reducers/auth.reducer";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Overview from "../Overview";
import NiceModal from "@ebay/nice-modal-react";
import TwoFALogin from "../AuthenticationFactor/2FALogin";

interface IAuthLogin {
  email: string;
  password: string;
}

const SignInModule = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const dispatch = useDispatch();

  const [loginMutation, { loading }] = useMutation(ADMIN_LOGIN, {
    onCompleted: (data) => {
      dispatch(login(data?.adminLogin?.access_token));
      if (data?.adminLogin?.twoFa) {
        NiceModal.show(TwoFALogin);
        // !landing && setPopup && setPopup(false);
        return;
    }else{
      dispatch(setUser(data?.adminLogin?.user));
      router.push('/dashboard')
    }
    
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const onSubmit = () => {
    let data: IAuthLogin = {
      email: getValues("email"),
      password: getValues("password"),
    };
    console.log('so submit', data);

    // if (!email || !password) return toast.warning('Type email or password');
    loginMutation({ variables: { email: data.email, password: data.password } });
  };

  return (
    <div className="h-screen flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[50%] flex-col justify-center px-32 space-y-6"
      >
        {/* <ImageComponent
          src="/assets/images/logo.svg"
          fill
          figClassName="w-[6.8rem] h-[2.5rem] mx-auto"
          className="object-contain"
          alt=""
        /> */}
        <h1 className="text-center font-display text-3xl font-extrabold text-primary">
          Sign in to your account
        </h1>
        <hr className="border-borderColor" />
        <div>
          <Label className="text-sm text-white">Email address</Label>
          <Input
            placeholder="E-mail or username"
            name="email"
            register={register}
            size="sm"
          />
          <InputError error={errors.email?.message} />
        </div>
        <div>
          <Label className="text-sm text-white">Password</Label>
          <Input
            placeholder={"Password"}
            type="password"
            name="password"
            register={register}
            size="sm"
          />
          <InputError error={errors.password?.message} />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FormCheck
              label="Remember me"
              id="remember"
              labelClass="text-xs font-bold text-primary ml-2"
            />
          </div>
          <Link href="/forgot-password">
            <p className="cursor-pointer text-xs font-bold text-primary">
              Forgot password?
            </p>
          </Link>
        </div>
        <Button type="submit" isLoading={loading}>Sign in</Button>
      </form>
      {/* <div className="h-screen w-[60%]">
        <ImageComponent
          className="rounded object-cover"
          src="/assets/images/auth.svg"
          alt=""
          fill
          figClassName="h-full w-full"
          priority={true}
        />
      </div> */}
    </div>
  );
};

export default SignInModule;
