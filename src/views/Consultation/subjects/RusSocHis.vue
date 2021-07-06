<template>
  <div class="container">
    <div class="nav"></div>
    <div class = "header">
      <h2>Выбранные экзамены: русский язык, обществознание, история</h2>
    </div>
    <div class="container2">
      <table class="it">
	    <tbody>
      <tr>
        <td><div class="btn"><router-link :to="{name:'Fep'}"><h2>Политология</h2></router-link></div></td>
        <td><div class="btn2"><router-link :to="{name:'Grtsi'}"><h2>Туризм</h2></router-link></div></td>
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