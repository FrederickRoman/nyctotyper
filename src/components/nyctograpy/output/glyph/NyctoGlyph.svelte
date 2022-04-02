<script>
  import NyctographyService from "../../../../services/NyctographyService";
  export let char = "";
  const size = 3;
  const color = "#bbb";
  $: glyph = NyctographyService.charToGlyph(char);
</script>

{#if glyph}
  <span id="nictographic-glyph">
    <svg width={10 * size} height={10 * size}>
      {#if glyph.lines.top}
        <line
          x1={1 * size}
          y1={1 * size}
          x2={9 * size}
          y2={1 * size}
          stroke-width={1 * size}
        />
      {/if}
      {#if glyph.lines.right}
        <line
          x1={9 * size}
          y1={1 * size}
          x2={9 * size}
          y2={9 * size}
          stroke-width={1 * size}
        />
      {/if}
      {#if glyph.lines.bottom}
        <line
          x1={1 * size}
          y1={9 * size}
          x2={9 * size}
          y2={9 * size}
          stroke-width={1 * size}
        />
      {/if}
      {#if glyph.lines.left}
        <line
          x1={1 * size}
          y1={1 * size}
          x2={1 * size}
          y2={9 * size}
          stroke-width={1 * size}
        />
      {/if}
      {#if glyph.circles.topLeft}
        <circle
          cx={2 * size}
          cy={2 * size}
          r={1 * size}
          stroke={color}
          stroke-width={1 * size}
          fill="transparent"
        />
      {/if}
      {#if glyph.circles.topRight}
        <circle
          cx={8 * size}
          cy={2 * size}
          r={1 * size}
          stroke={color}
          stroke-width={1 * size}
          fill="transparent"
        />
      {/if}
      {#if glyph.circles.bottomRight}
        <circle
          cx={8 * size}
          cy={8 * size}
          r={1 * size}
          stroke={color}
          stroke-width={1 * size}
          fill="transparent"
        />
      {/if}
      {#if glyph.circles.bottomLeft}
        <circle
          cx={2 * size}
          cy={8 * size}
          r={1 * size}
          stroke={color}
          stroke-width={1 * size}
          fill="transparent"
        />
      {/if}
      {#if glyph.dots.topLeft}
        <circle
          cx={2 * size}
          cy={2 * size}
          r={0.5 * size}
          stroke={color}
          stroke-width={1 * size}
          fill={color}
        />
      {/if}
      {#if glyph.dots.topRight}
        <circle
          cx={8 * size}
          cy={2 * size}
          r={0.5 * size}
          stroke={color}
          stroke-width={1 * size}
          fill={color}
        />
      {/if}
      {#if glyph.dots.bottomRight}
        <circle
          cx={8 * size}
          cy={8 * size}
          r={0.5 * size}
          stroke={color}
          stroke-width={1 * size}
          fill={color}
        />
      {/if}
      {#if glyph.dots.bottomLeft}
        <circle
          cx={2 * size}
          cy={8 * size}
          r={0.5 * size}
          stroke={color}
          stroke-width={1 * size}
          fill={color}
        />
      {/if}
    </svg>
    <span id="glyph-tooltip">{char}</span>
  </span>
{/if}

<style>
  #nictographic-glyph {
    position: relative;
  }

  line {
    stroke-linecap: round;
  }

  line,
  circle {
    stroke: white;
  }

  #glyph-tooltip {
    background-color: black;
    visibility: hidden;
    color: orangered;
    font-size: xx-large;
    position: absolute;
    z-index: 1;
  }

  #nictographic-glyph:hover > #glyph-tooltip {
    visibility: visible;
  }

  #nictographic-glyph:hover circle,
  #nictographic-glyph:hover line {
    stroke: orangered;
  }
</style>
