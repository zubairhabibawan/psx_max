<script setup>
import { VForm } from 'vuetify/components/VForm'

const props = defineProps({
  uomData: {
    type: Object,
    required: false,
    default: () =>({
      name: "",
      code: "",
      description: "",
      status: "Active",
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

let uomData = ref(structuredClone(toRaw(props.uomData)))

watch(props, () => {
  uomData.value = structuredClone(toRaw(props.uomData))
})

const onFormReset = () => {
  uomData.value = structuredClone(toRaw(props.uomData))
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
          Create Default UOM
        </VCardTitle>
        <p class="mb-0">
          This UOM Will Be Used In The Product
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
                v-model="uomData.name"
                label="Name"
                :rules="[requiredValidator]"
                placeholder="Kilogram"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                v-model="uomData.code"
                label="Code"
                :rules="[requiredValidator]"
                placeholder="KG"
              />
            </VCol>
            <VCol
              cols="12"
              class="mb-0"
            >
              <p class="mb-2">
                Description
              </p>
              <AppTextarea
                v-model="uomData.description"
                placeholder="Enter Description"
                rows="2"
                row-height="20"
              />
            </VCol>

            <VCol cols="12">
              <AppSelect
                v-model="uomData.status"
                :rules="[requiredValidator]"
                placeholder="Select Status"
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
                  Save
                </VBtn>
                <VBtn
                  color="error"
                  variant="tonal"
                  @click="onFormReset"
                >
                  Cancel
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
