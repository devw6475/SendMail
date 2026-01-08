<template>
    <div>
        <footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-column">
        <h3>{{t('body.organization_name')}}</h3>
        <p>
          {{t('body.solution')}}
        </p>
      </div>

      <div class="footer-column">
        <h3>{{t('body.links')}}</h3>
        <ul class="footer-links">
          <li><a href="#presentation">{{t('body.first')}}</a></li>
          <li><a href="#advantages">{{t('body.advantage')}}</a></li>
          <li><a href="#how_coice">{{t('body.how_choice')}}</a></li>
          <li><a href="#first_step">{{t('body.first_step')}}</a></li>
          <li><a href="#avis">{{t('body.avis')}}</a></li>
          <li><a href="#faq">{{t('body.faq')}}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>{{t('body.legal')}}</h3>
        <ul class="footer-links">
          <li><a href="#">{{t('body.condition')}}</a></li>
          <li><a href="#">{{t('body.confidentiality')}}</a></li>
          <li><a href="#">{{t('body.know_us')}}</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{t('body.sign')}}</p>
    </div>
  </div>
</footer>

    </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 4rem 0 2rem;
  font-size: 0.95rem;
}

.site-footer .container {
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
}

/* GRID */
.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 2rem;
}

/* COLONNES */
.footer-column h3 {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-column p {
  line-height: 1.6;
  opacity: 0.85;
}

/* LIENS */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  opacity: 0.85;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: #6366f1;
  opacity: 1;
  padding-left: 4px;
}

/* BOTTOM */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.8;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-links a:hover {
    padding-left: 0;
  }
}


</style>