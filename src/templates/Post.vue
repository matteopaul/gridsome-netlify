<template>
  <Layout :title="$page.post.title">
    <h1>test</h1>
  </Layout>
</template>

<page-query>
query post ($id: String!) {
  post: post (id: $id) {
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
