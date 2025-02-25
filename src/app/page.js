// app/page.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/page.module.css"; // example styling module

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Example images; replace with your real group shots
  const slides = [
    "/images/Yearbook2024.jpg",
    "/images/Yearbook2024.jpg",
    "/images/Yearbook2024.jpg",
  ];

  // Rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleJoinNow = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className={styles.homepage}>
      {/* Rotating Banner */}
      <section className={styles.bannerContainer}>
        {slides.map((src, index) => (
          <div
            key={index}
            className={`${styles.bannerSlide} ${
              index === activeSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
        <div className={styles.bannerOverlay}>
          <h2>Cambridge Rindge &amp; Latin School</h2>
          <h3>Rubik’s Cube &amp; Puzzles Club</h3>
          <p>Young, joyful, inspiring: join us in our puzzle adventures!</p>
          <button onClick={handleJoinNow} className={styles.joinBtn}>
            Join Now
          </button>
        </div>
      </section>

      {/* Join Modal */}
      {showModal && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              &times;
            </button>
            <h4>Join Our Google Classroom</h4>
            <p>
              Only CRLS students may join the Google Classroom, due to school
              security policies.
            </p>
            <p>
              For more information or inquiry, email the club advisor:{" "}
              <a href="mailto:nwhitfield@cpsd.us">nwhitfield@cpsd.us</a>
            </p>
            {/* Placeholder link; replace with real invite link */}
            <a href="#" className={styles.googleLink}>
              Google Classroom Invite
            </a>
          </div>
        </div>
      )}

      {/* Bottom sponsor banner, if desired */}
      <section className={styles.sponsorBanner}>
        <div className={styles.sponsorHeading}>
          <h3>Our Partners</h3>
        </div>
        <div className={styles.sponsorLogos}>
          <Image src="/images/ccc-banner-logo-4" alt="Cambridge Community Center" width={100} height={50} />
          <Image src="/images/WCA Lockup Negative Primary" alt="World Cube Association" width={100} height={50} />
          <Image src="/images/logo_square_with_text" alt="Cube New England" width={100} height={50} />
        </div>
      </section>
    </main>
  );
}










// import fetchLeaders from "@/utils/leaders";

// export default async function Home() {
//   const leaders = await fetchLeaders();

//   return (
//     <main>
//       <h1>Leaders</h1>
//       <ul>
//         {leaders.map((leader) => (
//           <li key={leader.name}>
//             <h2>{leader.name}</h2>
//             <p>{leader.title}</p>
//             <p>{leader.desc}</p>
//             <p>{leader.yog}</p>
//             <p>{leader.email}</p>
//             {leader.image && (
//               <img
//                 src={leader.image}
//                 alt={leader.name}
//                 width={256}
//                 height={256}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
