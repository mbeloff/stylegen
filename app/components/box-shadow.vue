<template>
  <div class="p-6">
    <p class="mb-5 text-xl font-bold">Box Shadow Generator</p>
    <div class="flex flex-col gap-8 md:flex-row">
      <!-- Controls Section -->
      <div class="w-full space-y-4 md:w-1/2">
        <div class="space-y-2">
          <label class="block text-sm font-medium"
            >Horizontal Offset (px)</label
          >
          <input
            v-model="horizontalOffset"
            type="range"
            min="-50"
            max="50"
            class="w-full" />
          <span class="text-sm">{{ horizontalOffset }}px</span>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium">Vertical Offset (px)</label>
          <input
            v-model="verticalOffset"
            type="range"
            min="-50"
            max="50"
            class="w-full" />
          <span class="text-sm">{{ verticalOffset }}px</span>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium">Blur Radius (px)</label>
          <input
            v-model="blur"
            min="0"
            type="range"
            max="50"
            class="w-full" />
          <span class="text-sm">{{ blur }}px</span>
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium">Spread (px)</label>
          <input
            v-model="spread"
            min="0"
            type="range"
            max="50"
            class="w-full" />
          <span class="text-sm">{{ spread }}px</span>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium">Shadow Color</label>
          <input
            v-model="color"
            type="color"
            class="w-full h-10 rounded" />
        </div>

        <div class="p-4 mt-6 bg-gray-100 rounded">
          <p class="font-mono text-sm break-all">
            box-shadow: {{ horizontalOffset }}px {{ verticalOffset }}px
            {{ blur }}px {{ spread }}px {{ color }};
          </p>
        </div>
      </div>

      <!-- Preview Section -->
      <div
        class="relative flex items-center justify-center w-full p-8 rounded md:w-1/2"
        :class="{
          'bg-gray-800 text-white': mode == 'dark',
          'bg-gray-100 text-gray-900': mode == 'light',
        }">
        <div class="absolute flex gap-2 top-2 right-2">
          <button
            :class="{ 'ring 2 ring-green-500': mode == 'dark' }"
            class="w-6 h-6 bg-gray-900 border rounded"
            @click="setMode('dark')" />
          <button
            class="w-6 h-6 bg-gray-100 border rounded"
            :class="{ 'ring 2 ring-green-500': mode == 'light' }"
            @click="setMode('light')" />
        </div>
        <h1
          class="p-2 text-4xl font-bold"
          :style="{
            'box-shadow': `${horizontalOffset}px ${verticalOffset}px ${blur}px ${spread}px ${color}`,
          }">
          Drop Shadow Preview
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const horizontalOffset = ref(5)
const verticalOffset = ref(5)
const spread = ref(5)
const blur = ref(5)
const color = ref('#43eba4')
const mode = ref('dark')

const setMode = (e) => {
  console.log(e + ' mode')
  mode.value = e
}
</script>
