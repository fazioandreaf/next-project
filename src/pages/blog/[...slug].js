import {useRouter} from 'next/router';

const BlogPostPage = () => {
	const {query} = useRouter();

	console.log(query);

	return (
		<div>
			<h1>Blog Post Page</h1>
		</div>
	);
};

export default BlogPostPage;
