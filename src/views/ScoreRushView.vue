<script setup>
import { ref } from 'vue'

const result = ref(0)
const btn = ref(null)

const onHover = () => {
  const maxX = window.innerWidth - btn.value.offsetWidth
  const maxY = window.innerHeight - btn.value.offsetHeight
  const currentX = btn.value.offsetLeft
  const currentY = btn.value.offsetTop

  let newX = Math.floor(Math.random() * maxX)
  let newY = Math.floor(Math.random() * maxY)

  if (newX < 0) {
    newX = 0
  } else if (newX > maxX) {
    newX = maxX
  }

  if (newY < 0) {
    newY = 0
  } else if (newY > maxY) {
    newY = maxY
  }

  btn.value.style.transform = `translate(${newX - currentX}px, ${newY - currentY}px)`
}

const onClick = () => {
  onHover()
  result.value++
}
</script>

<template>
  <div class="main">
    <h1>{{ result }}</h1>
    <button @mouseover="onHover" @click="onClick" ref="btn" class="btn">Catch me</button>
  </div>
</template>

<style scoped>
h1 {
  margin: 5px 15px;
}

.main {
  position: relative;
  width: 1500px;
  height: 670px;
  cursor: grab;
}
.btn {
  position: absolute;
  width: 180px;
  height: 85px;
  padding: 10px;
  background-color: #d82222;
  border-radius: 17px;
  outline: none;
  color: #fafafa;
  font-size: 2rem;
  transition: transform 0.3s ease-in-out;
  box-shadow: 4px 4px 45px rgba(176, 164, 164, 0.271);
  user-select: none;
  text-transform: uppercase;
}
</style>
