<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Image from '$lib/components/Image.svelte';

	import Stuff1 from '$lib/assets/images/stuff1.webp';
	import Certificate from '$lib/assets/images/certificate.webp';
	import Compressor from '$lib/assets/images/compressor.webp';
</script>

<svelte:head>
	<meta
		name="keywords"
		content="Звенигород, шиномонтаж, качественный шиномонтаж, zvenigorodok, по записи "
	/>
	<meta name="description" content="качественный шиномонтаж в Звенигороде" />
	<title>шиномонтаж в Звенигороде</title>
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
	<Map class="w-full h-100 bg-red-100 mb-2 md:w-1/2 md:mb-0 p-0" />
	<Image class="w-full h-fit md:h-100 md:w-auto object-fill" src={Certificate} alt="Сертификат" />
</div>
<p>Оборудование: Hofmann</p>
<p>Расходные материалы: Clipper, Rema Tip-Top</p>
<h2>Галерея</h2>
<div class="flex justify-start flex-wrap gap-4">
	<Image src={Compressor} alt="test" class="my-image w-[20rem] " />
	<Image src={Stuff1} alt="test" class="my-image w-[30rem]" />
</div>
<Reviews target="Tyres" />
