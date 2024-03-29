<script setup lang="ts">
import { ref } from 'vue'

import { useRouter } from 'vue-router'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption
} from '@/components/ui/table'
import DataTableDropDown from './data-table-dropdown.vue'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components//ui/badge'
import { getPriorityColor, toTitleCase } from '@/lib/utils'
// Adjust the path to your events file
import { ArrowUpDown, PlusCircle } from 'lucide-vue-next'

import AddEventForm from '../forms/AddEventForm.vue'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export interface Event {
  id: string
  name: string
  priority: number
  type: 'crosspromo' | 'liveops' | 'app' | 'ads'
  description: string
}

const events: Event[] = [
  {
    id: 'm5gr84i9',
    name: 'PandomName',
    priority: 0,
    type: 'crosspromo',
    description: 'description'
  },
  {
    id: '3u1reuv4',
    name: 'randomName',
    priority: 5,
    type: 'liveops',
    description: 'description'
  },
  {
    id: 'derv1ws0',
    name: 'GandomName',
    priority: 8,
    type: 'app',
    description: 'description'
  },
  {
    id: '5kma53ae',
    name: 'AandomName',
    priority: 10,
    type: 'ads',
    description: 'description'
  },
  {
    id: 'bhqecj4p',
    name: 'ZandomName',
    priority: 5,
    type: 'ads',
    description: 'Very long descirption we never know who goes crazy with explaining description'
  }
]
const router = useRouter()
const navigateToEvent = (id) => {
  router.push(`/analytics/${id}`)
}

const sortDirection = ref<'asc' | 'desc'>('asc')
const handlePrioritySort = () => {
  sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  visibleRows.value = [...visibleRows.value].sort((a, b) => {
    if (sortDirection.value === 'asc') {
      return a.priority - b.priority
    } else {
      return b.priority - a.priority
    }
  })
}

const visibleRows = ref(events)
const handleTypeFilter = (type: string) => {
  if (type === '') {
    visibleRows.value = events

    return
  }

  visibleRows.value = events.filter((event) => event.type === type)
}
</script>

<template>
  <div class="w-full">
    <div class="grid grid-flow-col gap-2 max-w-2xl">
      <Button variant="outline" size="sm" @click="handleTypeFilter('')"> View All </Button>
      <Button variant="outline" size="sm" @click="handleTypeFilter('crosspromo')">
        Crosspromo
      </Button>
      <Button variant="outline" size="sm" @click="handleTypeFilter('liveops')"> LiveOps </Button>
      <Button variant="outline" size="sm" @click="handleTypeFilter('app')"> App </Button>
      <Button variant="outline" size="sm" @click="handleTypeFilter('ads')"> Ads </Button>
    </div>
    <div class="flex gap-2 items-center py-4 justify-end">
      <Dialog>
        <DialogTrigger
          :class="[buttonVariants({ variant: 'default', size: 'sm' }), 'flex border-2']"
          ><PlusCircle class="mr-2 h-4 w-4" />Add Event</DialogTrigger
        >
        <DialogContent>
          <AddEventForm />
        </DialogContent>
      </Dialog>
    </div>
    <Table>
      <TableCaption>A list of your recent events.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-32"> Type </TableHead>
          <TableHead class="w-24 cursor-pointer hover:text-foreground" @click="handlePrioritySort">
            <div class="flex items-center">
              <span>Priority</span>
              <ArrowUpDown class="h-4 w-4 ml-1" /></div
          ></TableHead>
          <TableHead class="w-52">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead class="text-right"> Edit </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="event in visibleRows"
          :key="event.id"
          class="hover:bg-slate-200"
          @click="navigateToEvent(event.id)"
        >
          <TableCell class="font-medium">{{ toTitleCase(event.type) }}</TableCell>
          <TableCell class="font-medium">
            <Badge class="" :class="getPriorityColor(event.priority)">
              {{ event.priority }}
            </Badge></TableCell
          >
          <TableCell class="font-medium">{{ event.name }}</TableCell>
          <TableCell class="font-medium">{{ event.description }}</TableCell>
          <TableCell class="text-right"> <DataTableDropDown :events="event" /></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
