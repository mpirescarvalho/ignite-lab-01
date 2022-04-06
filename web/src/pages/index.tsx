import { GetServerSideProps } from 'next';
import { getAccessToken, getSession } from '@auth0/nextjs-auth0';

export default function Auth() {
	return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = getSession(req, res);

	const token = getAccessToken(req, res);

	console.log(token)

	if (!session) {
		return {
			redirect: {
				destination: '/api/auth/login',
				permanent: false,
			},
		};
	} else {
		return {
			redirect: {
				destination: '/app',
				permanent: false,
			},
		};
	}
};
