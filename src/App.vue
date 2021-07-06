<template>
  <button @click="bckhome"><h3>Главная</h3></button>
  <button @click="back"><h3>Назад</h3></button>
  <button @click="forward"><h3>Вперед</h3></button>
  <router-view/>

</template>

<script>
export default {
  methods: {
    bckhome(){
      this.$router.push({name: 'Home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(+1)
    }
  }
}
</script>

<style lang="scss">



.nav {
  height: 10px;
  margin: 15px 5px 5px 5px;
}

.header{
  font-weight: bold ;
  font-size: 25px;
  text-align: center;
  color: #1b3a58;

}

.header h2 {
  font-size: 30px;
}


.header h1{
  line-height: 60%;
}

.container  {
  width: 80%;
  height: 80vh;
  margin: 3em auto 1em; 
  text-align: center;
  background-color: #e7f1f2;
  border-radius: 50px;
  box-shadow: 27px 32px #006495;
}


body {
 font-family: 'Montserrat', sans-serif; 
 background: url('./assets/logo.jpg') right top no-repeat;
 line-height: 1.6;
 font-size: 17px;
 color:#1b3a58;
 background-attachment: fixed;
}

#app {
 
  text-align: center; 
  color: #13293e;
}


button {
  margin:  0 30px;
  border: none;
  background: #1c98e0;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border-radius: 15px;
  width: 130px;
  font-size: 15px;
  margin: 10px;
}

button:hover{
  background: #006495;
}



h3{
    font-family: 'Montserrat', sans-serif; 
    color: white;
    font-size: 13px;
    font-weight: 450;
}



.bt h2{
    padding: 30px;
    border-radius: 40px;
    margin: 10px auto;
    height: 80px;
    width: 300px;
    cursor: pointer;
    color:#e7f1f2;
    font-weight: 600;
    font-size: 1.5rem;
    transition: all .3s;

}
.bt h2:hover{
  box-shadow: 8px 8px #006495;
  transition: .3s;
}

.bt h2{
    background: #1c98e0;
}

.bt a{
    text-decoration: none;
}


.bt2 h2{
    padding: 30px;
    border-radius: 40px;
    margin: 10px auto;
    height: 80px;
    width: 300px;
    color:#e7f1f2;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.5rem;
    transition: all .3s;

}
.bt2 h2:hover{
  box-shadow: 8px 8px #1c98e0;
  transition: .3s;
}

.bt2 h2{
    background: #006495;
}

.bt2 a{
    text-decoration: none;
}

.container2 {
  height: 70%;
  width: 80%;
  margin: auto;
}


img {
  width: auto;
  height: auto;
}

img2 {
  width: 100%;
  height: auto;

}
</style>
