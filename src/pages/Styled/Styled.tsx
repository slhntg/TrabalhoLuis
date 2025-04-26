import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	background-color: #111827;
	color: white;
	padding: 24px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #374151;
	padding: 24px;
	border-radius: 12px;
	max-width: 400px;
	width: 100%;
`;

const Avatar = styled.img`
	width: 96px;
	height: 96px;
	border-radius: 50%;
	margin-bottom: 16px;
`;

const Name = styled.h2`
	font-size: 24px;
	font-weight: bold;
`;

const Bio = styled.p`
	color: #d1d5db;
	text-align: center;
`;

const Link = styled.a`
	margin-top: 16px;
	background-color: #7c3aed;
	color: white;
	padding: 8px 16px;
	border-radius: 8px;
	text-decoration: none;
`;

const Button = styled.button`
	margin-top: 16px;
	background-color: #ef4444;
	color: white;
	padding: 8px 16px;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: #dc2626;
	}
`;

export default function Styled() {
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

	if (!user) return <Wrapper>Carregando...</Wrapper>;

	return (
		<Wrapper>
			<Container>
				<Avatar src={user.avatar_url} alt="Profile" />
				<Name>{user.name}</Name>
				<hr style={{ width: "100%", margin: "8px 0" }} />
				<Bio>{user.bio}</Bio>
				<hr style={{ width: "100%", margin: "8px 0" }} />
				<Bio>{user.public_repos} Repositórios públicos</Bio>
				<Link href={user.html_url} target="_blank" rel="noopener noreferrer">
					Ver GitHub
				</Link>
			</Container>
			<Button onClick={() => navigate("/")}>Voltar para Home</Button>
		</Wrapper>
	);
}
