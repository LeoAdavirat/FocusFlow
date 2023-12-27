<script>
	let backgroundText =
		"In FocusFlow, everything is organized into notes.<br><br>\n \
Even background theme is also a note, <br>\n \
which means you can edit it by pressing 'Shift + E' <br><br>\n \
Click on add a note icon on the side to begin <br>\n \
(For keyboard user: <b>Ctrl + Shift + A)</b>";
</script>

0
<h1 class="text-4.5xl text-theme1-text font-body font-normal text-center pt-[25px]">HomePage</h1>

<p class="text-1.5xl text-theme1-text font-body font-normal text-left pl-[22%] pt-[2.5%]">
	{@html backgroundText}
</p>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.theme1-sand);
	}
</style>
