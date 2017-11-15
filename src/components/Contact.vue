<template>
  <div class="page page-contact">
      <h4>{{ $t('contact_t1') }}</h4>
      <iframe width="100%" height="300" frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCj2Y6ojAN37QwNEKWw5QWVErxsHLZLkSM&q=Litlingua" allowfullscreen>
      </iframe>
      <p>{{ $t('contact_l1') }}</p>
      <p>{{ $t('contact_l2') }}</p>
      <p>{{ $t('contact_l3') }}</p>
      <p>{{ $t('contact_l4') }}</p>
      <p>{{ $t('contact_l5') }} <a href="mailto:info@litlingua.nl">info@litlingua.nl</a></p>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
<style scoped>
    p {
        padding: 0.25rem 0;
    }
    iframe {
        margin-bottom: 0.5rem;
        max-width: 600px;
    }
</style>
