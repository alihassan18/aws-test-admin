import ImageComponent from "@/components/ImageComponent";
import Input from "@/components/Forms/Input";
import { Button } from "@/components/Button";
import { Label } from "@/components/Forms/Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "@/components/Forms/Schema";
import InputError from "@/components/Forms/InputError";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD_MUTATION } from "@/graphql/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface IAuth {
  newPassword: string;
  confirmPassword: string;
}
interface IProps {
    email: string;
    code: string;
}
const ResetPassword = ({ email,code }: IProps) => {
    const router = useRouter()
    
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ResetPasswordSchema) });

  const [ChangePasswordMu, { loading }] = useMutation(RESET_PASSWORD_MUTATION, {
    onCompleted: (data) => {
        if (data.resetPassword && data.resetPassword.success) {
            toast.success('Password reset successfully. Please Login');
            router.push('/sign-in')
        }
    },
    onError: (error) => {
        toast.error(error.message);
    }
});

  const onSubmit = () => {
    let data: IAuth = {
        newPassword: getValues("newPassword"),
        confirmPassword: getValues("confirmPassword"),
      };
    ChangePasswordMu({ variables: { email, code, password:data.newPassword, confirmPassword:data.confirmPassword } });
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
          Reset Password
        </h1>
        <hr className="border-borderColor" />
        <div>
          <Label className="text-sm text-white">New Password</Label>
          <Input
            placeholder="Type new password here"
            type="password"
            name="newPassword"
            register={register}
            size="sm"
          />
          <InputError error={errors.newPassword?.message} />
        </div>
        <div>
          <Label className="text-sm text-white">Re-Enter Password</Label>
          <Input
            placeholder="Re-type password here"
            type="password"
            name="confirmPassword"
            register={register}
            size="sm"
          />
          <InputError error={errors.confirmPassword?.message} />
        </div>
        <Button type="submit">Create New Password</Button>
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

export default ResetPassword;
