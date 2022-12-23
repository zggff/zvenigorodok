<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.scss';

	const destinations = [
		{ href: '/', text: 'шиномонтаж' },
		{ href: '/cleaning', text: 'химчистка' },
		{ href: '/master', text: 'мастер' }
	];
</script>

<main>
	<Navbar {destinations} />
	<div class="py-4 px-4">
		<slot />
	</div>
</main>
