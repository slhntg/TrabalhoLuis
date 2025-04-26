import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	function handleNavigate(style: "tailwind" | "styled") {
		if (!username) {
			alert("Digite um nome de usuário!");
			return;
		}
		navigate(`/${style}/${username}`);
	}

	return (
		<div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-gray-900 text-white">
			<div className="flex flex-col items-center justify-center space-y-6">
				<h1 className="text-4xl font-bold">Buscar Perfil GitHub</h1>
				<input
					type="text"
					placeholder="Digite o nome de usuário"
					className="border border-gray-700 bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<div className="flex space-x-4">
					<button
						onClick={() => handleNavigate("tailwind")}
						className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
					>
						Tailwind
					</button>
					<button
						onClick={() => handleNavigate("styled")}
						className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
					>
						Styled
					</button>
				</div>
			</div>
		</div>
	);
}
