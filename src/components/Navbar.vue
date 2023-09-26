<template>
<nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar','navbar-expand-lg']">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
                <navbar-link  v-for="(page,index) in publishedPages" class="nav-item" :key="index"
                 :page="page" 
                 :index="index">
                </navbar-link>
                <li>
        <router-link
        to="/pages"
                aria-current="page" class="nav-link" 
                :class="activeClasses"
                >
                Page
            </router-link>
        </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" 
          @click.prevent="changeTheme()">Toggle Navbar</button>
        </form>
    </div>
  </nav>
</template>
<script>
import NavbarLink from './NavbarLink.vue'
export default
{
    components:{
        NavbarLink
    },
    inject:['$pages','$bus'],
    computed:{
        publishedPages(){
            return this.pages.filter(p=>p.published);
        }
    },

    data(){
      return {
        theme:'light',
        pages:[]
      }
    },
    created(){
        this.getTheme()
        this.pages=this.$pages.getAllPages();
        this.$bus.$on('page-updated',()=>{
          this.pages=[...this.$pages.getAllPages()]
        })
        this.$bus.$on('page-created',()=>{
          this.pages=[...this.$pages.getAllPages()]
        }) 
        this.$bus.$on('page-deleted',()=>{
          this.pages=[...this.$pages.getAllPages()]
        })
    },
   
      methods:{
      changeTheme(){
        switch(this.theme){
          case 'light':
          this.theme='dark'
            break;
          case 'dark':
          this.theme='light'
            break;
            default:
                this.storeTheme()
        }},
        storeTheme(){
        localStorage.setItem('theme',this.theme)
    },
    getTheme(){
        let theme=localStorage.getItem('theme')
        if(theme){
            this.theme=theme
        }
    }
      }
    }


</script>