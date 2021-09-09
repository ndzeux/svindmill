<script>
  import { Router, Route } from "svelte-navigator";
  import Loadable from "svelte-loadable";
  //
  import Exception from "./components/Exception.svelte";
  //
  import Dashboard from "./pages/dashboard/_layout.svelte";
  //
</script>

<div id="app" class="relative min-h-screen font-default text-gray-700 dark:text-gray-300">
<Router primary={false}>
  <Route path="*">
    <Loadable loader="{() => import("./pages/404.svelte")}" errinfo="Page not available">
      <div slot="loading"><Exception on="loading" /></div>
    </Loadable>
  </Route>
  <Route path="/">
    <Loadable loader="{() => import("./pages/Home.svelte")}">
      <div slot="loading"><Exception on="loading" /></div>
    </Loadable>
  </Route>
  <Route path="/register">
    <Loadable loader="{() => import("./pages/CreateAccount.svelte")}">
      <div slot="loading"><Exception on="loading" /></div>
    </Loadable>
  </Route>
  <Route path="/login">
    <Loadable loader="{() => import("./pages/Login.svelte")}">
      <div slot="loading"><Exception on="loading" /></div>
    </Loadable>
  </Route>
  <Route path="/forgot-password">
    <Loadable loader="{() => import("./pages/ForgotPassword.svelte")}">
      <div slot="loading"><Exception on="loading" /></div>
    </Loadable>
  </Route>
  <Route path="/reset-password/:key" let:params>
    <Loadable loader="{() => import("./pages/ResetPassword.svelte")}" key="{params.key}">
      <div slot="loading"><Exception on="loading" /></div>
    </Loadable>
  </Route>
  <Dashboard />
</Router>
</div>

<style global>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>