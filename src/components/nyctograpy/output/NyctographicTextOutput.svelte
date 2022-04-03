<script>
  import { onMount } from "svelte";
  import NyctoGlyph from "./glyph/NyctoGlyph.svelte";
  import defaultPlainText from "../../../../public/assets/defaultPlainText.json";
  export let text = "";

  const defaultText = defaultPlainText["text"] ?? "";
  onMount(() => (text = defaultText));

  $: paragraphs = text.split(/\n/).map((paragraph) => paragraph.split());
</script>

<section id="output-container">
  {#if text}
    {#each paragraphs as paragraph}
      <div>
        {#each paragraph as chars}
          {#each chars as char}
            <NyctoGlyph {char} />
          {/each}
        {/each}
      </div>
    {/each}
  {:else}
    <div>
      Write text on input box, and nytographic transciption will appear here.
    </div>
  {/if}
</section>

<style>
  #output-container {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
