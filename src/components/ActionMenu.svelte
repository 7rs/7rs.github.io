<script lang="ts">
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";

  import IconButton from "@components/IconButton.svelte";

  export let opened = false;

  const visibleMenu = writable(opened);
  const favorite = writable(false);
  const locked = writable(false);

  export let axis: "x" | "y" = "x";
  const direction = axis === "x" ? "flex-row" : "flex-col";
  const padding = axis === "x" ? "pl-4" : "pt-4";
</script>

<article class={`flex-grow-0 px-4 py-2 rounded-md flex ${direction}`}>
  <IconButton
    onClick={() => {
      $visibleMenu = !$visibleMenu;
    }}
    icon={$visibleMenu ? "line-md:menu-to-close-alt-transition" : "line-md:close-to-menu-transition"}
    {axis}
    hiddenLabel>Menu</IconButton>
  {#if $visibleMenu}
    <div
      in:slide={{ duration: 200, axis: axis }}
      out:slide={{ duration: 200, axis: axis }}
      class={`${padding} flex justify-between ${direction} gap-4`}>
      <IconButton icon="material-symbols:history" {axis}>History</IconButton>
      <IconButton icon="material-symbols:undo" style="warning" {axis}>Undo</IconButton>
      <IconButton icon="material-symbols:redo" style="warning" {axis}>Redo</IconButton>
      <IconButton
        icon={$favorite ? "material-symbols:star-rate" : "material-symbols:star-outline"}
        onClick={() => {
          $favorite = !$favorite;
        }}
        {axis}>Favorite</IconButton>
      <IconButton
        icon={$locked ? "material-symbols:lock" : "material-symbols:lock-open-right-outline"}
        onClick={() => {
          $locked = !$locked;
        }}
        {axis}>Lock</IconButton>
      <IconButton icon="mdi:trash" style="failed" {axis}>Delete</IconButton>
    </div>
  {/if}
</article>

<style lang="stylus">
  article
    border solid 1px var(--main-color)
    width fit-content
    height fit-content
</style>
