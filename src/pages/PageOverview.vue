<template>
  <Layout>
    <div v-for="cpage in $page.page.edges" class="card">
      <g-link :to="cpage.node.path">
        <span v-html="cpage.node.title"/>
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
  query PageStructure {
    page: allPageStructure {
      edges {
        node {
          title
          imageContent {
            src
          }
        }
      }
    }
  }

fragment imageContent on PageStructureImageContent {
  src
}

fragment textContent on PageStructureTextContent {
  content
}
</page-query--->
