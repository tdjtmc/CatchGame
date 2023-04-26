<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <nav v-if="!$route.path.includes('/score-rush') && !$route.path.includes('/time-sprint')">
      <ul>
        <li>
          <router-link to="/score-rush">
            <div class="card">
              <img src="../images/score-rush.png" alt="Score Rush" class="image" />
              <span>Score Rush</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/time-sprint">
            <div class="card">
              <img src="../images/time-rush.png" alt="Time Sprint" class="image" />
              <span>Time Sprint</span>
            </div>
          </router-link>
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
  width: 250px;
  height: 250px;
}

.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

nav ul li a {
  text-decoration: none;
  color: #fafafa;
  text-align: center;
  font-size: 2rem;
}
</style>
