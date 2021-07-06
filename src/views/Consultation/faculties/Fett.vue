<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Факультет экономики торговли и товароведения </h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="fett" src="../img/fett.jpg"></td>
                    <td>Миссия - подготовка лидеров, обеспечивающих устойчивое инновационное развитие сферы обращения товаров и услуг</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="fettqr" src="../img/fettqr.jpg"></td>
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