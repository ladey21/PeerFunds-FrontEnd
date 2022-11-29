import * as Yup from "yup";

const groupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  purpose: Yup.string().required("Purpose is required"),
  slots: Yup.number().required("Slots are required"),
  description: Yup.string().required("Description is required"),
  amount: Yup.number().required("Amount is required"),
});

const groupData = {
  name: "",
  purpose: "",
  slots: "",
  description: "",
  amount: "",
};

export { groupSchema, groupData };
