<template>
    <div class="container">
        <div class="nav">
                <div class="header">
        <h2>Институт математики, информационных систем и цифровой экономики </h2>
    </div>
        <div class ="container3">
            <table class="it">
            <tbody>
                <tr>
                    <td rowspan="2"><img alt="imisice" src="../img/imisice.jpg"></td>
                    <td>Миссия - подготовка высококвалифицированных кадров, обладающих фундаментальными знаниями в сфере математического моделирования и анализа экономических систем.</td>
                    
                </tr>
                <tr>
                    <td><h4>Подробнее</h4><img alt="imisiceqr" src="../img/imisiceqr.jpg"></td>
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

<style>

.container3 {
    width: 100%;
    height: 55vh;
    background-color: white;
    border-radius: 80px 20px;
    padding: 30px 0px;
}

.h4 {
    font-weight: 300;
}
</style>