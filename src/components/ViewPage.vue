<template>
    <div class="view">
        <div class="card flex align-items-center justify-content-center">
            <Card style="width: 25em">
                <template #header>
                    <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
                </template>
                <template #title> To-Do list </template>
                <template #subtitle> Quick Deal special </template>
                <template #content>
                    <p>
                        Simple CRUD To-Do list that uses Vue3, Vuex, Composition API, PrimeVue and vue-router
                    </p>
                </template>
                <template #footer>
                    <router-link to="/table" class="layout-topbar-logo"><Button icon="pi pi-check" label="Try"></Button></router-link>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
</script>
<style>
.view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 0px;
  padding: 0px;
}
</style>