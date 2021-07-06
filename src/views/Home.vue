<template>
    <div class="container">
        <div class="nav"></div>
        <div class="header">
          <h1>Приёмная кампания 2021</h1>
        </div>
        <div class="nav"></div>
        <div class="container2">
            <table class="consul">
              <tr>
                <th><div class="bt"><router-link :to ="{name: 'Consultation'}"><h2>Траектория поступления</h2></router-link></div></th>
                <th><div class="bt2"><router-link :to ="{name: 'Sales'}"><h2>Узнать про скидки на обучение</h2></router-link></div></th>
              
              </tr>
              <tr>
                <td><div class="bt2"><router-link :to ="{name: 'Extrapoints'}"><h2>Дополнительные баллы </h2></router-link></div></td>
                <td>            <div class="bt"><router-link :to ="{name: 'Dates'}"><h2>Основные даты кампании</h2></router-link></div></td>
              </tr>
                <tr>
                <td><div class="bt"><router-link :to ="{name: 'Minimum'}"><h2>Минимальные баллы для подачи заявлений</h2></router-link></div></td>
                <td>            <div class="bt2"><router-link :to ="{name: 'Docs'}"><h2>Документы для подачи</h2></router-link></div></td>
              </tr>
            </table>
            
        </div>
    </div>


</template>

<script>
export default {
  name: 'Home',
  components: {


  }
}
</script>

<style>

table.nav {
    display: table;
    margin-left: auto;
    margin-right: auto;
}

table.nav td {
    padding: 100px;
}



</style>