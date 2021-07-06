<template>
  <div class = "container">
    <div class="nav"></div>
    <div class="header">
      <h2>Выбранные экзамены: математика, русский язык, обществознание, инностранный язык</h2>
      <div class="container2">
        <table class="it">
          <tbody>
            <tr>
              <td><div class="btn"><router-link :to="{name:'Ecchos'}"><h2>Экономика</h2></router-link></div></td>
              <td><div class="btn2"><router-link :to="{name:'Imisice'}"><h2>Бизнес-информатика</h2></router-link></div></td>
            </tr>
            <tr>
              <td><div class="btn2"><router-link :to="{name:'Mnchos'}"><h2>Менеджмент</h2></router-link></div></td>
              <td><div class="btn"><router-link :to="{name:'MathRusSoc'}"><h2>Просмотреть направления по сходному сочетанию экзаменов</h2></router-link></div></td>
            </tr>
          </tbody>
        </table>
        </div>

    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>