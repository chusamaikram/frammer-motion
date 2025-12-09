
import { gsap, } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

export default function Box() {

    const boxRef = useRef();
    useGSAP(() => {
    }, {})
    const handleClick = () => {
        gsap.to(boxRef.current, {
            opacity: 0, scale: 0.5, rotation: 360, duration: 2, ease: "bounce.out"
        })

    }
    return (
        <>
            <div style={{
                marginTop: "40px",
                marginLeft: "40px",
            }}>
                <div ref={boxRef}
                    style={{
                        height: "100px",
                        width: "100px",
                        background: "blue",
                    }}>

                </div>
                <button onClick={handleClick}
                    style={{
                        marginTop: "20px",
                    }}> click</button>
            </div>
        </>
    )
}