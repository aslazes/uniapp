<template>

  <div class="container">
      <div class="nav"></div>
      <div class="header">
        <h1>Выберите условия поступления:</h1>
        <div class="container2">
            <table class="consul">
              <tbody>                
                <tr>
                  <td colspan="2"><div class="bt3"><router-link :to="{name:'Exams'}"><h2>Поступление по ЕГЭ</h2></router-link></div></td>
                </tr>
                <tr>
                  <td><div class="bt2"><router-link :to="{name:'Olymp'}"><h2>Поступление по БВИ</h2></router-link></div></td>
                  <td><div class="bt"><router-link :to="{name:'Quota'}"><h2>Целевой приём</h2></router-link></div></td>
                </tr>
                <tr>
                  <td><div class="bt"><router-link :to="{name:'Special'}"><h2>Особая квота</h2></router-link></div></td>
                  <td><div class="bt2"><router-link :to="{name:'Spo'}"><h2>Поступление после СПО</h2></router-link></div></td>
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

table.consul {
    display: table;
    margin-left: auto;
    margin-right: auto;
}

table.consul td {
    padding: 20px;
}


.bt3 h2{
    padding: 30px;
    border-radius: 40px;
    margin: 10px auto;
    height: 80px;
    width: 600px;
    cursor: pointer;
    color:#e7f1f2;
    font-weight: 600;
    font-size: 1.5rem;
    transition: all .3s;

}
.bt3 h2:hover{
  box-shadow: 8px 8px #1c98e1;
  transition: .3s;
}

.bt3 h2{
    background: #237b9f;
}

.bt3 a{
    text-decoration: none;
}
</style>