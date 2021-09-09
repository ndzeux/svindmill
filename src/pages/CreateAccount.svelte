<script>
  import { link } from "svelte-navigator"
  import { scale } from "svelte/transition"
</script>

<svelte:head>
  <title>Create Account</title>
</svelte:head>


<div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
  <div
    class="flex-1 h-full max-w-lg md:max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    style="min-height: 500px;" in:scale>
    <div class="flex flex-col overflow-y-auto md:flex-row">
      <div class="h-36 xs:h-60 md:h-auto md:w-1/2">
        <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src="/src/img/login-image-light.jpg"
          alt="Office" />
        <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" src="/src/img/login-image-dark.jpg"
          alt="Office" />
      </div>
      <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div class="w-full">
          <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Create Account
          </h1>
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400 font-medium">Full Name</span>
            <input
              class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-gray-300 dark:focus:ring-2 dark:focus:ring-gray-700 border border-gray-200 p-2 rounded-md"
              placeholder="John Doe" type="text" />
          </label>
          <label class="block text-sm mt-4">
            <span class="text-gray-700 dark:text-gray-400 font-medium">Username</span>
            <input
              class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-gray-300 dark:focus:ring-2 dark:focus:ring-gray-700 border border-gray-200 p-2 rounded-md"
              placeholder="ndzeux" type="text" />
          </label>
          <label class="block text-sm mt-4">
            <span class="text-gray-700 dark:text-gray-400 font-medium">Email address</span>
            <input
              class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-gray-300 dark:focus:ring-2 dark:focus:ring-gray-700 border border-gray-200 p-2 rounded-md"
              placeholder="cms@ndzeux.com" type="email" />
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400 font-medium">Password</span>
            <input
              class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-gray-300 dark:focus:ring-2 dark:focus:ring-gray-700 border border-gray-200 p-2 rounded-md"
              placeholder="• • • • • • • •" type="password" />
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400 font-medium">Retype Password</span>
            <input
              class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-gray-300 dark:focus:ring-2 dark:focus:ring-gray-700 border border-gray-200 p-2 rounded-md"
              placeholder="• • • • • • • •" type="password" />
          </label>
          <div class="flex mt-6 text-sm select-none">
            <label class="flex items-center dark:text-gray-400">
              <input type="checkbox" class="" />
              <span class="ml-2">
                I agree to the
                <a href="/" class="hover:underline text-purple-600 dark:text-purple-400">Privacy policy</a>
              </span>
            </label>
          </div>
          <button
            class="block w-full px-4 py-2 mt-4 text-sm font-semibold leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-2 dark:focus:ring-purple-700">
            Register Now
          </button>

          <hr class="mt-4 mb-3 h-px bg-gray-200 dark:bg-gray-700 border-0" />

          <p class="text-sm ">
            Already have an account ?
            <a class="font-medium text-purple-600 dark:text-purple-400 hover:underline" href="/login" use:link>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>