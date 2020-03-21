<script>
	export let imgSrc;
	import TestComponent from './components/TestComponent/index.svelte';
</script>

<main>
	<h1>Captain Picard approves</h1>
	<img src={imgSrc} alt="Captain Picard clapping in approval GIF">
	<br />
	<div>
		<TestComponent cardImgSrc="https://media.giphy.com/media/rIq6ASPIqo2k0/giphy.gif"/>
		<TestComponent cardImgSrc="https://media.giphy.com/media/3o7TKUcreLvhQNwCFG/giphy.gif"/>
		<TestComponent cardImgSrc="https://media.giphy.com/media/viEM13XhzGgA8/giphy.gif"/>
	</div>
</main>

<style>
	:global(body) {
		background-color: #d7d7d7;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		height: 100vh;
		margin: 0 auto;
	}

	h1 {
		color: #575080;
		font-size: 4em;
		font-weight: 100;
	}

	div {
		margin: 30px auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>