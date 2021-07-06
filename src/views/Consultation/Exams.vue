<template>

    <div class="container">
    <div class="nav"></div>
    <div class="header"><h1>Поступление по ЕГЭ</h1></div>
    <h2>Выберите предметы для просмотра направлений: </h2>
    <div class="container2">
        <table class="exams">
        <thead>
            <th></th>
            <th></th>
        </thead>
        <tbody>
            <tr v-for="subject in subjects" :key="subject.id">
                <td>
                    <input type="checkbox" :value="subject.id" v-model="selected">
                </td>
                <td>{{subject.title}}</td> 
            </tr>
        </tbody>
        </table>  
        <div class="nav"></div>
        <button @click=select><h3>Подтвердить</h3></button>
    </div>
    </div>





</template>

<script>
export default {
 data(){
       return {
           subjects: [
                {title:'Математика', id: 1},
                {title:'Русский язык', id: 2},
                {title:'Информатика', id: 3},
                {title:'Обществознание', id: 4},
                {title:'Инностранный язык', id: 5},
                {title:'История', id: 6},
                {title:'Литература', id: 7},
                {title:'Биология', id: 8},
                {title:'Физика', id: 9},               
                {title:'Химия', id: 10},

           ],
           selected: [],
       }
    }, 

  methods: {
      select(){
          this.selected.sort(function(a,b){
              return a-b
          });
           let dir='';



          for(let i in this.selected){
              console.log(this.selected[i]);
              dir=dir+(this.selected[i]).toString();

          };

          console.log(dir);
        if (dir=='123') {
            this.$router.push({name: 'MathRusIT'});
        } else if (dir=='1245') {
            this.$router.push({name: 'MathRusSocForg'});
        } else if (dir=='124') {
            this.$router.push({name: 'MathRusSoc'});
        } else if (dir=='245') {
            this.$router.push({name: 'RusSocForg'});
        } else if (dir == '246') {
            this.$router.push({name: 'RusSocHis'});
        } else if (dir=='1210') {
            this.$router.push({name: 'MathRusChem'});
        } else if (dir=='129'){
            this.$router.push({name: 'MathRusPhys'});
        } else if (dir=='128') {
            this.$router.push({name: 'MathRusBio'});
        } else if (dir=='27') {
            this.$router.push({name: 'RusLitr'});
        } else {
            this.$router.push({name: 'Error'})
        };

        return dir;
      },
      test(){
        this.$router.push({name: 'MathRusChem'});
      }

  }  


}
</script>


<style>
table.exams{
    display: table;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 10px;
}

table.exams td{
    width: 50%;
    height: 50%;
    font-size: 20px;
    font-weight: 500;

}

label {
    font-weight: bold;
    color: #2c3e50;
}




</style>