
<template>
  <VRow>
    <!-- SECTION Customer Details -->
    <VCol cols="12">
      <VCard>
        <VCardText class="text-center pt-15">
          <VAvatar
            rounded
            :size="100"
          >
            <VImg
              v-if="true"
              src="/src/assets/images/avatars/avatar-15.png"
            />
            <span
              v-else
              class="text-5xl font-weight-medium"
            >
              {{ avatarText('noimage') }}
            </span>
          </VAvatar>
          <!-- 👉 Customer fullName -->
          <h4 class="text-h4  mt-4">
            Name
          </h4>
          <span class="text-sm">UOM ID #1223</span>

          <div class="d-flex justify-center gap-x-5 mt-6">
            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-3"
              >
                <VIcon icon="tabler-shopping-cart" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <span class="text-body-1 font-weight-medium">33453</span>
                <span class="text-body-2">Multi Uom</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-3"
              >
                <VIcon icon="tabler-currency-dollar" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <span class="text-body-1 font-weight-medium">235463</span>
                <span class="text-body-2">Items</span>
              </div>
            </div>
          </div>
        </VCardText>

        <!-- 👉 Customer Details -->
        <VCardText>
          <VDivider class="my-4" />
          <div class="text-disabled text-uppercase text-sm">
            Details
          </div>

          <VList class="card-list mt-2">
            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Username:</span>
                <span>
                  sdfrefd
                </span>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Billing Email:</span>
                <span>
                  5y5gsrg54
                </span>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Status:</span>
                <VChip
                  label
                  color="success"
                >
                  Active
                </VChip>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Contact:</span>
                <span>
                  34563434
                </span>
              </div>
            </VListItem>

            <VListItem>
              <div class="text-body-1">
                <span class="font-weight-medium me-2">Country:</span>
                <span>
                  pakistan
                </span>
              </div>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.75rem;
}

.current-plan {
  background: linear-gradient(45deg, rgb(var(--v-theme-primary)) 0%, #9E95F5 100%);
  color: #fff;
}
</style>
