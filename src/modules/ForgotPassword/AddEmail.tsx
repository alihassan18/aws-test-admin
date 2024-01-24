import ImageComponent from "@/components/ImageComponent";
import Input from "@/components/Forms/Input";
import { Button } from "@/components/Button";
import { Label } from "@/components/Forms/Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "@/components/Forms/Schema";
import InputError from "@/components/Forms/InputError";
import Link from "next/link";
import { useRouter } from "next/router";
import { FORGOT_MUTATION } from "@/graphql/auth";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

interface IAuth {
  email: string;
}
interface IProps {
    setState(state: number): void;
    setEmail: Function;
}
const AddEmail = ({ setState, setEmail, }: IProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ForgotPasswordSchema) });


  const [SendMailMutation, { loading }] = useMutation(FORGOT_MUTATION, {
    onCompleted: (data) => {
        if (data.passwordResetEmail && data.passwordResetEmail.success) {
            setState(2);
            toast.success("Please verify your email");
        }
    },
    onError: (error) => {
        toast.error(error.message);
    }
  });

  const onSubmit = () => {
    let data: IAuth = {
      email: getValues("email"),
    };
    setEmail(data.email)
    SendMailMutation({ variables: { email:data.email } });

    console.log(data, "data");
  };

  return (
    <div className="h-screen flex justify-center ">
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
          Forgot Password?
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
        <Link href="/">
          <p className="text-xs text-primary cursor-pointer">Sign In</p>
        </Link>
        <Button type="submit" isLoading={loading} >
          Verify Email
        </Button>
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

export default AddEmail;

