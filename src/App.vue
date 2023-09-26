<template>
    <navbar
></navbar>
<router-view></router-view>
<!-- <page-viewer
v-if="pages.length>0" 
:page-title="pages[activePage].link.text" 
:page-content="pages[activePage].link.url">
</page-viewer> -->
<!-- <create-page
    @page-created="pageCreated">
</create-page> -->
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
    components:{
        Navbar,
    },
    methods:{
        
        pageCreated(obj){
            this.pages.push(obj)
        }
    }
}
</script>