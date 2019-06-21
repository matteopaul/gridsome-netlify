<template>
  <Layout :title="$page.post.title">
    <h1>Hallo</h1>
    
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: post(id: $id) {
    title
    content
    image
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
