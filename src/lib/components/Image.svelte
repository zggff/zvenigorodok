<script lang="ts">
	export let src: string;
	export let alt: string;
	let show_big = false;
	let click_counter = 0;

	const handle_escape = (e: KeyboardEvent) => {
		if (e.key == 'Escape') {
			unhandle_click();
		}
	};

	const handle_mouse = () => {
		if (click_counter == 0) {
			click_counter++;
			return;
		}
		unhandle_click();
	};
	const handle_click = () => {
		show_big = true;
		document.body.addEventListener('keydown', handle_escape);
		document.body.addEventListener('click', handle_mouse);
	};
	const unhandle_click = () => {
		show_big = false;
		click_counter = 0;
		document.body.removeEventListener('click', handle_mouse);
		document.body.removeEventListener('keydown', handle_escape);
	};
</script>

<button alt="Увеличить фотографию" class=" " on:click={handle_click}>
	<img {src} {alt} class={'object-cover ' + ($$restProps.class || '')} />
</button>
{#if show_big}
	<button class="fixed top-1 left-0 w-full h-full p-10 z-50 backdrop-blur-md">
		<img {src} {alt} class="max-h-full m-auto rounded-xl shadow-black shadow-2xl object-cover" />
	</button>
{/if}
