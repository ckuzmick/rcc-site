import Image from 'next/image';
import fetchLeaders from '@/utils/leaders';
import styles from '@/styles/leaders.module.css';

export default async function LeadersPage() {
    const leaders = await fetchLeaders();

    return (
        <main>
            <h1>Leaders</h1>
            <ul className={styles.leaders}>
                {leaders.map((leader) => (
                    <li key={leader.name}>
                        <h2>{leader.name}</h2>
                        <p>{leader.title}</p>
                        <p>{leader.desc}</p>
                        <p>{leader.yog}</p>
                        <p>{leader.email}</p>
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
        </main>
    );
}  