<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import Certificate from '$lib/assets/images/certificate.webp';
	import Reviews from '$lib/components/Reviews.svelte';
	// import Reviews from "$lib/Reviews.svelte";
</script>

<svelte:head>
	<meta
		name="keywords"
		content="Звенигород, шиномонтаж, качественный шиномонтаж, zvenigorodok, по записи "
	/>
	<meta name="description" content="шиномонтаж в Звенигороде" />
</svelte:head>

<h1 class="text-center text-red-500 text-4xl">шиномонтаж</h1>

<h2 class="text-2xl">Качественный шиномонтаж в Звенигороде для вашего удобства</h2>
<p>Без очередей и стресса!</p>
<p>
	Только по записи:
	<br />
	+7(916)-683-46-38
</p>
<p>c 8:00 до 22:00 без выходных</p>

<div class="my-2 md:flex md:gap-2 container">
	<!-- <YMaps> -->
	<!-- 	<Map class="w-full h-100 bg-red-100 mb-2 md:w-1/2 md:mb-0" {defaultState}> -->
	<!-- 		<Placemark geometry={center} /> -->
	<!-- 	</Map> -->
	<!-- </YMaps> -->
	<Map class="w-full h-100 bg-red-100 mb-2 md:w-1/2 md:mb-0 p-0" />
	<img class="w-full h-fit md:h-100 md:w-auto" src={Certificate} alt="Сертификат" />
</div>
<p>Оборудование: Hofmann</p>
<p>Расходные материалы: Clipper, Rema Tip-Top</p>
<Reviews target="Tyres" />
