<template>
  <div id="avis">
    <DetailBigTitle
      first="body.avis"
      presentation="body.avis_text"
      adapt-class="section-title-4"
    />
    <section class="reviews-section">
      <!-- REVIEWS -->
      <div class="reviews-wrapper">
        <a-row :gutter="24" :wrap="false" class="reviews-row">
          <a-col
            v-for="(review, index) in reviews"
            :key="index"
            :xs="22"
            :sm="14"
            :md="8"
            :lg="6"
            class="review-col"
          >
            <a-card hoverable class="review-card">
              <h4>{{ review.name }}</h4>

              <!-- ⭐ STARS CSS -->
              <div class="stars">
                <span
                  v-for="i in 5"
                  :key="i"
                  :class="{
                    filled: i <= Math.floor(review.stars),
                    half: i === Math.ceil(review.stars) && review.stars % 1 !== 0,
                  }"
                  >★</span
                >
              </div>

              <p class="comment">“{{ review.comment }}”</p>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <!-- CTA -->
    <div class="cta">
     <!-- <a-button type="primary" size="large" shape="round"> Laissez un avis  </a-button> -->
    </div> 
    </section>
  </div>
</template>

<script setup lang="ts">
const reviews = [
  {
    name: "Marie D.",
    stars: 4,
    comment:
      "Activate myCard m'a sauvé la vie plusieurs fois ! J'ai évité d'utiliser des tickets déjà expirés grâce à leur Activation rapide. Le service est vraiment indispensable.",
  },
  {
    name: "Jean P.",
    stars: 4.5,
    comment:
      "En tant que revendeur, Activate myCard est un outil indispensable. Je peux activer instantanément la validité des tickets, ce qui m'évite des pertes financières.",
  },
  {
    name: "Amina S.",
    stars: 5,
    comment:
      "L’interface est tellement simple à utiliser ! En tant que personne âgée, j’appréhende souvent les nouvelles technologies, mais Activate myCard est vraiment intuitif.",
  },
  {
    name: "Sarah K",
    stars: 4,
    comment: "Perfect! Never had a problem with verified tickets.",
  },
  {
    name: "Sophie M.",
    stars: 5,
    comment:
      "Rapide et efficace, j'utilise CheckCoupon avant chaque recharge maintenant !",
  },
  {
    name: "Thomas L.",
    stars: 4,
    comment:
      "Service fiable, j’ai vérifié 5 tickets sans problème. Un peu lent parfois. ",
  },
  {
    name: "Michael B.",
    stars: 2,
    comment: "Works okay but sometimes slow to respond.",
  },
  {
    name: "Marc T.",
    stars: 3,
    comment: "Correct, mais l'interface pourrait être plus moderne.",
  },
  {
    name: "Jonh D.",
    stars: 4,
    comment: "Saves me from scams! Always check my tickets here first.",
  },
  {
    name: "Emma W.",
    stars: 4.5,
    comment: "Reliable service for all my recharge needs.",
  },
  {
    name: "David L.",
    stars: 5,
    comment: "Best coupon checker I've used. Fast and accurate!",
  },
];
</script>

<style scoped>
/* SCROLL CONTAINER */
.reviews-wrapper {
  overflow-x: auto;
  padding-bottom: 20px;
}

.reviews-row {
  flex-wrap: nowrap;
}

/* CARD */
.review-col {
  min-width: 320px;
}

.review-card {
  height: 100%;
  min-height: 260px;

  display: flex;
  flex-direction: column;
  justify-content: center; /* centre verticalement */
  align-items: center; /* centre horizontalement */
  text-align: center;

  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.35s ease;
}

.review-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

/* CONTENT */
.review-card h4 {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 8px;
  color: #2c3e50;
}

.stars {
  font-size: 18px;
  margin-bottom: 12px;
}

.comment {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
  margin-top: auto;
}

/* CTA */
.cta {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
}

.cta .ant-btn-primary {
  background: #4a6bff;
  border-color: #4a6bff;
}

.stars {
  font-size: 18px;
  color: #d1d5db; /* gris clair pour étoiles vides */
  margin-bottom: 12px;
}

.stars span.filled {
  color: #fbbf24; /* jaune pour étoiles pleines */
}

.stars span.half {
  position: relative;
  color: #fbbf24; /* moitié jaune */
}


@media (max-width: 768px) {
  .comment {
    font-size: 17px;
    color: #6b7280;
    line-height: 1.6;
    margin-top: auto;
  }

}
</style>
