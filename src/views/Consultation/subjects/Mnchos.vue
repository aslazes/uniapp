<template>
  <div class = "container">
    <div class="nav"></div>
    <div class="header">
      <h2>Выберите факультет</h2>
      <div class="container2">
        <table class="it">
          <tbody>
            <tr>
              <td><div class="btn"><router-link :to="{name:'Ibs'}"><h2>Факультет «Международная школа бизнеса и мировой экономики» </h2></router-link></div></td>
              <td><div class="btn2"><router-link :to="{name:'Ff'}"><h2>Финансовый факультет</h2></router-link></div></td>
            </tr>
            <tr>
              <td><div class="btn2"><router-link :to="{name:'Fm'}"><h2>Факультет Менеджмента</h2></router-link></div></td>
              <td><div class="btn"><router-link :to="{name:'Fma'}"><h2>Факультет Маркетинга</h2></router-link></div></td>
            </tr>
            <tr>
                <td><div class="btn"><router-link :to="{name:'Grtsi'}"><h2>Факультет гостинично-ресторанной, туристической и спортивной индустрии </h2></router-link></div></td>
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
