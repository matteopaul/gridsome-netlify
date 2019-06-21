<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: post (id: $id) {
    title
    content
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
