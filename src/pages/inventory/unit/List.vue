<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { paginationMeta } from '@api-utils/paginationMeta'
import { useTheme } from 'vuetify'

import DefaultUomCreateEditDialog from "@/views/inventory/unit/uom/CreateEditDialog.vue"
import MultiUomCreateEditDialog from "@/views/inventory/unit/multi-uom/CreateEditDialog.vue"
import DefaultUomDetailDialog from "@/views/inventory/unit/uom/DetailDialog.vue"
import MultiUomDetailDialog from "@/views/inventory/unit/multi-uom/DetailDialog.vue"

const vuetifyTheme = useTheme()
const currentTab = ref(0)

const tabNameMapping = {
  0: 'uom',
  1: 'multiUom',
}

const currentTabName = computed(() => {
  return tabNameMapping[currentTab.value].charAt(0).toUpperCase() + tabNameMapping[currentTab.value].slice(1)
})

const tabData = computed(() => {
  return [
    {
      title: 'UOM',
      icon: 'tabler-circle-letter-u',
    },
    {
      title: 'Multi UOM',
      icon: 'tabler-affiliate',
    },
  ]
})

const headers = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Code',
    key: 'code',
  },
  {
    title: 'Description',
    key: 'description',
    sortable: false,
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const selectedStatus = ref()
const searchQuery = ref('')
let isCreateEditDialogVisible = ref(false)
let isDetailDialogVisible = ref(false)

const status = ref([
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Inactive',
    value: 'Inactive',
  },
])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const perPageDropdown = ref([5, 10, 20, 25, 50])
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const uom = [
  {
    name: 'Kilogram',
    code: 'KG',
    description: 'Unit to measure weights',
    status: 'Active',
  },
  {
    name: 'Liter',
    code: 'L',
    description: 'Unit to measure capacity',
    status: 'Active',
  },
  {
    name: 'Meter',
    code: 'M',
    description: 'Unit to measure Lengths',
    status: 'Active',
  },
  {
    name: 'Mun',
    code: 'MUN',
    description: 'Unit to measure weights',
    status: 'Active',
  },
  {
    name: 'Ton',
    code: 'TON',
    description: 'Unit to measure weights',
    status: 'Active',
  },
  {
    name: 'Gallon',
    code: 'GLN',
    description: 'Unit to measure capacity',
    status: 'Active',
  },
  {
    name: 'Foot',
    code: 'FT',
    description: 'Unit to measure Lengths',
    status: 'Active',
  },
]

const multiUom = [
  {
    name: 'Weight Measuring Conversions',
    code: 'WMC',
    defaultUom: 'KG',
    description: 'Unit Conversions to measure weights',
    conversion: [
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
    ],
    status: 'Active',
  },
  {
    name: 'Capacity Measuring Conversions',
    code: 'CMC',
    defaultUom: 'L',
    description: 'Unit Conversions to measure Capacity',
    conversion: [
      {
        defaultUomQty: 3.785,
        alternateUom: 'GLN',
        alternateUomQty: 1,
        status: 'Active',
      },
    ],
    status: 'Active',
  },
  {
    name: 'Length Measuring Conversions',
    code: 'LMC',
    defaultUom: 'M',
    description: 'Unit Conversions to measure Lengths',
    conversion: [
      {
        defaultUomQty: 0.3048,
        alternateUom: 'FT',
        alternateUomQty: 1,
        status: 'Active',
      },
    ],
    status: 'Active',
  },
]

const listingData = {
  uom: uom,
  multiUom: multiUom,
}

let selectedItem = null
let selectedItemToDetail = null

watch(() => isCreateEditDialogVisible.value, newValue => {
  if (!newValue) {
    selectedItem = null
  }
})

const selectItemToEdit = item => {
  selectedItem = item
  isCreateEditDialogVisible.value = !isCreateEditDialogVisible.value
}

const listData = computed(() => listingData[tabNameMapping[currentTab.value]])
const totalListData = computed(() => listingData[tabNameMapping[currentTab.value]].length)
</script>

