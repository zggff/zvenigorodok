<script lang="ts">
	import Icon from 'svelte-awesome';
	import bars from 'svelte-awesome/icons/bars';
	import NavLink from './Navlink.svelte';
	import Logo from '$lib/assets/logo.svg';
	import { page } from '$app/stores';

	export let destinations: { href: string; text: string }[];
	let is_open = false;

	function clickOutside(
		element: HTMLElement,
		callbackFunction: any
	): { update(newCallbackFunction: any): void; destroy(): void } {
		function onClick(event: { target: any }) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}
		function onScroll() {
			callbackFunction();
		}
		document.body.addEventListener('click', onClick);
		window.addEventListener('scroll', onScroll);
		return {
			update(newCallbackFunction: any) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
				window.removeEventListener('scroll', onScroll);
			}
		};
	}
</script>

<main>
	<div class="h-14" />
	<nav
		use:clickOutside={() => (is_open = false)}
		class="z-30 fixed top-0 flex flex-wrap items-center justify-between px-1 bg-white w-full"
	>
		<div class="w-full px-1 mx-auto flex flex-wrap items-center justify-between">
			<div
				class="w-full p-0 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
			>
				<a
					class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
					href="/"
				>
					<img class="h-10 w-auto" src={Logo} alt="ЗвенигородОк" />
				</a>
				<button
					class="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
					type="button"
					aria-label="expand navbar"
					on:click={() => (is_open = !is_open)}
				>
					<Icon scale={1.5} data={bars} />
				</button>
			</div>
			<div
				class={'lg:flex flex-grow items-center' + (is_open ? ' flex' : ' hidden')}
				id="example-navbar-danger"
			>
				<ul
					class="flex pb-2 flex-col gap-2 lg:flex-row list-none lg:gap-4 lg:ml-auto text-xs uppercase font-bold leading-snug text-black hover:text-red w-full text-center"
				>
					{#each destinations as destination}
						<NavLink
							is_active={destination.href === $page.url.pathname}
							href={destination.href}
							setOpen={(val) => (is_open = val)}
							text={destination.text}
						/>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</main>
