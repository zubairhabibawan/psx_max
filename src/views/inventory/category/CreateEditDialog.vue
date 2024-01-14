<script setup>
import { VForm } from 'vuetify/components/VForm'

const props = defineProps({
  categoryData: {
    type: Object,
    required: false,
    default: () => ({
      id: 0,
      title: '',
      description: '',
      img: '',
      status: 'Active',
    }),
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'submit',
  'update:isDialogVisible',
])

let categoryData = ref(structuredClone(toRaw(props.categoryData)))

watch(props, () => {
  categoryData.value = structuredClone(toRaw(props.categoryData))
})

const onFormReset = () => {
  categoryData.value = structuredClone(toRaw(props.categoryData))
  refVForm.value?.reset()
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}

const refVForm = ref()
const statusArray = ['Active', 'Inactive']
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 677"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-8 pa-5">
      <VCardItem class="text-center">
        <VCardTitle class="text-h3 mb-3">
          Add Category
        </VCardTitle>
        <p class="mb-0">
          This Category Will Be Used In The Product
        </p>
      </VCardItem>

      <VCardText>
        <!-- 👉 Form -->
        <VForm
          ref="refVForm"
          @submit.prevent=""
        >
          <VRow>
            <VCol cols="12">
              <AppTextField
                v-model="categoryData.title"
                label="Title"
                :rules="[requiredValidator]"
                placeholder="Fashion"
              />
            </VCol>

            <VCol cols="12">
              <VLabel>
                <span class="text-sm text-high-emphasis mb-1">Attachment</span>
              </VLabel>
              <VFileInput
                v-model="categoryData.img"
                prepend-icon=""
                density="compact"
                :rules="[requiredValidator]"
                placeholder="No file chosen"
                clearable
              >
                <template #prepend-inner>
                  <div class="text-no-wrap pe-2 cursor-pointer">
                    Choose Image
                  </div>
                  <VDivider vertical />
                </template>
              </VFileInput>
            </VCol>

            <VCol
              cols="12"
              class="mb-0"
            >
              <p class="mb-2">
                Description
              </p>
              <AppTextarea
                v-model="categoryData.description"
                placeholder="Enter Description"
                rows="2"
                row-height="20"
              />
            </VCol>

            <VCol cols="12">
              <AppSelect
                v-model="categoryData.status"
                :rules="[requiredValidator]"
                placeholder="Select Category Status"
                label="Status"
                :items="statusArray"
              />
            </VCol>

            <VCol cols="12">
              <div class="d-flex justify-start">
                <VBtn
                  type="submit"
                  color="primary"
                  class="me-4"
                >
                  Add
                </VBtn>
                <VBtn
                  color="error"
                  variant="tonal"
                  @click="onFormReset"
                >
                  Discard
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
