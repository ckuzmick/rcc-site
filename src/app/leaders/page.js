// app/leaders/page.js
import Image from "next/image";
import fetchLeaders from "@/utils/leaders";
import styles from "@/styles/leaders.module.css";

export const revalidate = 300; // Revalidate page every 5 minutes (override if you like)

export default async function LeadersPage() {
  let leaders = [];
  try {
    leaders = await fetchLeaders();
  } catch (error) {
    console.error("Failed to fetch leaders:", error);
  }

  return (
    <main>
      <h1>The Leadership Team</h1>
      {leaders.length > 0 ? (
        <ul className={styles.leaders}>
          {leaders.map((leader) => (
            <li key={leader.name}>
              <h2>{leader.name}</h2>
              <h3>{leader.title}</h3>
              <p>{leader.desc}</p>
              <p>Year of Graduation: {leader.yog}</p>
              <p>Email: {leader.email}</p>
              {leader.image && (
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={256}
                  height={256}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No leaders found.</p>
      )}
    </main>
  );
}

