import { Container, Typography } from '@mui/material';

export default function Privacy() {
	return (
		<Container>
			<Typography paragraph>
				This website communicates only with the <a href="https://discord.com/api/">Discord API</a>. No other services are contacted. Your
				application credentials are stored locally.
			</Typography>
		</Container>
	)
}
