// app/whoweare/page.js
"use client";

import { useRef, useEffect, useState } from "react";
import styles from "@/styles/whoweare.module.css";

export default function WhoWeAre() {
  const quoteRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!quoteRef.current) return;
      const rect = quoteRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setVisible(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section
        style={{
          backgroundImage: "url('/images/hero-whoweare.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          position: "relative",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "1rem" }}>
          <h2>Who We Are</h2>
        </div>
      </section>

      <section style={{ padding: "2rem" }}>
        <p>[Short summary about the CRLS Cube & Puzzles Club’s purpose and vibe]</p>
        <blockquote
          ref={quoteRef}
          className={`${styles.fadeQuote} ${visible ? styles.visible : ""}`}
        >
          “Insert an inspiring puzzle quote here.”
        </blockquote>
      </section>
    </main>
  );
}
