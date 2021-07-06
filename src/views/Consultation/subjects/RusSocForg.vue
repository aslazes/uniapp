<template>
  <div class="container">
    <div class="nav"></div>
    <div class="header">
      <h2>Выбранные экзамены: русский язык, обществознание, ин.язык</h2>
    </div>
    <div class="container2">
      <table class="it">
      <tbody>
        <tr>
          <td><div class="btn"><router-link :to="{name:'Fep'}"><h2>Юриспруденция</h2></router-link></div></td>
          <td><div class="btn2"><router-link :to="{name:'Grtsi'}"><h2>Гостиничное дело</h2></router-link></div></td>
        </tr>
        <tr>
          <td><div class="btn2"><router-link :to="{name:'Fett'}"><h2>Таможенное дело</h2></router-link></div></td>
          <td><div class="btn"><router-link :to="{name:'Fma'}"><h2>Лингвистика</h2></router-link></div></td>
        </tr>
        <tr>
          <td colspan="2"><div class="btn2"><router-link :to="{name:'Fma'}"><h2>Реклама и связи с общественностью</h2></router-link></div></td>
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