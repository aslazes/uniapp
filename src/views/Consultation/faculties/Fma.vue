<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Факультет Маркетинга </h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/fma.jpg"></td>
                    <td>Миссия - быть лидером в области подготовки высококвалифицированных специалистов сфер маркетинга, логистики, рекламы и дизайна</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="imisiceqr" src="../img/fmaqr.jpg"></td>
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
