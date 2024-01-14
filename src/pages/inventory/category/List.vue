<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import CreateEditDialog from "@/views/inventory/category/CreateEditDialog.vue"
import DetailDialog from "@/views/inventory/category/DetailDialog.vue"

const categoryData = ref([
  {
    id: 10,
    title: 'Fitness Tracker',
    description: 'Monitor your health and fitness goals with our range of advanced fitness trackers.',
    totalProduct: 1987,
    totalPurchase: 32067,
    totalSale: 32067,
    img: 'http://127.0.0.1:5173/src/assets/images/ecommerce-images/product-10.png',
    status: 'Active',
  },
  {
    id: 11,
    title: 'Smart Home Devices',
    description: 'Transform your home into a smart home with our innovative smart home devices.',
    totalProduct: 2345,
    totalPurchase: 32067,
    totalSale: 32067,
    status: 'Active',
    img: 'http://127.0.0.1:5173/src/assets/images/ecommerce-images/product-11.png',
  },
  {
    id: 12,
    title: 'Audio Speakers',
    description: 'Immerse yourself in rich audio quality with our wide range of speakers.',
    totalProduct: 5678,
    totalPurchase: 32067,
    totalSale: 32067,
    status: 'Active',
    img: 'http://127.0.0.1:5173/src/assets/images/ecommerce-images/product-12.png',
  },
])

const headers = [
  {
    title: 'Category',
    key: 'categoryTitle',
  },
  {
    title: 'Total Products',
    key: 'totalProduct',
  },
  {
    title: 'Total Purchase',
    key: 'totalPurchase',
  },
  {
    title: 'Total Sale',
    key: 'totalSale',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'actions',
    sortable: false,
  },
]

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

const widgetData = ref([
  {
    title: 'Total Categories',
    value: '$5,345.43',
    icon: 'tabler-category-2',
    desc: '5k orders',
    change: 5.7,
  },
  {
    title: 'Total Products',
    value: '$674,347.12',
    icon: 'tabler-box',
    desc: '21k orders',
    change: 12.4,
  },
  {
    title: 'Total Purchase',
    value: '$14,235.12',
    icon: 'tabler-shopping-cart-plus',
    desc: '6k orders',
  },
  {
    title: 'Total Sales',
    value: '$8,345.23',
    icon: 'tabler-truck-loading',
    desc: '150 orders',
    change: -3.5,
  },
])

let selectedItem = null

const itemsPerPage = ref(10)
const page = ref(1)
const searchQuery = ref('')
const isCreateEditDialogVisible = ref(false)
const isDetailDialogVisible = ref(false)

watch(() => isCreateEditDialogVisible.value, newValue => {
  if (!newValue) {
    selectedItem = null
  }
})

const selectItemToEdit = item => {
  selectedItem = { ...item }
  delete selectedItem.img
  isCreateEditDialogVisible.value = !isCreateEditDialogVisible.value
}
</script>

<template>
  <div>
    <!-- 👉 widgets -->
    <VCard class="mb-6">
      <VCardText>
        <VRow>
          <template
            v-for="(data, id) in widgetData"
            :key="id"
          >
            <VCol
              cols="12"
              sm="6"
              md="3"
              class="px-6"
            >
              <div
                class="d-flex justify-space-between"
                :class="$vuetify.display.xs
                  ? 'product-widget'
                  : $vuetify.display.sm
                    ? id < 2 ? 'product-widget' : ''
                    : ''"
              >
                <div class="d-flex flex-column gap-y-1">
                  <div class="text-body-1 font-weight-medium text-capitalize">
                    {{ data.title }}
                  </div>

                  <h4 class="text-h4 my-1">
                    {{ data.value }}
                  </h4>

                  <div class="d-flex">
                    <div class="me-2 text-disabled text-no-wrap">
                      {{ data.desc }}
                    </div>

                    <VChip
                      v-if="data.change"
                      label
                      :color="data.change > 0 ? 'success' : 'error'"
                    >
                      {{ prefixWithPlus(data.change) }}%
                    </VChip>
                  </div>
                </div>

                <VAvatar
                  variant="tonal"
                  rounded
                  size="38"
                >
                  <VIcon
                    :icon="data.icon"
                    size="28"
                  />
                </VAvatar>
              </div>
            </VCol>
            <VDivider
              v-if="$vuetify.display.mdAndUp ? id !== widgetData.length - 1
                : $vuetify.display.smAndUp ? id % 2 === 0
                  : false"
              vertical
              inset
              length="95"
            />
          </template>
        </VRow>
      </VCardText>
    </VCard>
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

      <VCardText>
        <div class="d-flex justify-sm-space-between flex-wrap gap-y-4 gap-x-6 justify-start">
          <VTextField
            v-model="searchQuery"
            placeholder="Search"
            density="compact"
            style="max-inline-size: 200px; min-inline-size: 200px;"
          />

          <div class="d-flex align-center flex-wrap gap-4">
            <AppSelect
              v-model="itemsPerPage"
              :items="[5, 10, 15]"
            />
            <VBtn
              prepend-icon="tabler-plus"
              @click="isCreateEditDialogVisible = !isCreateEditDialogVisible"
            >
              Add Category
            </VBtn>
          </div>
        </div>
      </VCardText>

      <VDivider />

      <div class="category-table">
        <VDataTable
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          :headers="headers"
          :items="categoryData"
          item-value="categoryTitle"
          :search="searchQuery"
          show-select
          class="text-no-wrap"
        >
          <template #item.categoryTitle="{ item }">
            <div class="d-flex gap-x-3">
              <VAvatar
                variant="tonal"
                rounded
                size="38"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  width="38"
                  height="38"
                >
              </VAvatar>
              <div>
                <h6 class="text-h6">
                  {{ item.title }}
                </h6>
                <div class="text-sm text-disabled">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </template>
          <template #item.totalProduct="{ item }">
            <div class="text-h6 text-center">
              {{ (item.totalProduct).toLocaleString() }}
            </div>
          </template>
          <template #item.totalPurchase="{ item }">
            <h6 class="text-h6 text-center">
              {{ (item.totalPurchase).toLocaleString("en-IN", { style: "currency", currency: 'USD' }) }}
            </h6>
          </template>
          <template #item.totalSale="{ item }">
            <h6 class="text-h6 text-center pe-7 ps-0">
              {{ (item.totalSale).toLocaleString("en-IN", { style: "currency", currency: 'USD' }) }}
            </h6>
          </template>
          <template #item.status="{ item }">
            <h6 class="text-h6 text-center pe-7 ps-0">
              {{ item.status }}
            </h6>
          </template>
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
                showing {{ itemsPerPage * (page - 1) + 1 }} to
                {{ Math.min(itemsPerPage * page, categoryData.length) }} of {{ categoryData.length }} entries
              </p>
              <VPagination
                v-model="page"
                :length="Math.ceil(categoryData.length / itemsPerPage)"
                :total-visible="5"
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
        </VDataTable>
      </div>
    </VCard>

    <CreateEditDialog
      v-model:isDialogVisible="isCreateEditDialogVisible"
      :category-data="selectedItem ? selectedItem : undefined"
    />
    <DetailDialog v-model:isDialogVisible="isDetailDialogVisible" />
  </div>
</template>

<style lang="scss">
.ProseMirror-focused {
  border: none;
}

.category-table {
  .v-table {
    th:nth-child(3), th:nth-child(4) {
      .v-data-table-header__content {
        justify-content: end;
      }
    }
  }
}
</style>
