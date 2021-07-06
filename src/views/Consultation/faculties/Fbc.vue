<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Факультет бизнеса «Капитаны» </h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/fbc.jpg"></td>
                    <td>Миссия - подготовка предпринимателей и управленцев, а также создание сообщества молодежи с активной и социально-ответственной жизненной позицией.</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="imisiceqr" src="../img/fbcqr.jpg"></td>
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