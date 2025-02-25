// app/volunteering/page.js
export default function VolunteeringPage() {
    return (
      <main>
        <section
          style={{
            backgroundImage: "url('/images/volunteer-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "1rem" }}>
            <h2>Volunteering</h2>
          </div>
        </section>
  
        <section style={{ padding: "2rem" }}>
          <p>
            [Placeholder: Describe the club’s volunteering or outreach efforts, how
            you share puzzle solving with the community, etc.]
          </p>
        </section>
  
        <section style={{ padding: "2rem", backgroundColor: "#fafafa" }}>
          <h3>Organizations We Work With</h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            {/* sponsor logos */}
            <img src="/images/sponsor1.png" alt="Sponsor 1" width="120" />
            <img src="/images/sponsor2.png" alt="Sponsor 2" width="120" />
          </div>
        </section>
      </main>
    );
  }
  