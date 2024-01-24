import { Button } from "@/components/Button";
import ModalTopBar from "../ModalTopBar";
import { Label } from "@/components/Forms/Label";
import InputError from "@/components/Forms/InputError";
import Input from "@/components/Forms/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateProductSchema } from "@/components/Forms/Schema";
import SelectComponent from "@/components/Forms/Select";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { toast } from "react-toastify";

const CREATE_PRODUCT_MUTATION = gql`
    mutation CreateProduct($input: CreateProductInput!) {
        createProduct(createProductInput: $input) {
            id
            title
        }
    }
`;


interface IAuth {
  title: string;
  brand: string;
  description: string;
  price: string;
}

const Data = [{ name: "Support" }, { name: "Affiliate" }, { name: "Block" }];

interface IData {
  name: string;
}

const AddNewProductModal = ({ hide }: any) => {
  const [selected, setSelected] = useState<IData>();


  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({ resolver: yupResolver(CreateProductSchema) });

const [createProduct, { data, loading, error }] = useMutation(
  CREATE_PRODUCT_MUTATION,
  {
      onCompleted: () => {
          toast.success("Successfully created");
      },
      onError: (error) => {
          console.log(error, "error");

          toast.error("Something went wronge");
      },
  }
);

const onSubmit = async (formData: any) => {
  try {
      const response = await createProduct({
          variables: { input: formData },
      });

      console.log(response.data);
      // Handle success (e.g., show a message or redirect)
  } catch (e) {
      console.error(e);
      // Handle error (e.g., show error message)
  }
};
  return (
    <div className="w-full rounded-md border border-borderColor  sm:w-[31.25rem]">
      <ModalTopBar icon="icon-land-leader">Create new product</ModalTopBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-3 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-full">
              <Label className="text-sm text-white">Title</Label>
              <Input
                placeholder="Title"
                name="title"
                type="text"
                register={register}
                size="sm"
              />
              
              <InputError error={errors.title?.message} />
            </div>
            <div className="w-full">
              <Label className="text-sm text-white">Brand</Label>
              <Input
                placeholder="Brand"
                name="brand"
                register={register}
                size="sm"
              />
              <InputError error={errors.brand?.message} />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-full">
              <Label className="text-sm text-white">Description</Label>
              <Input
                placeholder="Description"
                name="description"
                type="text"
                register={register}
                size="sm"
              />
              
              <InputError error={errors.description?.message} />
            </div>
            <div className="w-full">
              <Label className="text-sm text-white">Price</Label>
              <Input
                placeholder="Price"
                name="price"
                register={register}
                size="sm"
              />
              <InputError error={errors.price?.message} />
            </div>
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

export default AddNewProductModal;
