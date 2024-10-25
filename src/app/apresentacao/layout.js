import React from "react";
import Footer from "@/components/Footer/footer";

import "./styles.css";

export default function ApresentacaoPage({ children }) {
    return (
        <>
            <section className="post-apresentacao-tela">{children}</section>
            <Footer bk={{backgroundColor: "#034645"}} />
        </>

    );
}