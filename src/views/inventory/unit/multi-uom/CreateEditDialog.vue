<script setup>
import { VForm } from 'vuetify/components/VForm'

const props = defineProps({
  defaultUomArray: {
    type: Array,
    required: false,
    default: () => (['']),
  },
  multiUomData: {
    type: Object,
    required: false,
    default: () => ({
      name: "",
      code: "",
      description: "",
      defaultUom: "",
      conversion: [
        {
          defaultUomQty: 0,
          alternateUom: '',
          alternateUomQty: 0,
          status: 'Active',
        },
      ],
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

const multiUomData = ref(structuredClone(toRaw(props.multiUomData)))

watch(props, () => {
  multiUomData.value = structuredClone(toRaw(props.multiUomData))
})

const onFormReset = () => {
  multiUomData.value = structuredClone(toRaw(props.multiUomData))
  refVForm.value?.reset()
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}

const refVForm = ref()
const statusArray = ['Active', 'Inactive']

const deleteItem = index => {
  multiUomData.value.conversion.splice(index, 1)
}

const addNewRow = () => {
  multiUomData.value.conversion.push({
    defaultUomQty: 0,
    alternateUom: '',
    alternateUomQty: 0,
    status: 'Active',
  })
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 800"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-8 pa-5">
      <VCardItem class="text-center">
        <VCardTitle class="text-h3 mb-3">
          Create Multi UOM
        </VCardTitle>
        <p class="mb-0">
          This Multi UOM Will Be Used In The Product
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
                v-model="multiUomData.name"
                label="Name"
                :rules="[requiredValidator]"
                placeholder="Kilogram"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                v-model="multiUomData.code"
                label="Code"
                :rules="[requiredValidator]"
                placeholder="KG"
              />
            </VCol>
            <VCol cols="12">
              <p class="mb-2">
                Description
              </p>
              <AppTextarea
                v-model="multiUomData.description"
                placeholder="Enter Description"
                rows="2"
                row-height="20"
              />
            </VCol>

            <VCol cols="12">
              <AppSelect
                v-model="multiUomData.defaultUom"
                :rules="[requiredValidator]"
                placeholder="Select UOM"
                label="Select Default UOM"
                :items="defaultUomArray"
              />
            </VCol>
            <VCol cols="12">
              <VRow>
                <VCol cols="3">
                  Default Qty
                </VCol>
                <VCol cols="2">
                  Alternate Qty
                </VCol>
                <VCol cols="3">
                  Select UOM
                </VCol>
                <VCol cols="3">
                  Status
                </VCol>
                <VCol cols="1" />
              </VRow>
              <VRow
                v-for="(conversion,index) in multiUomData.conversion"
                :key="index"
                class="mt-1"
              >
                <VCol cols="3">
                  <AppTextField
                    v-model="conversion.defaultUomQty"
                    :rules="[requiredValidator]"
                    placeholder="0"
                  />
                </VCol>
                <VCol cols="2">
                  <AppTextField
                    v-model="conversion.alternateUomQty"
                    :rules="[requiredValidator]"
                    placeholder="KG"
                  />
                </VCol>
                <VCol cols="3">
                  <AppSelect
                    v-model="conversion.alternateUom"
                    :rules="[requiredValidator]"
                    placeholder="Select UOM"
                    :items="defaultUomArray"
                  />
                </VCol>
                <VCol cols="3">
                  <AppSelect
                    v-model="conversion.status"
                    :rules="[requiredValidator]"
                    placeholder="Status"
                    :items="statusArray"
                  />
                </VCol>
                <VCol cols="1">
                  <IconBtn v-if="multiUomData.conversion.length>1">
                    <VIcon
                      color="error"
                      icon="tabler-trash"
                      @click="deleteItem(index)"
                    />
                  </IconBtn>
                </VCol>
              </VRow>
              <VBtn
                color="primary"
                class="mt-3"
                @click="addNewRow"
              >
                Add More
              </VBtn>
            </VCol>
            <VCol cols="12">
              <AppSelect
                v-model="multiUomData.status"
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
