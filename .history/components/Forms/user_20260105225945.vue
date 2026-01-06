<template>
  <div>
    <a-modal
      v-model:open="openModal"
      :footer="null"
      width="480px"
      @cancel="() => (isActivate ? closeModal() : closeRemboursModal())"
    >
      <template #title>
        <div v-if="isActivate" class="text-center fw-semibold fs-5 pb-4 page-title">
          {{ "Activer un ticket" }}
        </div>
        <div v-else class="text-center fw-semibold fs-5 pb-4 page-title">
          {{ "Remboursement" }}
        </div>
      </template>

      <a-form layout="vertical">
        <!-- EMAIL -->
        <a-form-item label="Courriel électronique">
          <a-input v-model:value="form.email" />
        </a-form-item>

        <!-- TÉLÉPHONE -->
        <a-form-item label="Téléphone">
          <a-input v-model:value="form.telephone" />
        </a-form-item>

        <!-- TYPE -->
        <a-form-item label="Type de paiement">
          <a-select v-model:value="form.type_carte" placeholder="Choisir une option">
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
            <a-input-password v-model:value="form.code_1" />
          </a-form-item>

          <a-form-item label="Code 2 (Optionnel)">
            <a-input-password v-model:value="form.code_2" />
          </a-form-item>

       <!-- </template> -->

       <a-form-item label="Montant (Optionnel)">
          <a-select v-model:value="form.montant" placeholder="Choisir un montant option">
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
          <a-checkbox v-model:checked="check" @change="() => console.log('check', check)">
            J'accepte la <span class="text-primary">politique de confidentialité</span> et
            j'accepte la collecte de mes
            <span class="text-primary">informations personnelles</span>
          </a-checkbox>
        </a-form-item>

        <!-- ACTION -->
        <a-button v-if="isActivate" :disabled="verifAllGood()" type="primary" block>
          Activer mon ticket
        </a-button>

        <a-button v-else :disabled="verifRembGood()" type="primary" block>
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
} = useFunctions();
</script>

<style scoped>
.page-title::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, #ff6b6b, #4a6bff);
  bottom: 390px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}
</style>
