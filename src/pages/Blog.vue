<template>
  <Layout>
    <div v-for="post in $page.posts.edges" class="card">
      <g-link :to="`blog/${post.node.id}`">
        <span v-html="post.node.title"/>
        <span> by </span>
        <span v-html="post.node.author" />
      </g-link>
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

<page-query>
  query Posts {
    posts: allPost {
      edges {
        node {
          id
          title
          author
        }
      }
    }
  }

</page-query>
