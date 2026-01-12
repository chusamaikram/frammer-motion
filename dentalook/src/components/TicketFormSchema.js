import * as yup from "yup";

export const TicketFormSchema = yup.object({
    category: yup.string().required("Please select an assistance type"),
    sub_category: yup.string().required("Please select a device"),
    name: yup.string().required("Computer name is required"),
    location: yup.string().required("Location is required"),
    description: yup
        .string()
        .min(10, "Description must be at least 10 characters")
        .required("Description is required"),
});
