<template>
  <Layout>
    <div v-for="cpost in $page.post.edges" class="card">
      <g-link :to="cpost.node.path">
        <span v-html="cpost.node.title"/>
        <span> by </span>
        <span v-html="cpost.node.author" />
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

<!---page-query>
  query Post {
    post: allPost {
      edges {
        node {
          id
          title
          author
          path
        }
      }
    }
  }

</page-query--->
