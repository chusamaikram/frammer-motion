// ScrollManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If URL contains hash → scroll to section
        if (hash) {
            const id = hash.replace("#", "");

            // Wait for DOM render
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        }
        // Otherwise → scroll to top
        else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
}
