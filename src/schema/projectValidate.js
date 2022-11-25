import * as Yup from "yup";

const projectSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(6, "Title must be at least 6 characters")
    .max(20, "Title must not exceed 40 characters"),
  duration: Yup.string().required("Duration is required"),
  start_date: Yup.date().required("Start date is required"),
  budget: Yup.number()
    .required("Budget is required")
    .min(8, "Budget must be at least 8 numbers"),
});

const projectData = {
  title: "",
  duration: "",
  start_date: "",
  budget: 0,
  workers: {
    inspector: false,
    flooringInstaller: false,
    surveyor: false,
    brickMason: false,
    ironWorker: false,
    craneOperator: false,
    safetyManager: false,
    costEstimator: false,
    manager: false,
  },
}

export { projectSchema, projectData };