<template>
  <div>
    <!-- 👉 widgets -->
    <VCard class="mb-6">
      <VCardText>
        <VSlideGroup
          v-model="currentTab"
          show-arrows
          mandatory
        >
          <VSlideGroupItem
            v-for="(tab, index) in tabData"
            :key="tab.title"
            v-slot="{ isSelected, toggle }"
            :value="index"
          >
            <div
              style="block-size: 94px; inline-size: 110px;"
              :style="isSelected ? 'border-color:rgb(var(--v-theme-primary)) !important' : ''"
              :class="isSelected ? 'border' : 'border border-dashed'"
              class="d-flex flex-column justify-center align-center cursor-pointer rounded px-1 py-1 me-6"
              @click="toggle"
            >
              <VAvatar
                rounded
                size="38"
                :color="isSelected ? 'primary' : 'secondary'"
                variant="tonal"
                class="mb-3"
              >
                <VIcon :icon="tab.icon" />
              </VAvatar>
              {{ tab.title }}
            </div>
          </VSlideGroupItem>
        </VSlideGroup>
      </VCardText>
    </VCard>

    <!-- 👉 listData -->
    <VCard
      title="Filters"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="2"
          >
            <AppSelect
              v-model="selectedStatus"
              placeholder="Status"
              :items="status"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider class="my-4" />

      <div class="d-flex flex-wrap gap-4 mx-5">
        <div class="d-flex gap-4 flex-wrap align-center">
          <!-- 👉 Delete  -->
          <IconBtn>
            <VIcon
              color="error"
              icon="tabler-trash"
            />
          </IconBtn>
          <!-- 👉 Search  -->
          <AppTextField
            v-model="searchQuery"
            :placeholder="'Search '+ currentTabName"
            density="compact"
            style="inline-size: 200px;"
            class="me-3"
          />
        </div>

        <VSpacer />
        <div class="d-flex gap-4 flex-wrap align-center">
          <AppSelect
            v-model="itemsPerPage"
            :items="perPageDropdown"
          />
          <!-- 👉 Export button -->
          <VBtn
            variant="tonal"
            color="secondary"
            prepend-icon="tabler-upload"
          >
            Export
          </VBtn>

          <VBtn
            prepend-icon="tabler-plus"
            @click="isCreateEditDialogVisible = !isCreateEditDialogVisible"
          >
            Add {{ currentTabName }}
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        show-select
        :items="listData"
        :items-length="totalListData"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- product  -->
        <template #item.name="{ item }">
          <div class="d-flex align-center gap-x-2">
            <div class="d-flex flex-column">
              <span class="text-body-1 font-weight-medium">{{ item.name }}</span>
            </div>
          </div>
        </template>

        <!-- code -->
        <template #item.code="{ item }">
          <span class="text-body-1 font-weight-medium">{{ item.code }}</span>
        </template>

        <!-- description -->
        <template #item.description="{ item }">
          <span class="text-body-1 font-weight-medium">{{ item.description }}</span>
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <div class="d-flex align-center gap-x-2">
            <div class="d-flex flex-column">
              <span class="text-body-1 font-weight-medium">{{ item.status }}</span>
            </div>
          </div>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="selectItemToEdit(item)">
            <VIcon icon="tabler-edit" />
          </IconBtn>

          <IconBtn>
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem
                  value="View"
                  prepend-icon="tabler-eye"
                  @click="isDetailDialogVisible = !isDetailDialogVisible"
                >
                  Detail
                </VListItem>
                <VListItem
                  value="duplicate"
                  prepend-icon="tabler-copy"
                >
                  Duplicate
                </VListItem>
                <VListItem
                  value="download"
                  prepend-icon="tabler-download"
                >
                  Download
                </VListItem>

                <VListItem
                  value="delete"
                  prepend-icon="tabler-trash"
                >
                  Delete
                </VListItem>
              </VList>
            </VMenu>
          </IconBtn>
        </template>

        <template #bottom>
          <VDivider />

          <div class="d-flex align-center justify-space-between flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-medium-emphasis mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalListData) }}
            </p>

            <VPagination
              v-model="page"
              :length="Math.min(Math.ceil(totalListData / itemsPerPage), 5)"
              :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalListData / itemsPerPage), 5)"
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

    <DefaultUomCreateEditDialog
      v-if="currentTab===0"
      v-model:isDialogVisible="isCreateEditDialogVisible"
      :uom-data="selectedItem ? selectedItem :undefined"
    />
    <MultiUomCreateEditDialog
      v-else
      v-model:isDialogVisible="isCreateEditDialogVisible"
      :multi-uom-data="selectedItem ? selectedItem :undefined"
      :default-uom-array="uom.map(item=>item.code)"
    />
    <DefaultUomDetailDialog
      v-if="currentTab===0"
      v-model:isDialogVisible="isDetailDialogVisible"
    />
    <MultiUomDetailDialog
      v-else
      v-model:isDialogVisible="isDetailDialogVisible"
    />
  </div>
</template>

<style lang="scss" scoped>
.product-widget {
  border-block-end: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  padding-block-end: 1rem;
}
</style>
