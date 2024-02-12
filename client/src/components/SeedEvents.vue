<script lang="ts">
import axios from 'axios'
import { Button } from './ui/button'
export default {
  methods: {
    async seedItems() {
      try {
        await axios.post('/api/seed-items')

        this.getItems() // Refresh the items list
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <Button @click="seedItems">Seed Items</Button>
</template>
