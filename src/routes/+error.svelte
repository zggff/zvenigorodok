<script>
	import { page } from '$app/stores';
	let message = $page.error?.message ?? 'no error';
</script>

<h1>{$page.status}</h1>
<h2>{message}</h2>

