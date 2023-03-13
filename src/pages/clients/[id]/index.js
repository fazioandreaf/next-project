import {useRouter} from 'next/router';

const ClientProjectsPage = () => {
	const {query} = useRouter();
	return <div>Client Projects Page {query.id}</div>;
};

export default ClientProjectsPage;
