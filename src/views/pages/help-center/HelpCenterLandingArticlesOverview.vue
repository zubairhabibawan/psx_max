<script setup>
const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <VRow>
    <VCol
      v-for="article in props.articles"
      :key="article.title"
      cols="12"
      md="4"
    >
      <VCard
        flat
        border
      >
        <VCardText class="text-center">
          <VIcon
            :icon="article.img"
            size="58"
          />

          <h5 class="text-h5 my-2">
            {{ article.title }}
          </h5>
          <p class="clamp-text">
            {{ article.subtitle }}
          </p>

          <VBtn
            size="small"
            variant="tonal"
            :to="{
              name: 'front-pages-help-center-article-title',
              params: {
                title: 'how-to-add-inventory-in-cart',
              },
            }"
          >
            Read More
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
