<script setup lang="ts">
import { Gift, Shield, Zap } from 'lucide-vue-next'
</script>

<template>
  <section
    class="
      py-12
      md:py-20
    "
  >
    <div
      class="
        mx-auto max-w-6xl space-y-8 px-6
        md:space-y-12
      "
    >
      <div class="relative z-10 mx-auto max-w-xl space-y-4 text-center">
        <h2
          class="text-3xl font-semibold"
        >
          {{ $t('home.stats.title') }}
        </h2>
        <p class="text-muted-foreground">
          {{ $t('home.stats.subtitle') }}
        </p>
      </div>

      <div
        class="
          grid gap-6
          md:grid-cols-3 md:gap-8
        "
      >
        <div
          class="flex flex-col items-center space-y-4 text-center"
        >
          <div
            class="
              flex size-12 items-center justify-center rounded-full
              bg-primary/10
            "
          >
            <Zap class="size-6 text-primary" />
          </div>
          <div class="text-2xl font-bold">
            {{ $t('home.features.fast') }}
          </div>
          <p class="text-muted-foreground">
            {{ $t('home.features.fast_desc') }}
          </p>
        </div>
        <div
          class="flex flex-col items-center space-y-4 text-center"
        >
          <div
            class="
              flex size-12 items-center justify-center rounded-full
              bg-primary/10
            "
          >
            <Shield class="size-6 text-primary" />
          </div>
          <div class="text-2xl font-bold">
            {{ $t('home.features.secure') }}
          </div>
          <p class="text-muted-foreground">
            {{ $t('home.features.secure_desc') }}
          </p>
        </div>
        <div
          class="flex flex-col items-center space-y-4 text-center"
        >
          <div
            class="
              flex size-12 items-center justify-center rounded-full
              bg-primary/10
            "
          >
            <Gift class="size-6 text-primary" />
          </div>
          <div class="text-2xl font-bold">
            {{ $t('home.features.free') }}
          </div>
          <p class="text-muted-foreground">
            {{ $t('home.features.free_desc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
