# 1. задание No1
>> В этом задании нужно улучшить приложение. 
>Для этого нужно добавить лоадер , 
>который будет отображаться 
>во время загрузки новостей изAPI.
Лоадером будет фраза Загрузка данных .
Обратите внимание!
Лоадер должен отображатся только во время запроса
Необходимо чтобы хук useApiLoader возвращал переменную 
> isFetching со значением true если идет загрузка и false если загрузка не идет
Необходимо внутри компонента добавить логику отображения лоадера. Лоадер будет
ориентироватся на переменную isFetching которую возвращает хук useApiLoader
