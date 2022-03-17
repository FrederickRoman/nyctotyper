<script>
  import NyctotyperIntro from "./intro/NyctotyperIntro.svelte";
  import Divider from "../divider/Divider.svelte";
  import PlainTextInput from "./input/PlainTextInput.svelte";
  import NyctographicTextOutput from "./output/NyctographicTextOutput.svelte";

  let text = "";
</script>

<section class="container">
  <NyctotyperIntro />
  <Divider />
  <PlainTextInput
    bind:value={text}
    on:change={(event) => (text = event.target.value)}
  /> 
  <Divider />
  <NyctographicTextOutput bind:text />
</section>

<style>
  .container {
    margin: 40px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
</style>
