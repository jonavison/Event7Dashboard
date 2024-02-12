<script setup lang="ts">
import EventCard from '@/components/events/EventCard.vue'
</script>

<template>
  <div class="grid gap-10 z-10">
    <div class="text-xl rounded-lg font-medium text-primary p-4 bg-background">Recently Added</div>
    <div class="grid grid-flow-col">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
    <div class="text-xl rounded-lg font-medium p-4 text-primary bg-background">
      High priority Events
    </div>
    <div class="grid grid-flow-col">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
    <!-- Render the Events data here -->
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;

  margin-bottom: 10px;
}
</style>
