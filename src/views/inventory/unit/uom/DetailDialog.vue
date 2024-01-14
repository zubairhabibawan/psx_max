<script setup>
import InfoPanel from './InfoPanel.vue'
import RecentUsePanel from './RecentUsePanel.vue'

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
              <RecentUsePanel />
            </VCol>
          </VRow>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
