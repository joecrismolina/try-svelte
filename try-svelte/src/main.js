import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		imgSrc: 'https://media.giphy.com/media/NJZMSqRY3rG9i/giphy.gif'
	}
});

export default app;