<template>
  <Layout :title="$page.post.title">
    <h1>{{$page.post.title}}</h1>
    <p>{{$page.post.content}}</p>
    <g-image v-if="hasImage" :src="this.$page.post.image"/>
  </Layout>
</template>

<page-query>
query post ($id: String!) {
  post: post (id: $id) {
    id
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
  },
  computed: {
    hasImage() {
      return this.$page.post.image != null;
    }
  }
}
</script>

<style media="screen">
  .g-image {
    width: 100%;
  }
</style>
