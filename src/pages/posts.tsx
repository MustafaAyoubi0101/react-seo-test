import React from "react";
import { useEffect, useState } from "react";
import { BlogPostsResponse } from "../models/blogpost";
import { delay } from '../lib/utils'
import Article from "../components/article";

export default function PostPage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const CreatedMetaDesctipt = document.createElement("meta");
		CreatedMetaDesctipt.setAttribute("name", "description");
		CreatedMetaDesctipt.setAttribute("content", "Come and read my articles!");
		document.head.appendChild(CreatedMetaDesctipt);
	}, [])

	useEffect(() => {
		fetchPosts();
	}, [])

	const fetchPosts = async () => {
		const response = await fetch("https://dummyjson.com/posts");
		const { posts }: BlogPostsResponse = await response.json();
		await delay(1000);
		setPosts(posts as []);
	}


	return (
		<div className="m-auto space-y-3">
			<h1 className="text-3xl text-center mb-3 font-bold">Posts</h1>
			{posts.map(({ id, title, tags, views }, i) => (
				<Article key={i} id={id} title={title} tags={tags} views={views} body="" />
			))}
		</div>
	);
}