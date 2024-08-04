<script lang="ts">
  import Icon from "@iconify/svelte";
  import { blur } from "svelte/transition";
  import { Styles } from "@scripts/style.ts";

  export let icon: string;
  export let onClick = (event) => {};
  export let style = Styles.Default;

  export let hiddenLabel = false;

  export let axis: "x" | "y" = "x";
</script>

<div in:blur out:blur>
  {#if !hiddenLabel}
    <p class={`px-2 py-1 rounded-md style-${style}`} data-axis={axis}>
      <slot />
    </p>{/if}
  <button on:click={onClick} {...$$restProps}>
    <Icon {icon} {...$$restProps} />
  </button>
</div>

<style lang="stylus">
  div
    position relative

    &, &:hover
      transition all 50ms ease-in-out

    p
      display block
      opacity 0
      position absolute
      font-family monospace
      text-align center

      &[data-axis="x"]
        bottom 100%
        left 50%
        translate -50% 0

      &[data-axis="y"]
        right 100%
        top 50%
        translate 0 -50%

    &:hover
      p
        opacity 100%

  :global(svg)
    display block
    height var(--icon-size)
    width auto

    &, &:hover
      transition all 75ms ease-in-out

    &:hover
      scale 125%
      opacity 75%
</style>
