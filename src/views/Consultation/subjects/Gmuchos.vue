<template>
  <div class = "container">
    <div class="nav"></div>
    <div class="header">
      <h2>Выберите факультет</h2>
      <div class="container2">
        <table class="it">
            <tbody>
                <tr>
                    <td><div class="btn"><router-link :to="{name:'Fep'}"><h2>Факультет экономики и права</h2></router-link></div></td>
                    <td><div class="btn2"><router-link :to="{name:'Fbc'}"><h2>Факультет бизнеса «Капитаны»</h2></router-link></div></td>
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

