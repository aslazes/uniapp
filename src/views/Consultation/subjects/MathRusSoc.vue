<template>
  <div class="container">
    <div class="nav"></div>
    <div class="header">
      <h2>Выбранные экзамены: математика, русский язык, обществознание</h2>
    </div>
    <div class="container2">
      <table class="it">
      <tbody>
        <tr>
          <td><div class="btn"><router-link :to="{name:'Gmuchos'}"><h2>Государственное и муниципальное управление</h2></router-link></div></td>
          <td><div class="btn2"><router-link :to="{name:'Fep'}"><h2>Управление персоналом</h2></router-link></div></td>
        </tr>
        <tr>
          <td><div class="btn2"><router-link :to="{name:'Fett'}"><h2>Товароведение</h2></router-link></div></td>
          <td><div class="btn"><router-link :to="{name:'Fett'}"><h2>Торговое дело</h2></router-link></div></td>
        </tr>
        <tr>
          <td><div class="btn"><router-link :to="{name:'Fep'}"><h2>Экономическая безопасноть</h2></router-link></div></td>
          <td><div class="btn2"><router-link :to="{name:'Fep'}"><h2>Социология</h2></router-link></div></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>