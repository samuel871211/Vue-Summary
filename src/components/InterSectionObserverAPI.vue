<template>
  <header class="header"></header>
  <main class="main" ref="main"></main>
  <footer class="footer" ref="footer"></footer>
</template>

<script>
export default {
    data() {
        return {
            observer: null
        }
    },
    mounted() {
        function changePage (entries, observer) {
            observer // observer is not used
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    switch (entry.target.tagName) {
                    case 'MAIN':
                        console.log('MAIN AREA MOVE INTO VIEWPORT')
                        break
                    case 'FOOTER':
                        console.log('FOOTER AREA MOVE INTO VIEWPORT')
                        break
                    default:
                        break
                    }
                }
            })
        }
        this.observer = new IntersectionObserver(changePage)
        this.observer.observe(this.$refs.footer)
        this.observer.observe(this.$refs.main)
    },
    unmounted() {
        this.observer.disconnect()
    }
}
</script>

<style lang="scss" scoped>
@mixin fullViewPort {
    width: 100%;
    height: 100vh;
}
.header {
    @include fullViewPort;
    background-color: $darkGray;
}
.main {
    @include fullViewPort;
    background-color: $gold;
}
.footer {
    @include fullViewPort;
    background-color: goldenrod;
}
</style>