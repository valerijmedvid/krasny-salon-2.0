<template>
  <div class="error-page">
    <NuxtLayout>
      <div class="error-content">
        <h1 class="page-title">404</h1>
        <p>Stránka nebyla nalezena.</p>
        <NuxtLink class="btn-home" to="/">Zpět na úvod</NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
defineProps<{ error: { statusCode: number; message: string } }>();

useHead({ title: "Stránka nenalezena | Krásný salon" });
</script>

<style scoped>
.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  text-align: center;
}

.btn-home {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background: #c86a71;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn-home:hover {
  background: #eb7c87;
}
</style>
