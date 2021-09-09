<script>
    import { fade } from "svelte/transition";
    export let on = "loading";
    export let information = "Empty items"
</script>

<div class="absolute top-2/4 left-2/4 transform text-center flex items-center justify-center -translate-x-2/4 -translate-y-2/4" in:fade="{{ duration: 100 }}">
    {#if on == "loading"}
    <svg class="animate-spin h-10 w-10 sm:w-12 sm:h-12 text-gray-300 dark:text-dpink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    {:else if on == "empty"}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:w-12 sm:h-12 text-gray-300 dark:text-dpink dark:text-opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
    <span class="text-gray-300 dark:text-dpink dark:text-opacity-60" style="margin-left: -100%;">{information}</span>
    {:else if on == "error"}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:w-12 sm:h-12 text-gray-300 dark:text-dpink dark:text-opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span class="text-gray-300 dark:text-dpink dark:text-opacity-60" style="margin-left: -100%;">Error occured</span>
    {/if}
</div>