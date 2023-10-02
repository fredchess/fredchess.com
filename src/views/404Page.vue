<template>
  <div class="404 w-full h-screen flex flex-col space-y-7 items-center justify-center">
    <h1 class="text-6xl font-bold">Page not found</h1>
    <RouterLink to="/">
      <button
        class="btn bg-transparent hover:bg-important border-2 border-important text-important hover:text-black px-5 py-3 flex justify-between items-center space-x-3"
      >
        <span class="font-bold">Back to home</span>
      </button>
    </RouterLink>
  </div>
</template>
