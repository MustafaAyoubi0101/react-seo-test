import Sidebar from '../components/sidebar';
import QuickiePost from '../components/quickiePost';
import DevWelcomeCard from '../components/devWelcomeCard';
import Article from '../components/article';
import ActiveDiscussions from '../components/activeDiscussions';
import { BlogPostsResponse } from '../models/blogpost';
import { useEffect, useState } from 'react';

export default function HomePage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const meta = document.createElement('meta');
		meta.name = 'description';
		meta.content = 'Come and read my articles!';
		document.head.appendChild(meta);
		fetchPosts();

		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.innerHTML = JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": "Welcome to DevScope",
			"author": {
				"@type": "Person",
				"name": "John Developer"
			},
			"datePublished": "2024-12-01"
		});
		document.head.appendChild(script);
	}, [])

	const fetchPosts = async () => {
		const response = await fetch("https://dummyjson.com/posts");
		const { posts }: BlogPostsResponse = await response.json();
		setPosts(posts as any);
	}

	return (
		<div className="m-auto">
			<div className="flex justify-between">
				<aside className="w-64 hidden md:block">
					<Sidebar />
				</aside>
				<div className="flex-1 p-1 max-w-3xl mx-3">
					<QuickiePost />
					<DevWelcomeCard />
					{posts?.map(({ id, title, tags, views }, i) => (
						<Article key={i} id={id} title={title} tags={tags} views={views} body="" />
					))}
				</div>
				<ActiveDiscussions />
			</div>
		</div>
	);
}