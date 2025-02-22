import fetchLeaders from "@/utils/leaders";

export default async function Home() {
  const leaders = await fetchLeaders();

  return (
    <main>
      <h1>Leaders</h1>
      <ul>
        {leaders.map((leader) => (
          <li key={leader.name}>
            <h2>{leader.name}</h2>
            <p>{leader.title}</p>
            <p>{leader.desc}</p>
            <p>{leader.yog}</p>
            <p>{leader.email}</p>
            {leader.image && (
              <img
                src={leader.image}
                alt={leader.name}
                width={256}
                height={256}
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
