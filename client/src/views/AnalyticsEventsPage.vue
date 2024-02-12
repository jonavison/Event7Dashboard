<script lang="ts">
import EventCard from '@/components/events/EventCard.vue'
// interface EventData {
//   id: string

//   name: string

//   priority: number

//   type: 'crosspromo' | 'liveops' | 'app' | 'ads'

//   description: string
// }

import axios from 'axios'

export default {
  name: 'EventDetails',

  components: {
    EventCard
  },

  data() {
    return {
      loading: true,

      event: null
    }
  },

  created() {
    this.getEventData()
  },

  methods: {
    async getEventData() {
      try {
        const response = await axios.get('http://localhost:3000/api/event/123') // replace with your actual endpoint

        this.event = response.data
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<template>
  <div>
    <EventCard v-if="!loading && event" :event="event" />

    <p v-else-if="loading">Loading event data...</p>

    <p v-else>Event data not found.</p>
  </div>
</template>
