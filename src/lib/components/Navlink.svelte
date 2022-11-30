<script lang="ts">
	export let href: string;
	export let is_active: boolean;
	export let text: string;
	export let setOpen: (param: boolean) => any;
</script>

<main>
	<li class="nav-item rounded bg-slate-100 border border-slate-50 hover:border-red-500">
		<a class="px-3 py-2 flex items-center" onClick={() => setOpen(false)} {href}>
			<span class={'w-full' + (is_active ? ' text-red-500' : '')}>
				{text}
			</span>
		</a>
	</li>
</main>
