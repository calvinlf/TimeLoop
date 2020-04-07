<template>
    <div class="settings">
        <div class="row bg-light">
            <div>
                <inventory></inventory>
            </div>
            <div>
                <play></play>
            </div>
            <div>
                <save></save>
            </div>
        </div>
    </div>
</template>

<script>
    import play from './Play'
    import inventory from '../components/Inventory'
    import save from '../components/Save'
    export default {
        components: {
            play,
            inventory,
            save
        }
    }
</script>

<style>
    /*.column {*/
    /*    float: left;*/
    /*    width: 25%;*/
    /*}*/

    /*.column-center {*/
    /*    float: left;*/
    /*    width: 50%;*/
    /*}*/

    .row {
        display: grid;
        grid: 100% / 25% 50% 25%;
        grid-gap: 0;
        padding: 0;
        margin: 0;
    }
</style>