<template>
<div v-if="page" id="content" class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{page.content}}</p>
</div>
</template>
<script>
export default{
    props:['index'],
    inject:['$pages'],
      created(){
        this.page=this.$pages.getSinglePage(this.$route.params.index)
        console.log(this.page);
        /* this.$watch(()=>this.$route.params,(newParams,prevParams)=>{
          this.page=this.$pages.getSinglePage(newParams.index)
        }) */
      },
      watch:{
        index(newIndex,oldIndex){
          this.page=this.$pages.getSinglePage(newIndex)
        }
      },
      data(){
        return{
          page:null
        };
      }
    }
</script>
