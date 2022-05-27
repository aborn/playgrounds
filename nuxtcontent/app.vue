<template>
    <main class="container">
        <md-editor v-model="text" :theme="theme" :toolbarsExclude="toolbarsExclude"
            style="background-color: var(--md-background-color);height:480px;" @onChange="changeAction"
            @onSave="saveAction" />
    </main>
</template>

<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const route = useRoute()
const colorMode = useColorMode()
const text = ref('')
const id = route.params.id
const toolbarsExclude = ['github']

// three values: system dark light, TODO: md-editor not support 'system'.
const theme = colorMode.value

const changeAction = (e) => {
    // console.log('ch')
}

const saveAction = (text) => {
    console.log('--- now save event triggled. ---')
    console.log(text)
}

/**
const permalink = '/articles/' + id
let articles
if (id.length > 0) {
    articles = await queryContent().where({ permalink: { $eq: permalink } }).findOne()
    console.log(articles);
    console.log(useUnwrap(articles))
}
 */

</script>
