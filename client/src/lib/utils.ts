import type { Updater } from '@tanstack/vue-table'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { type Ref, ref } from 'vue'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value = typeof updaterOrValue === 'function' ? updaterOrValue(ref.value) : updaterOrValue
}

export const toTitleCase = ref((str: string) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
})
export const getPriorityColor = (priority: number) => {
  switch (priority) {
    case 10:
      return 'bg-red-500'
    case 9:
      return 'bg-orange-500'
    case 8:
      return 'bg-yellow-500'
    case 7:
      return 'bg-lime-500'
    case 6:
      return 'bg-lightBlue-500'
    case 5:
      return 'bg-cyan-500'
    case 4:
      return 'bg-teal-500'
    case 3:
      return 'bg-green-500'
    case 2:
      return 'bg-amber-400'
    case 1:
      return 'bg-blue-600'
    case 0:
      return 'bg-gray-500' // Default color for unknown priorities
  }
}
