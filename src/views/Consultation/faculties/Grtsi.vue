<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Факультет гостинично-ресторанной, туристической и спортивной индустрии</h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/grtsi.jpg"></td>
                    <td>Миссия - подготовка конкурентоспособных профессионалов гостиничной, ресторанной, туристической и спортивной индустрии, соответствующих по своим знаниям, навыкам и компетенциям самым высоким международным стандартам.</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="imisiceqr" src="../img/grtsiqr.jpg"></td>
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