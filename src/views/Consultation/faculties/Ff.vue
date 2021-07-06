<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Финансовый факультет </h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/ff.jpg"></td>
                    <td>Миссия - подготовка финансистов, конкурентоспособных на российском и международном рынках труда, обеспечивающих высокую инвестиционную привлекательность Факультета и Университета.</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="ffqr" src="../img/ffqr.jpg"></td>
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