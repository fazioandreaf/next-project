import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles['header']}>
			<Link href="/" className={styles['logo']}>
				Next events
			</Link>
			<nav className={styles['navigation']}>
				<ul>
					<li>
						<Link href="/events">All events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
