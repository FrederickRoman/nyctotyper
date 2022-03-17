<script>
  import NictotyperLogo from "../brand/NictotyperLogo.svelte";
</script>

<section role="banner" id="banner-container">
  <header id="banner">
    <h1 id="banner-header">
      <span id="logo-container">
        <NictotyperLogo />
      </span>
      <span>Nyctotyper</span>
    </h1>
    <h2 id="banner-subheader">Nictography cypher tool</h2>
  </header>
</section>

<style>
  #banner-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: grid;
    place-items: center;
    background: #b22222;
    /* 
    Background pattern created using the css-patterns-tool 
    from the MagicPattern toolbox by Jim Raptis
    on https://www.magicpattern.design/tools/css-backgrounds
    */
    background-image: linear-gradient(#b22222 1.3px, transparent 1.3px),
      linear-gradient(to right, #b22222 1.3px, #080809 1.3px);
    background-size: 26px 26px;
  }

  #banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #logo-container {
    display: grid;
    place-content: center;
  }

  #banner-header {
    font-size: clamp(1rem, 10vw, 6rem);
  }

  #banner-subheader {
    font-size: clamp(1rem, 10vw, 3rem);
    text-align: center;
    color: #c4b1b1; /* c46464ff*/
  }
</style>
