import React from "react";
import "./footer.css";
import Image from "next/image";
import logo_climba from "@/assets/logo_climba.png"

const Footer = (props) => {
    return (
        <div className="footer" style={props.bk}>
            <div className="footer-texto">
                <p>
                    Feito por <strong>Ana Laura Coan para</strong>
                </p>
                <Image 
                    src={logo_climba}
                    width={75}
                    alt="Logotipo da empresa Climba"
                />
            </div>
        </div>
    )
}

export default Footer