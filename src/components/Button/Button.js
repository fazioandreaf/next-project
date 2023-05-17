import Link from 'next/link';

import styles from './Button.module.scss';

const Button = ({href, onClick, children}) => {
	if (!href || onClick) {
		return (
			<button onClick={onClick} className={styles['btn']}>
				{children}
			</button>
		);
	}

	return (
		<Link href={href} className={styles['btn']}>
			{children}
		</Link>
	);
};

export default Button;
