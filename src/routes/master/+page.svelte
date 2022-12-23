<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Compressor from '$lib/assets/images/compressor.webp';
	import Insulation from '$lib/assets/images/insulation.webp';
	import Insulation2 from '$lib/assets/images/insulation2.webp';
	import Window from '$lib/assets/images/window.webp';
	import Facade from '$lib/assets/images/facade.webp';
	import Electricity from '$lib/assets/images/electricity.webp';
	import Electricity2 from '$lib/assets/images/electricity2.webp';
	import Heating1 from '$lib/assets/images/heating1.webp';
	import Heating2 from '$lib/assets/images/heating2.webp';
	import Reviews from '$lib/components/Reviews.svelte';
</script>

<h1>домашний мастер</h1>
<p>Домашний мастер возьмет на себя весь груз Ваших хозяйственных хлопот.</p>
<p>Домашний мастер сломает все что нужно и качественно восстановит.</p>
<p>Домашний мастер - отопление, сантехника, водопровод.</p>
<p>Домашний мастер – электрика.</p>
<p>Домашний мастер – отремонтирует квартиру.</p>
<p>Домашний мастер – сделает Ваш дом теплым, уютным и комфортным.</p>

<h2>Галерея</h2>
<div class="flex justify-center flex-wrap gap-4">
	<Image src={Insulation} alt="test" class="my-image " />
	<Image src={Insulation2} alt="test" class="my-image" />
	<Image src={Window} alt="test" class="my-image" />
	<Image src={Facade} alt="test" class="my-image" />
	<Image src={Electricity} alt="test" class="my-image" />
	<Image src={Heating2} alt="test" class="my-image" />
</div>

<Reviews target="HomeMaster" />
