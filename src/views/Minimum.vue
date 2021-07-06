<template>
    <div class="container">
        <div class="nav"></div>
        <div class="header">
            <h1>Минимальные баллы для подачи заявлений</h1></div>
            <div class="container2">
            <table class="sub">
	<tbody>
		<tr>
			<td rowspan="2">Предмет</td>
			<td colspan="2">
                Минимальные баллы
            </td>
		</tr>
		<tr>
			<td>На бюджетные места</td>
			<td>На внебюджетные места</td>
		</tr>
		<tr>
			<td>Математика</td>
			<td>50</td>
			<td>39</td>
		</tr>
		<tr>
			<td>Русский язык</td>
			<td>50</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Биология</td>
			<td>50</td>
			<td>39</td>
		</tr>
		<tr>
			<td>Инностранный язык</td>
			<td>50</td>
			<td>30</td>
		</tr>
		<tr>
			<td>Информатика и ИКТ</td>
			<td>50</td>
			<td>44</td>
		</tr>
		<tr>
			<td>История</td>
			<td>50</td>
			<td>35</td>
		</tr>
		<tr>
			<td>Литература</td>
			<td>50</td>
			<td>40</td>
		</tr>
		<tr>
			<td>Обществознание</td>
			<td>51</td>
			<td>45</td>
		</tr>
		<tr>
			<td>Физика</td>
			<td>51</td>
			<td>39</td>
		</tr>
		<tr>
			<td>Химия</td>
			<td>50</td>
			<td>39</td>
		</tr>
		<tr>
			<td>Рисунок</td>
			<td>50</td>
			<td>50</td>
		</tr>
		<tr>
			<td>Живопись</td>
			<td>50</td>
			<td>50</td>
		</tr>
	</tbody>
    </table>
    </div>
    </div>
</template>

<style>
table.sub{
	border: 1px solid #eee;
	table-layout: fixed;
	width: 100%;
	margin-bottom: 20px;
}
table.sub th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
}
table.sub td{
	padding: 5px 10px;
	border: 1px solid #eee;
	text-align: left;
}
table.sub tbody tr:nth-child(odd){
	background: #fff;
}
table.sub tbody tr:nth-child(even){
	background: #F7F7F7;
}
</style>