import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { delay } from "../lib/utils";
import { useEffect, useState } from "react";
import { BlogPostsResponse } from "../models/blogpost";


export default function BlogPostPage() {
	const params = useParams();
	const [newPost, setNewPost] = useState<any>([]);

	useEffect(() => {
		fetchPost();
	}, [])

	const fetchPost = async () => {
		const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
		const { posts }: BlogPostsResponse = await response.json();
		await delay(1000);
		setNewPost(posts);
	}

	return (
		<article className="max-w-4xl m-auto space-y-5">
			<div className="min-h-screen font-sans">
				<Link to="/posts">
					<div className="flex items-center ml-32 py-5 text-blue-500">
						<ArrowLeft /> Posts
					</div>
				</Link>
				<div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className="bg-teal-500 text-white p-6 flex items-center ">
						<img
							src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqh8ujtwuyr3wbxegw5ai.webp"
							alt="Software Testing Guide"
							width={800}
							height={400}
							className="rounded-xl"
						/>
					</div>

					<div className="p-8 space-y-4">
						<h1 className="text-3xl font-bold">{newPost.title}</h1>
						<p className="text-lg">
							Whether you&apos;re a developer, QA wizard, or tech enthusiast extraordinaire — software testing is as essential as coffee on a Monday morning! ☕
						</p>
						<p className="text-md">
							{newPost.body}. 🐞🥾
						</p>

						<h2 className="text-4xl font-semibold text-gray-800 mt-8">Testing types you can&apos;t ignore:</h2>
						<ul className="list-disc list-inside text-lg">
							<li><strong>Unit Testing:</strong> Tiny tests, mighty importance.</li>
							<li><strong>Integration Testing:</strong> Because teamwork makes the dream work.</li>
							<li><strong>Functional Testing:</strong> Ensuring your buttons aren&apos;t just for show.</li>
							<li><strong>Performance Testing:</strong> Faster than your Wi-Fi when your boss is watching.</li>
							<li><strong>Security Testing:</strong> Keep your app safer than grandma&apos;s cookie recipe.</li>
						</ul>

						<div className="mt-8 p-6 bg-purple-100 rounded-xl">
							<p className="text-purple-800 font-semibold">
								Want more fun guides like this? Smash that follow button or leave a quirky comment! 🎉🚀
							</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
