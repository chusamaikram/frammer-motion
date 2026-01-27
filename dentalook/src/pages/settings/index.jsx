import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";

const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .notOneOf(
            [Yup.ref("currentPassword")],
            "New password must be different from current password"
        )
        .required("New password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords do not match")
        .required("Please confirm your new password"),
});

export default function Settings() {
    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Change password payload:", values);
            // 🔐 API call goes here
        },
    });

    const inputClass = (error, touched) =>
        `h-11 rounded-lg border px-3 text-sm
     focus:outline-none focus:ring-2
     ${error && touched
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        }`;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 font-['DM_Sans']">
            <div className="p-8 max-w-md mx-auto">
                {/* Header */}
                <div className="mb-8 flex flex-col items-center gap-1">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Change Password
                    </h2>
                    <p className="text-sm text-gray-500">
                        Update your account security by changing your password.
                    </p>
                </div>

                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    {/* Current Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base font-medium text-gray-700">
                            Current Password
                        </label>
                        <input
                            type="password"
                            name="currentPassword"
                            placeholder="Enter your current password"
                            value={formik.values.currentPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={inputClass(
                                formik.errors.currentPassword,
                                formik.touched.currentPassword
                            )}
                        />
                        {formik.touched.currentPassword && formik.errors.currentPassword && (
                            <p className="text-xs text-red-500">
                                {formik.errors.currentPassword}
                            </p>
                        )}
                    </div>

                    {/* New Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="Create a new password"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={inputClass(
                                formik.errors.newPassword,
                                formik.touched.newPassword
                            )}
                        />
                        {formik.touched.newPassword && formik.errors.newPassword ? (
                            <p className="text-xs text-red-500">
                                {formik.errors.newPassword}
                            </p>
                        ) : (
                            <span className="text-xs text-gray-500">
                                Must be at least 8 characters.
                            </span>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base font-medium text-gray-700">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter your new password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={inputClass(
                                formik.errors.confirmPassword,
                                formik.touched.confirmPassword
                            )}
                        />
                        {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                                <p className="text-xs text-red-500">
                                    {formik.errors.confirmPassword}
                                </p>
                            )}
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex items-center justify-end gap-3 w-full">
                        <Button name="Cancel" variant="secondary" to="/dashboard" />
                        <Button
                            name="Save Password"
                            variant="primary"
                            type="submit"
                            disabled={!formik.isValid || formik.isSubmitting}
                        />
                    </div>

                    {/* Security note */}
                    <p className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                        🔒 You’ll be logged out of other sessions after changing your password.
                    </p>
                </form>
            </div>
        </div>
    );
}
