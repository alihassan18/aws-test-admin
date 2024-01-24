import { Button } from '@/components/Button';
import BasicModal from '@/Modals/BasicModal';
import { useMutation } from '@apollo/client';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import ModalTopBar from '@/Modals/ModalTopBar';
import React, { useState } from 'react';
import PinField from 'react-pin-field';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { SEND_2FA_CODE_MUTATION, VERIFY_2FA_LOGIN_MUTATION } from '@/graphql/auth';
import { login, setUser } from '@/store/reducers/auth.reducer';
import { useRouter } from 'next/router';
// import { VERIFY_2FA_LOGIN_MUTATION } from 'src/graphql/auth';
// import { SEND_2FA_CODE_MUTATION } from 'src/graphql/settings';
// import { setUser, login } from 'src/store/reducers/auth.reducer';
// import ThreeFALogin from './3FALogin';

const TwoFALogin = NiceModal.create(() => {
    const modal = useModal();
    const router = useRouter();
    const [pin, setPin] = useState('');
    const dispatch = useDispatch();

    const [VerifyFALogin, { loading }] = useMutation(VERIFY_2FA_LOGIN_MUTATION, {
        onCompleted: (data) => {
            // if (data?.verify2faLogin?.threeFa) {
            //     NiceModal.show(ThreeFALogin);
            //     modal.remove();
            //     return;
            // }
            if (data.verify2faLogin) {
                dispatch(login(data.verify2faLogin.access_token));
                dispatch(setUser(data?.verify2faLogin?.user));
                router.push('/dashboard')
                modal.remove();
                // toast.success(data.verify2faCode.message);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const [FACodeMu] = useMutation(SEND_2FA_CODE_MUTATION, {
        onCompleted: (data) => {
            if (data.send2faCode.success) {
                toast.success(data.send2faCode.message);
                // modal.remove();
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = () => {
        VerifyFALogin({ variables: { code: pin } });
    };

    return (
        <BasicModal
            show={modal.visible}
            hide={modal.hide}
            icon="top-[1.438rem]"
            className="!w-[32rem] rounded-lg border border-borderColor px-0 py-0 xs:!w-full"
        >
            <ModalTopBar style="dark:text-chinesesilver" icon="icon-fa dark:text-chinesesilver">
                Two-factor Authentication
            </ModalTopBar>
            <div className="mt-5 flex flex-col items-center justify-center px-12 xs:px-6 xs1:px-4">
                <h2 className="  text-2xl font-bold xs:text-xl ">Authenticate Your Account</h2>
                <p className="mt-2.5 w-[15rem] text-center text-xs leading-5 text-davygrey xs:w-full">
                    Please confirm your account by entering the authentication code send to your account.{' '}
                </p>
                <div className="mx-auto  mt-3 grid grid-cols-6  gap-3  ">
                    <PinField
                        type=""
                        length={6}
                        validate={/^[0-9]$/}
                        className="  email-shadow h-10 w-10 overflow-y-auto rounded-md border border-lightBorder  text-center !text-base font-bold text-black  outline-primary dark:border-borderColor dark:bg-transparent dark:text-white"
                        onComplete={(p) => setPin(p)}
                    />
                </div>
                <p className="mt-4 mb-4  w-[20rem] text-center text-xs leading-6  xs:w-full">
                    If you didn’t receive a code! It may take a minute to receive your code. Haven’t received it{' '}
                    <span className=" cursor-pointer font-bold text-primary" onClick={() => FACodeMu({})}>
                        Resend code
                    </span>
                </p>
                <Button className="mb-8 w-full !py-2" onClick={onSubmit} isLoading={loading}>
                    Submit
                </Button>
            </div>
        </BasicModal>
    );
});

export default TwoFALogin;
