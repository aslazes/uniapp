<template>
<div class = "container">
    <div class = "nav">
    </div>
    <div class = "header">
        <h1>Поступление без вступительный испытаний</h1>
    </div>
    <div class="container2">
        <table class="it">
	<tbody>
		<tr>
			<td><div class="bt"><router-link :to ="{name: 'ConsulOlymp'}"><h2>Хочу проконсультироваться</h2></router-link></div></td>
			<td><div class="bt2"><router-link :to ="{name: 'DocsOlymp'}"><h2>Готов подать документы</h2></router-link></div></td>
		</tr>
		<tr>
			<td colspan="2"><div class="bt3"><router-link :to ="{name: 'Prem'}"><h2>Узнать о преимуществах</h2></router-link></div></td>
		</tr>
	</tbody>
</table>
    </div>

</div>
</template>