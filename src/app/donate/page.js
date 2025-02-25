// app/donate/page.js
import Image from "next/image";

export default function DonatePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Donate</h1>
      <p>
        [Placeholder: Explain how donations support the CRLS Rubik’s Cube &
        Puzzles Club – purchasing cubes, hosting competitions, etc.]
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h3>Donate by Check</h3>
        <p>
          Please make checks payable to <strong>[Payee]</strong> and mail to:
        </p>
        <address>
          CRLS Cube Club
          <br />
          P.O. Box 12345
          <br />
          Cambridge, MA 02140
        </address>
        <p>[Any disclaimers about tax‐exempt status, if applicable]</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Venmo</h3>
        <p>We also accept Venmo at @YourVenmoHandle. Scan the QR code below:</p>
        <Image
          src="/images/venmo-qr.png"
          alt="Venmo QR Code"
          width={200}
          height={200}
        />
      </section>
    </main>
  );
}
