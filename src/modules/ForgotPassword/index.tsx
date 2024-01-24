import { useState } from "react";
import AddEmail from "./AddEmail";
import VerifyEmail from "./VerifyEmail";
import ResetPassword from "./ResetPassword";

const ForgotPasswordModule = () => {
  const [state,setState]= useState(1)
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  return (
  <>
    {(() => {
        switch (state) {
            case 1: {
                return <AddEmail setState={setState} setEmail={setEmail}  />;
            }
            case 2: {
                return <VerifyEmail setState={setState} email={email} setCode={setCode} />;
            }
            case 3: {
                return <ResetPassword  email={email} code={code} />;
            }
            default:
                break;
        }
    })()}
  </>
   
);
};

export default ForgotPasswordModule;
