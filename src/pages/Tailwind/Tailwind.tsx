import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Tailwind() {
	const { username } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		async function fetchGitHubUser() {
			try {
				const response = await axios.get(
					`https://api.github.com/users/${username}`
				);
				setUser(response.data);
			} catch (error) {
				console.error("Erro ao buscar usuário:", error);
			}
		}

		fetchGitHubUser();
	}, [username]);

	if (!user)
		return (
			<div className="flex items-center justify-center h-screen">
				Carregando...
			</div>
		);

	return (
		<div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 space-y-4">
			<div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg max-w-sm w-full">
				<img
					className="w-24 h-24 rounded-full mb-4"
					src={user.avatar_url}
					alt="Profile"
				/>
				<h2 className="text-xl font-bold">{user.name}</h2>
				<hr className="w-full my-2" />
				<p className="text-gray-300">{user.bio}</p>
				<hr className="w-full my-2" />
				<p className="text-gray-300">
					{user.public_repos} Repositórios públicos
				</p>
				<a
					href={user.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 bg-green-700 text-white px-4 py-2 rounded"
				>
					Ver GitHub
				</a>
			</div>
			<button
				onClick={() => navigate("/")}
				className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
			>
				Voltar para Home
			</button>
		</div>
	);
}
