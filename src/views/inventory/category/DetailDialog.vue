<script setup>
import InfoPanel from './InfoPanel.vue'
import OverViewPanel from './OverViewPanel.vue'
import ItemsPanel from './ItemsPanel.vue'
import PurchasePanel from "@/views/inventory/category/PurchasePanel.vue"
import SalesPanel from "@/views/inventory/category/SalesPanel.vue"

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'submit',
  'update:isDialogVisible',
])

const userTab = ref(null)

const tabs = [
  { title: 'Overview' },
  { title: 'Items' },
  { title: 'Purchase' },
  { title: 'Sale' },
]

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 1500"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />
    <VCard class="pa-sm-8 pa-5">
      <VCardText>
        <div>
          <VRow>
            <VCol
              cols="12"
              md="5"
              lg="4"
            >
              <InfoPanel />
            </VCol>
            <VCol
              cols="12"
              md="7"
              lg="8"
            >
              <VTabs
                v-model="userTab"
                class="v-tabs-pill mb-3 disable-tab-transition"
              >
                <VTab
                  v-for="tab in tabs"
                  :key="tab.title"
                >
                  <span>{{ tab.title }}</span>
                </VTab>
              </VTabs>
              <VWindow
                v-model="userTab"
                class="disable-tab-transition"
                :touch="false"
              >
                <VWindowItem>
                  <OverViewPanel />
                </VWindowItem>
                <VWindowItem>
                  <ItemsPanel />
                </VWindowItem>
                <VWindowItem>
                  <PurchasePanel />
                </VWindowItem>
                <VWindowItem>
                  <SalesPanel />
                </VWindowItem>
              </VWindow>
            </VCol>
          </VRow>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
