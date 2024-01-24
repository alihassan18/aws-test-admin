import PinField from 'react-pin-field';
import { Button } from '@/components/Button';
import { useMutation } from '@apollo/client';
import { VERIFY_CODE_MUTATION } from '@/graphql/auth';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ImageComponent from '@/components/ImageComponent';

interface IProps {
    setState(state: number): void;
    email: string;
    setCode: Function;
}

const VerifyEmail = ({ setState, email, setCode }: IProps) => {
    const [pin, setPin] = useState('');
    const router = useRouter()

    const [VeridyCodeMutation, { loading }] = useMutation(VERIFY_CODE_MUTATION, {
        onCompleted: (data) => {
            if (data.verifyCode && data.verifyCode.success) {
                setState(3)
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = () => {
        console.log(email,'emailll')
        VeridyCodeMutation({ variables: { email, code: pin } });
        setCode(pin);
    };

    return (
        <div className="h-screen flex justify-center">
          {/* <ImageComponent
            src="/assets/images/logo.svg"
            fill
            figClassName="w-[6.8rem] h-[2.5rem] mx-auto"
            className="object-contain"
            alt=""
          /> */}
    
          <div className="flex w-[50%] flex-col justify-center px-32 space-y-6">
          <h1 className="text-center font-display text-3xl font-extrabold text-primary">
            Verify Email
          </h1>
          <hr className="border-borderColor" />
            <p className="mt-2.5 text-xs text-davygrey text-center">Check your inbox and enter the verification code.</p>
            <div className="mx-auto  mt-5   grid grid-cols-6  gap-3  ">
                <PinField
                    type="string"
                    length={6}
                    validate={/^[0-9]$/}
                    className=" email-shadow h-10 w-10 overflow-y-auto rounded-md border  border-borderColor bg-transparent text-center !text-base  font-bold text-white outline-primary"
                    onComplete={(p) => setPin(p)}
                />
            </div>
            <Button isLoading={loading} disabled={pin.length < 5} className="mt-6 w-full !py-2" onClick={onSubmit}>
                Submit
            </Button>
            <p className="mt-4  mb-4 text-center text-white">
                If you didn’t receive a code! <span className=" cursor-pointer font-bold text-primary"> Resend</span>{' '}
            </p>
            </div>
{/*           
            <div className="h-screen w-[60%]">
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

export default VerifyEmail;



