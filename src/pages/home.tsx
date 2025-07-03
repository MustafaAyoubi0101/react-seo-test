import React from 'react';
import Sidebar from '../components/sidebar';
import QuickiePost from '../components/quickiePost';
import DevWelcomeCard from '../components/devWelcomeCard';
import Article from '../components/article';
import ActiveDiscussions from '../components/activeDiscussions';
import { BlogPostsResponse } from '../models/blogpost';
import { useEffect, useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';

export default function HomePage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchPosts();
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
				<div style={{ width: '24rem' }}>
					<ChallengeCard
						headerTitle="What's happening this week"
						headerEmoji="📝"
						items={[
							{
								sectionTitle: "Happening Now",
								sectionEmoji: "🌟",
								image: { src: './robot-looking-files.jpg', width: 100, height: 100 },
								link: {
									href: "#",
									text: 'Runner H "AI Agent Prompting" Challenge',
								},
								description: "$10,000 in prizes for 20 winners!",
							},
							{
								sectionTitle: "Just Announced",
								sectionEmoji: "⚡",
								image: { src: './success.jpg', width: 100, height: 100 },
								link: {
									href: "#",
									text: "World's Largest Hackathon Writing Challenge",
								},
								description: "Reflect, share, and celebrate your journey!",
							},
						]}
						footer="Have a great week"
					/>
					<ActiveDiscussions />
				</div>
			</div>
		</div>
	);
}