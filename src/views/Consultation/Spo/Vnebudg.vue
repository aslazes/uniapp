<template>
<div class = "container">
    <div class = "nav"></div>
    <div class = "header"><h1>Выберите направление</h1></div>
            <table class="it">
            <tbody>
                <tr>
                    <td><div class="btn"><router-link :to="{name:'Imisice'}"><h2>Прикладная информатика или информационная безопасность</h2></router-link></div></td>
                    <td><div class="btn2"><router-link :to="{name:'Fdo'}"><h2>Другое направление</h2></router-link></div></td>
                </tr>
            </tbody>
        </table>
</div>
</template>