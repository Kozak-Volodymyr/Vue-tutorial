<template>
    <li>
        <router-link
        :to="`/${index}`"
                aria-current="page" class="nav-link" 
                :class="activeClasses"
                active-class="active emphasize">
                {{page.link.text}}
            </router-link>
        </li>
</template>
<script>
export default {
    props:['page','index']
}
</script>
