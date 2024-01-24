import { Button } from "@/components/Button";
import ModalTopBar from "../ModalTopBar";
import { Label } from "@/components/Forms/Label";
import InputError from "@/components/Forms/InputError";
import Input from "@/components/Forms/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateMemberSchema } from "@/components/Forms/Schema";
import SelectComponent from "@/components/Forms/Select";
import { useState } from "react";

interface IAuth {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

const Data = [{ name: "Support" }, { name: "Affiliate" }, { name: "Block" }];

interface IData {
  name: string;
}

const AddNewMemberModal = ({ hide }: any) => {
  const [selected, setSelected] = useState<IData>();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CreateMemberSchema) });

  const onSubmit = () => {
    let data: IAuth = {
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      userName: getValues("userName"),
      email: getValues("email"),
    };
    console.log(data, "data");
  };
  return (
    <div className="w-full rounded-md border border-borderColor  sm:w-[31.25rem]">
      <ModalTopBar icon="icon-land-leader">Create new member</ModalTopBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-3 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-full">
              <Label className="text-sm text-white">First Name</Label>
              <Input
                placeholder="First Name"
                name="firstName"
                register={register}
                size="sm"
              />
              <InputError error={errors.firstName?.message} />
            </div>
            <div className="w-full">
              <Label className="text-sm text-white">Last Name</Label>
              <Input
                placeholder="Fast Name"
                name="lastName"
                register={register}
                size="sm"
              />
              <InputError error={errors.lastName?.message} />
            </div>
          </div>
          <div>
            <Label className="text-sm text-white">Username</Label>
            <Input
              placeholder="Username"
              name="userName"
              register={register}
              size="sm"
            />
            <InputError error={errors.userName?.message} />
          </div>
          <div>
            <Label className="text-sm text-white">Email address</Label>
            <Input
              placeholder="E-mail"
              name="email"
              register={register}
              size="sm"
            />
            <InputError error={errors.email?.message} />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white">Member Role:</p>
            <SelectComponent
              placeholder="Support"
              Data={Data}
              selected={selected}
              setSelected={setSelected}
              className="!w-[8rem]"
            />
          </div>
        </div>
        <div
          className={`flex justify-end gap-3 rounded-b-md bg-grayColor px-5 py-3`}
        >
          <Button
            variant="outline"
            onClick={() => {
              hide(false);
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Send Email</Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewMemberModal;
