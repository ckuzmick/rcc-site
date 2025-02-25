// app/competitions/page.js
export default function CompetitionsPage() {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Competitions</h1>
        <p>
          [Placeholder: We regularly host official cubing competitions in
          collaboration with the World Cube Association (WCA) and Cube New England
          (CNE).]
        </p>
  
        <section style={{ marginTop: "2rem" }}>
          <h2>Cube New England (CNE)</h2>
          <p>[Short summary: 14 years of cubing in New England, 120+ comps, etc.]</p>
        </section>
  
        <section style={{ marginTop: "2rem" }}>
          <h2>World Cube Association (WCA)</h2>
          <p>[Short summary: volunteer‐led nonprofit, mission statement, etc.]</p>
        </section>
  
        <section style={{ marginTop: "3rem" }}>
          <h3>Recent Competitions</h3>
          <ul>
            <li>
              <strong>Cambridge Winter Open 2025</strong> –{" "}
              <a href="https://www.worldcubeassociation.org/competitions" target="_blank">
                Official WCA Link
              </a>
            </li>
            <li>
              <strong>CRLS Cubing Classic 2024</strong> –{" "}
              <a href="https://www.worldcubeassociation.org/competitions" target="_blank">
                Official WCA Link
              </a>
            </li>
            {/* etc. */}
          </ul>
        </section>
      </main>
    );
  }
  