<template>
  <Layout>
    <div v-for="post in $page.posts.edges">
      {{post.node.title}}
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'blog-overview'
  }
}
</script>
