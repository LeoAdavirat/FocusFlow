<script lang="ts">
	import { goto } from '$app/navigation';

	function goToApp() {
		goto('/app');
	}
</script>

<header class="bg-theme1-dock flex text-theme1-text">
	<h1 class="text-4.5xl font-body font-bold text-center py-2 px-14">FocusFlow</h1>
	<div class="text-xl my-1 mx-3 py-2 px-3 border-solid border-2 border-sky-500">Sign Up</div>
	<div class="text-xl my-5 mx-7">Sign In</div>
</header>
<p class="text-1.5xl text-theme1-text font-body font-normal text-left pl-[22%] pt-[2.5%]">
	<button on:click={goToApp}>Go To App!</button>
</p>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.theme1-sand);
	}
</style>
