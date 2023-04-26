<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <nav v-if="!$route.path.includes('/score-rush') && !$route.path.includes('/time-sprint')">
      <ul>
        <li>
          <router-link to="/score-rush"
            ><img src="../images/score-rush.png" class="image"
          /></router-link>
        </li>
        <li>
          <router-link to="/time-sprint"
            ><img src="../images/time-rush.png" class="image"
          /></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  height: 100vh;
}

nav li {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 300px;
  height: 300px;
}
</style>
