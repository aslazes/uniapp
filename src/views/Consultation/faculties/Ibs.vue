<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Факультет «Международная школа бизнеса и мировой экономики»</h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/ibs.jpg"></td>
                    <td>Миссия - содействовать развитию международного образовательного пространства для подготовки высокопрофессиональных и социально-ответственных специалистов, способных обеспечить инновационный экономический рост и процветание общества в условиях глобализации.</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="imisiceqr" src="../img/ibsqr.jpg"></td>
                </tr>
            </tbody>
        </table>
        </div>
        
        <button @click="nav"><h3>Подача документов</h3></button>
      </div>
        
    </div>

</template>

<script>
export default {
    methods : {
        nav() {
            this.$router.push({name: 'Navigation'})
        }
    }

}
</script>