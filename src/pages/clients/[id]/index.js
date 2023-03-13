import {useRouter} from 'next/router';

const ClientProjectsPage = () => {
	const {query, push} = useRouter();

	const handleLoad = () => {
		//load project
		push({
			pathname: '/clients/[id]/[clientsprojectid]',
			query: {id: query.id, clientsprojectid: 'project'},
		});
	};

	return (
		<div>
			<h1>Client Projects Page {query.id}</h1>
			<button onClick={() => handleLoad()}>Load Projects</button>
		</div>
	);
};

export default ClientProjectsPage;
