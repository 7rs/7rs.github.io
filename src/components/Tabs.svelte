<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import type { Writable } from "svelte/store";

  // If ids duplicate, changes a method to generate random numbers.
  const tabId = "tabs-" + Math.random().toString(32).substring(2);

  const slotIds: Writable<string[]> = writable([]);
  const slotNames: Writable<string[]> = writable([]);
  const activeSlot = writable("");

  onMount(() => {
    const tabsElement = document.getElementById(tabId);
    if (tabsElement == null) {
      return;
    }
    // div#tabs-xxxxxxxx (tabsElement) > astro-slot (children[0]) > children
    const slots = tabsElement.children[0].children;

    // Hide all slots except the first slot
    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i] as HTMLElement;

      slot.id = `${tabId}-${i}`;
      slot.style.display = i === 0 ? "block" : "none";

      $slotIds = [...$slotIds, slot.id];
      $slotNames = [...$slotNames, slot.getAttribute("data-tab-name") || `${i + 1}`];
    }

    if ($slotIds.length >= 1) {
      $activeSlot = $slotIds[0];
    }
  });

  function changeActiveSlot(index: number) {
    const oldSlot = document.getElementById($activeSlot);
    if (oldSlot != null) {
      oldSlot.style.display = "none";
    }

    $activeSlot = $slotIds[index];

    const newSlot = document.getElementById($activeSlot);
    if (newSlot != null) {
      newSlot.style.display = "block";
    }
  }
</script>

<article class="flex flex-col rounded-md">
  <div class="px-2 py-1 flex gap-4 justify-start tab-buttons">
    {#each $slotNames as name, index}
      <button
        class="text-2xl px-2"
        on:click={() => {
          changeActiveSlot(index);
        }}>{name}</button>
    {/each}
  </div>
  <div class="p-2" id={tabId}>
    <slot />
  </div>
</article>

<style lang="stylus">
  article
    border solid 1px var(--main-color)

  .tab-buttons
    border-bottom solid 1px black

  button
    &:hover
      scale 115%

    &, &:hover
      transition all 125ms ease-in-out
</style>
