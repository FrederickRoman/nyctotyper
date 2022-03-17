<script>
  export let value = "";

  const handleClick = (evt) => {
    evt.preventDefault();
    value = "";
  };
</script>

<form>
  <label for="plain-input_text-area">Write your text here:</label>
  <textarea
    rows="10"
    bind:value
    on:change
    id="plain-input_text-area"
    name="plain-input_text-area"
  />
  <button on:click={handleClick}>Clear</button>
</form>

<style>
  form {
    font-size: x-large;
    font-family: inherit;
    margin: 20px 0px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  #plain-input_text-area {
    width: 80%;
  }

  label {
    width: 80%;
  }

  button {
    font-size: x-large;
    font-family: inherit;
  }
</style>
