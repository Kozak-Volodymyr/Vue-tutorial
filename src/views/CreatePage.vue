<template>
    <div class="container mb-3">
        <form action="">
            <div class="mb-3">
                <label for="" class="form-label">
                    Page Title
                </label>
                <input type="text" class="form-control"
                v-model="pageTitle"/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    Content
                </label>
                
                <textarea v-model="content" type="text" class="form-control" rows="5"></textarea>
            </div>
        <div class="col">
       <div class="mb-3">
                <label for="" class="form-label">
                    Link Text
                </label>
                <input  v-model="linkText" type="text" class="form-control"
                />
            </div>
        

            <div class=" row mb-3">
                <div class="form-check">
                
                <input type="checkbox" class="form-check-input" v-model="published" />
                <label  class="form-check-label" for="gridCheck1">
                   Published
                </label>
                
            </div>
            </div>
            </div>
        
                <div class="mb-3">
                    <button class="btn btn-primary"
                    :disabled="isFormInvalid"
                    @click.prevent="submitForm()">
                        Create Page
                    </button>
                </div>
           
            </form>
    </div>
</template>
<script setup>
import {inject,ref,computed,watch} from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter()
const bus=inject('$bus')
const pages=inject('$pages')
let pageTitle=ref('')
let content=ref('')
let linkText=ref('')
let published=ref(true)

function submitForm(){
            if(!pageTitle || !content || !linkText){
                alert();
                return
            }
            let newPage={
                pageTitle:pageTitle.value,
                content:content.value,
                link:{
                text:linkText.value,
                
                },
                published:published.value
            }
            pages.addPage(newPage)
            bus.$emit('page-created',newPage)
            router.push({path:'/pages'})
            
        }
const isFormInvalid=computed(()=> !pageTitle || !content || !linkText)
watch(pageTitle,(newTitle,oldTitle)=>{
            if(linkText.value===oldTitle){
                linkText.value=newTitle
            }
        })
</script>
