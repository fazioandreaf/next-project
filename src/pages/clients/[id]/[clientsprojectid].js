import {useRouter} from 'next/router';

const SelectedClientProject = () => {
	const {query} = useRouter();

	console.log(query);

	return (
		<div>
			<h1>SelectedClientProject {query.clientsprojectid}</h1>
		</div>
	);
};

export default SelectedClientProject;
