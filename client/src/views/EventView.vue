<script setup lang="ts">
import { ref } from 'vue'

import axios from 'axios'

import EventCard from '@/components/events/EventCard.vue'

interface EventData {
  id: string

  name: string

  priority: number

  type: 'crosspromo' | 'liveops' | 'app' | 'ads'

  description: string
}

const event = ref<EventData | null>(null)

const loading = ref(false)

async function fetchEventData() {
  try {
    loading.value = true

    const eventId = this.$route.params.id

    const response = await axios.get<EventData>(`/api/events/${eventId}`)

    event.value = response.data
  } catch (error) {
    console.error('Error fetching event ', error)
  } finally {
    loading.value = false
  }
}

fetchEventData()
</script>

<template>
  <div class="" v-if="event">
    <EventCard :event="event" />
  </div>

  <div v-else-if="loading">Loading event data...</div>
</template>
