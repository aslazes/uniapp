<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Факультет дистанцинного обучения </h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/fdo.jpg"></td>
                    <td>Миссия - образование, полученное на ФДО, позволяет создавать будущее во благо России, творить то, что сегодня кажется невозможным, а завтра станет необходимым.</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="imisiceqr" src="../img/fdoqr.jpg"></td>
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