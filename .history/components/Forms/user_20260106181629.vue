<template>
  <div>
    <a-modal
      v-model:open="openModal"
      :footer="null"
      width="480px"
      @cancel="() => (isActivate ? closeModal() : closeRemboursModal())"
    >
      <template #title>
        <div v-if="isActivate" class="text-center fw-semibold fs-5 pb-4">
          {{ "Activer un ticket" }}
        </div>
        <div v-else class="text-center fw-semibold fs-5 pb-4">
          {{ "Remboursement" }}
        </div>
      </template>

      <a-form layout="vertical">
        <!-- PSEUDO -->
        <a-form-item>
          <template #label> Pseudo <span style="color: red">*</span> </template>
          <a-input size="large" v-model:value="form.pseudo" class="input-mobile" />
        </a-form-item>

        <!-- EMAIL -->
        <a-form-item>
            <template #label> Courriel électronique <span style="color: red">*</span> </template>
          <a-input size="large" v-model:value="form.email" />
        </a-form-item>

        <!-- TÉLÉPHONE -->
        <a-form-item>
            <template #label> Téléphone <span style="color: red">*</span> </template>
          <a-input size="large" v-model:value="form.telephone" />
        </a-form-item>

        <!-- TYPE -->
        <a-form-item>
            <template #label> Type de paiement <span style="color: red">*</span> </template>
          <a-select
            size="large"
            v-model:value="form.type_carte"
            placeholder="Choisir une option"
          >
            <a-select-option
              v-for="type in CARD_TYPES"
              :key="type.value"
              :value="type.value"
            >
              {{ type.label }}
            </a-select-option>
            <!--  <a-select-option value="card"> Carte bancaire </a-select-option> -->
          </a-select>
        </a-form-item>

        <!-- 🔁 CARTE DE RECHARGE <template v-if="form.type_carte === 'ticket'"> -->
        <a-form-item label="Code 1">
          <a-input-password size="large" v-model:value="form.code_1" />
        </a-form-item>

        <a-form-item label="Code 2 (Optionnel)">
          <a-input-password size="large" v-model:value="form.code_2" />
        </a-form-item>

        <!-- </template> -->

        <a-form-item label="Montant (Optionnel)">
          <a-select
            size="large"
            v-model:value="form.montant"
            placeholder="Choisir un montant option"
          >
            <a-select-option
              v-for="amount in AMOUNT"
              :key="amount.value"
              :value="amount.value"
            >
              {{ amount.label }}
            </a-select-option>
            <!--  <a-select-option value="card"> Carte bancaire </a-select-option> -->
          </a-select>
        </a-form-item>

        <!-- 💳 CARTE BANCAIRE -->
        <template v-if="form.type_carte === 'card'">
          <a-form-item label="Numéro de carte">
            <a-input
              v-model:value="form.card_number"
              placeholder="1234 5678 9012 3456"
              :maxlength="19"
              @keypress=" (e: any) => !/[0-9]/.test(e.key) && e.preventDefault()"
              @keyup="formatCardNumber"
            />
          </a-form-item>

          <a-row :gutter="12">
            <a-col :span="12">
              <a-form-item label="Date d'expiration">
                <a-input
                  v-model:value="form.card_expiration"
                  :maxlength="9"
                  placeholder="MM / AA"
                  @keypress=" (e: any) => !/[0-9]/.test(e.key) && e.preventDefault()"
                  @keyup="formatExpiry"
                />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="CVV">
                <a-input
                  v-model:value="form.card_cvv"
                  placeholder="123"
                  :maxlength="3"
                  @keypress=" (e: any) => !/[0-9]/.test(e.key) && e.preventDefault()"
                  @keyup="formatCVV"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </template>

        <!-- CONDITIONS -->
        <a-form-item>
          <a-checkbox
            style="font-size: 16px"
            v-model:checked="check"
            @change="() => console.log('check', check)"
          >
            J'accepte la <span class="text-primary">politique de confidentialité</span> et
            j'accepte la collecte de mes
            <span class="text-primary">informations personnelles</span>
          </a-checkbox>
        </a-form-item>

        <!-- ACTION -->
        <a-button
          size="large"
          v-if="isActivate"
          @click="submitForm"
          :disabled="verifAllGood()"
          type="primary"
          block
        >
          Activer mon ticket
        </a-button>

        <a-button size="large" v-else :disabled="verifRembGood()" type="primary" block>
          Lancer Remboursement
        </a-button>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { AMOUNT, CARD_TYPES } from "~/core/constant";

const {
  check,
  form,
  isActivate,
  isRembours,
  openModal,
  closeRemboursModal,
  closeModal,
  formatExpiry,
  verifAllGood,
  verifRembGood,
  formatCVV,
  formatCardNumber,
  submitForm,
} = useFunctions();
</script>

<style scoped>
.adjustHeight {
  font-size: 200px;
}

/* Mobile (≤ 768px) */
@media (max-width: 768px) {
  :deep(.ant-form-item-label label) {
    font-size: 16px;
  }
}
</style>
