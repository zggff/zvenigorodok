<script lang="ts">
	let myMap;
	let center = [55.746309, 36.878061];
	let loaded = false;

	const loadMap = () => {
		// @ts-ignore
		myMap = new ymaps.Map('map', {
			center: center,
			zoom: 16
		});
		const points = myMap.geoObjects;
		// @ts-ignore
		points.add(new ymaps.Placemark(center, { balloonContent: 'шиномонтаж ЗвенигородОк' }, {}));
		// @ts-ignore
		loaded = true;
	};
	const load = () => {
		// @ts-ignore
		ymaps.ready(loadMap);
	};
</script>

<svelte:head>
	<script
		async
		defer
		src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=75f279d9-379b-42cf-af2d-f7f5df98d242"
		on:load={load}
	>
	</script>
</svelte:head>

<div id="map" class={$$restProps.class || ''} />
