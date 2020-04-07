<template>
    <div class="inventory">
        <div class="text-primary">
            <h1>Inventory</h1>
            <img class="inventory-item" v-for="item in items" :key="item.name" :src="item.image" :alt="item.name" :title="item.name">
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            items() {
                return this.$root.$data.items
            }
        }
    }
</script>

<style>
    .inventory-item {
        width: 30%;
        height: 30%;
        padding: 5px;
    }
</style>