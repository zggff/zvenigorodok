<script lang="ts">
	import type { Review, ReviewTarget } from '$lib/reviews';
	import { onMount } from 'svelte';

	export let target: ReviewTarget;

	let show_reviews = true;
	let reviews: Review[] = [];
	const get_reviews = async () => {
		const data: Review[] = await (await fetch(`/api/reviews?target=${target}`)).json();
		data.forEach((review) => (review.date = new Date(review.date)));
		data.sort((a, b) => b.date.getTime() - a.date.getTime());
		reviews = data;
	};

	let error_text: string = '';
	let review: Review = {
		user: '',
		text: '',
		date: new Date(),
		target
	};
	const add_review = async () => {
		if (review.text.length == 0) {
			error_text = 'текст отзыва не может быть пустым';
			return;
		}
		if (review.user.length == 0) {
			error_text = 'имя пользователя не может быть пустым';
			return;
		}
		error_text = '';
		review.date = new Date();
		await fetch(`/api/reviews`, {
			method: 'POST',
			body: JSON.stringify(review)
		})
			.then(async () => {
				review.text = '';
				review.user = '';
				await get_reviews();
			})
			.catch(() => {
				error_text = 'не удалось добавить отзыв';
			});
	};

	onMount(get_reviews);
</script>

<button
	class="text-center bg-white w-full p-2 my-4 rounded border border-slate-50 hover:border-red-500"
	on:click={() => (show_reviews = !show_reviews)}
>
	показать отзывы
</button>
{#if show_reviews}
	<div class="w-full grid grid-rows-2 grid-cols-2 gap-2">
		<textarea
			bind:value={review.text}
			name="text"
			class="row-span-2 col-span-1 bg-white p-2 rounded border border-slate-50 hover:border-red-500"
			placeholder="Введите текст отзыва"
		/>
		<input
			bind:value={review.user}
			name="user"
			class="bg-white p-2 rounded border border-slate-50 hover:border-red-500"
			placeholder="Введите имя"
		/>
		<button
			type="submit"
			class="bg-white p-2 rounded border border-slate-50 hover:border-red-500"
			on:click={add_review}
		>
			оставить отзыв</button
		>
	</div>
	{#if error_text.length > 0}<b class="text-red-500">{error_text}</b>{/if}

	<ul class="mt-4">
		{#each reviews as review}
			<li class="bg-white mb-2 p-2 rounded">
				<b class="flex justify-between mb-2">
					<span> {review.user}</span>
					<span>{review.date.toLocaleDateString('ru-RU')}</span>
				</b>
				<p>{review.text}</p>
			</li>
		{/each}
	</ul>
{/if}
