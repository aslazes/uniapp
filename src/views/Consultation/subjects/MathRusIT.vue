<template>
  <div class = "container">
    <div class="nav"></div>
    <div class="header">
      <h2>Выбранные экзамены: русский язык, математика, информатика</h2>
      <div class="container2">
        <table class="it">
          <tbody>
            <tr>
              <td><div class="btn"><router-link :to="{name:'Imisice'}"><h2>Прикладная информатика</h2></router-link></div></td>
              <td><div class="btn2"><router-link :to="{name:'Imisice'}"><h2>Прикладная информатика и математика</h2></router-link></div></td>
            </tr>
            <tr>
              <td><div class="btn2"><router-link :to="{name:'Imisice'}"><h2>Информационная безопасность</h2></router-link></div></td>
              <td><div class="btn"><router-link :to="{name:'Imisice'}"><h2>Мат.обеспечение и администрирование информационных систем</h2></router-link></div></td>
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

table.it{
    display: table;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 40px;
}

table.it td{
    width: 50%;
    height: 50%;
    font-size: 20px;
    font-weight: 500;

}

.btn h2{
    padding: 30px;
    border-radius: 40px;
    margin: 10px auto;
    height: 80px;
    width: 400px;
    cursor: pointer;
    color:#e7f1f2;
    font-weight: 600;
    font-size: 1.3rem;
    transition: all .3s;

}
.btn h2:hover{
  box-shadow: 8px 8px #006495;
  transition: .3s;
}

.btn h2{
    background: #1c98e0;
}

.btn a{
    text-decoration: none;
}


.btn2 h2{
    padding: 30px;
    border-radius: 40px;
    margin: 10px auto;
    height: 80px;
    width: 400px;
    color:#e7f1f2;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.3rem;
    transition: all .3s;

}
.btn2 h2:hover{
  box-shadow: 8px 8px #1c98e0;
  transition: .3s;
}

.btn2 h2{
    background: #006495;
}

.btn2 a{
    text-decoration: none;
}
</style>