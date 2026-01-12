import { Link } from "react-router-dom";

export default function Button({
    name,
    variant = "primary",
    type = "button",
    to,
    href,
    onClick,
    disabled = false,
    className = "",
}) {
    const baseStyles =
        "w-full cursor-pointer px-4 py-3 rounded-xl flex items-center justify-center text-sm leading-5.25 transition";

    const variants = {
        primary: "bg-[#087BB3] text-white border font-bold",
        secondary: "bg-white text-[#030303] border border-[#F3F3F5] font-semibold",
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    // 🔹 External link
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles}
            >
                {name}
            </a>
        );
    }

    // 🔹 Internal navigation
    if (to) {
        return (
            <Link to={to} className={styles}>
                {name}
            </Link>
        );
    }

    // 🔹 Normal / Submit button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles}
        >
            {name}
        </button>
    );
}
