import Link from 'next/link';

const ClientsPage = () => {
	const clients = [
		{id: 'max', name: 'Maxi'},
		{id: 'andrea', name: 'Andrea'},
		{id: 'manu', name: 'Manu'},
	];

	return (
		<div>
			<h1>Clients Page</h1>
			<ul>
				{clients.map(({id, name}) => (
					<li key={`clients-${id}`}>
						<Link
							href={{
								pathname: '/clients/[id]',
								query: {id},
							}}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientsPage;
