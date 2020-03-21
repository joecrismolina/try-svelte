<script>
    export let cardImgSrc;

    let showImage = false;

    function handleClick() {
        showImage = !showImage;
    }
</script>

<div>
    {#if showImage}
        <img src={cardImgSrc}>
    {/if}
    <button on:click={handleClick}>{showImage ? 'Hide Card' : 'Show Card'}</button>
</div>

<style>
    div {
        border-radius: 3px;
        padding: 10px 20px;
        box-shadow: 5px 3px 3px #b5b5b5;
        background-color: white;
        width: 300px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
    }

    img {
        max-width: 95%;
    }

    button {
        margin: 10px;
        font-weight: 600;
        color: #2B2840;
        background-color: #e8e8ff;
        border-color: #D1D1E6;
        width: 70%;
    }
</style>