<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Факультет Менеджмента </h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/fm.jpg"></td>
                    <td>Миссия - подготовка управленцев на уровне мировых стандартов, конкурентоспособных в глобальной экономике, способных эффективно управлять функциональными, организационными и социально-трудовыми процессами.</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="fmqr" src="../img/fmqr.jpg"></td>
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

