import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio page</Link>
        </li>
      </ul>
    </div>
  )
}
