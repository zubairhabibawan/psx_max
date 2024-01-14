<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { paginationMeta } from '@api-utils/paginationMeta'

const headers = [
  {
    title: 'Default Qty',
    key: 'defaultQty',
  },
  {
    title: 'Alternate Qty',
    key: 'alternateQty',
  },
  {
    title: 'Alternate UOM',
    key: 'alternateUom',
  },
  {
    title: 'Status',
    key: 'status',
  },
]

const data =  [
  {
    defaultUomQty: 40,
    alternateUom: 'MUN',
    alternateUomQty: 1,
    status: 'Active',
  },
  {
    defaultUomQty: 1000,
    alternateUom: 'TON',
    alternateUomQty: 1,
    status: 'Active',
  },
]

const status = ref([
  {
    title: 'Scheduled',
    value: 'Scheduled',
  },
  {
    title: 'Publish',
    value: 'Published',
  },
  {
    title: 'Inactive',
    value: 'Inactive',
  },
])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}
</script>

<template>
  <div>
    <!-- 👉 products -->
    <VCard
      title="Multi Uom Conversions"
      class="mb-6"
    >
      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        :items="data"
        fixed-header
        height="500"
        :items-length="data.length"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- product  -->
        <template #item.name="{ item }">
          <div class="d-flex align-center gap-x-2">
            <div class="d-flex flex-column">
              <span class="text-body-1 font-weight-medium">{{ item.defaultUomQty }}</span>
            </div>
          </div>
        </template>

        <!-- code -->
        <template #item.code="{ item }">
          <span class="text-body-1 font-weight-medium">{{ item.alternateUomQty }}</span>
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <div class="d-flex align-center gap-x-2">
            <div class="d-flex flex-column">
              <span class="text-body-1 font-weight-medium">{{ item.status }}</span>
            </div>
          </div>
        </template>

        <template #bottom>
          <VDivider />

          <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-medium-emphasis mb-0">
              {{ paginationMeta({ page, itemsPerPage }, data.length) }}
            </p>

            <VPagination
              v-model="page"
              :length="Math.min(Math.ceil(data.length / itemsPerPage), 5)"
              :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(data.length / itemsPerPage), 5)"
            >
              <template #prev="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  Previous
                </VBtn>
              </template>

              <template #next="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  Next
                </VBtn>
              </template>
            </VPagination>
          </div>
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.product-widget {
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
