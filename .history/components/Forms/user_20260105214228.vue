<template>
  <div>
    <a-modal
      v-model:open="openModal"
      title="Activation du ticket"
      :footer="null"
      width="480px"
      @cancel="() => console.log('fermé')"
    >
    <div cless="text-center">zedlzds</div>
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
            <a-select-option value="ticket"> Carte de recharge </a-select-option>
            <a-select-option value="card"> Carte bancaire </a-select-option>
          </a-select>
        </a-form-item>

        <!-- 🔁 CARTE DE RECHARGE -->
        <template v-if="form.type_carte === 'ticket'">
          <a-form-item label="Code 1">
            <a-input-password v-model:value="form.code_1" />
          </a-form-item>

          <a-form-item label="Code 2 (optionnel)">
            <a-input-password v-model:value="form.code_2" />
          </a-form-item>
        </template>

        <!-- 💳 CARTE BANCAIRE -->
        <template v-if="form.type_carte === 'card'">
          <a-form-item label="Numéro de carte">
            <a-input
              v-model:value="form.card_number"
              placeholder="1234 5678 9012 3456" :maxlength="19"
              @keyup="formatCardNumber"
            />
          </a-form-item>

          <a-row :gutter="12">
            <a-col :span="12">
              <a-form-item label="Date d'expiration">
                <a-input v-model:value="form.card_expiration" placeholder="MM / AA" />
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="CVV">
                <a-input v-model:value="form.card_cvv" placeholder="123" />
              </a-form-item>
            </a-col>
          </a-row>
        </template>

        <!-- CONDITIONS -->
        <a-form-item>
          <a-checkbox v-model:checked="check" @change="() => console.log('check', check)">
            J'accepte la
            <a href="#" target="_blank">politique de confidentialité</a>
          </a-checkbox>
        </a-form-item>

        <!-- ACTION -->
        <a-button :disabled="verifAllGood()" type="primary" block>
          Activer mon ticket
        </a-button>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
const { check, form, openModal, verifAllGood, formatCardNumber } = useFunctions();
</script>

<style scoped></style>
