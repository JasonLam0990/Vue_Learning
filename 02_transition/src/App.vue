<template>
  <app-header></app-header>
</template>


<script>

import Header from "./components/Header.vue";
// import Quiz from "./components/Quiz.vue";

export default {
  components: {
    // appQuiz: Quiz,
    appHeader: Header
  }
};
</script>

<style>
  .flip-enter-active{
    animation: flip-in 0.2s ease-out forwards
  }
  .flip-leave-active{
    animation: flip-out 0.2s ease-out forwards
  }
  @keyframes flip-out {
    from{
      transform: rotateY(0deg)
    }to{
      transform: rotateY(90deg)
    }
  }
  @keyframes flip-in {
    from{
      transform: rotateY(90deg)
    }to{
      transform: rotateY(0deg)
    }
  }
</style>
