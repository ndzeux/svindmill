<script>
    import { scale } from "svelte/transition"
    export let errinfo = "Unknown";
</script>

<svelte:head>
    <title>Page Not Found</title>
</svelte:head>

<div class="fixed z-50 top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-purple-800 p-4">
    <div class="bg-white p-4 rounded-md w-full max-w-sm shadow-xl" transition:scale>
        <h1 class="font-bold text-2xl mb-2">Page Not Found</h1>
        <div>
            Looks like you've followed a broken link or entered a URL that doesn't exist on this site, you can back to <a href="/" class="text-purple-600 hover:underline">homepage</a>.
            <hr class="my-3">
            Error info: "<code>{errinfo}</code>"
        </div>
    </div>
</div>