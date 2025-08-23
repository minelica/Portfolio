<script setup lang="ts">
const handleClick = () => {
  alert('Button clicked!')
}
</script>

<template>
  <div class="placeholder">
    <h2>Home Page</h2>
    <p>This is a placeholder for the Home page content.</p>
    <button @click="handleClick">Hello</button>
  </div>
</template>

<style scoped>
button {
  background-color: cyan;
  color: black;
  border: none;
  cursor: pointer;
  font-size: larger;
  border-radius: 500px;
}

.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: #888;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 2rem;
}
</style>
