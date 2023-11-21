
[![Maintainability](https://api.codeclimate.com/v1/badges/b915728e6f6ad71b8020/maintainability)](https://codeclimate.com/github/asenka0301/carTechRu_test/maintainability)

[App LiveDemo](https://cartechru-test.onrender.com)

# Test Junior Front Developer / Тестовое задание

Необходимо разработать SPA приложение на основе готового boilerplate, выводящее список аукционов на основе данных из API.

## Требования 

- Использовать прилагаемый макет (не требуется строгое соответствие);
- Оформить подписку на обновление данных (polling);
- При первой загрузке данных отображать лоадер, при их обновлении - нет;
- Таймер на экране должен отсчитывать секунды до окончания каждого аукциона;
- Рендер должен быть оптимизирован обновлять элемент списка только при смене ставки;
- Использовать redux;
- Результат задания оформлен в виде MergeRequest в GitHub;
- Pipeline линтера на GitHub должен быть пройден;
- Добавить в проект Reactrouter и реализовать просмотр каждого аукциона в свое роуте;
- Фильтрация аукционов по названию автомобиля;

## Дополнительно

- Redux Toolkit [Query];
- SSR;
- Любая дополнительная инициатива, которая продемонстрирует ваши знания.

## Установка

`yarn install`

## Запуск

`yarn dev`

## Запуск отдельно api и web-server

`yarn dev:api` запуск локального сервера на localhost:3000

`yarn dev:web` запуск dev сервера webpack на localhost:8080

## API

GET: `/api/filterAuctions?search=''` возвращает список аукционов, отфильтрованных по get-параметру `search`

GET: `/api/auction/:auctionId` возвращает информацию об отдельном аукционе, дополненную пробегом авто

## Настройка

Конфигурация приложени задается переменными в файле ./client/builder/env/dev.json

Внутри приложения переменные доступны через `process.env.CONFIG`

`IMAGES_BASEPATH` путь к локальному серверу с изображениями

`API_BASEPATH` путь к api endpoints

`POLLING_INTERVAL` интервал по умолчанию для запросов (20сек)

## UI kit

В проекте подключен и преднастроен [material-ui](https://mui.com/), будет большим плюсом, если он будет использован

## Примеры верстки

Список аукционов

![auctions_sample](https://user-images.githubusercontent.com/68642210/153865143-adf5a83a-dc48-4350-afd9-58f6f31fa074.jpg)

 Страница отдельного аукциона:

![details_sample](https://user-images.githubusercontent.com/68642210/153865147-692885a0-e215-4fc8-80bc-b85491925280.jpg)

Изображения с примерами верстки находятся в папке samples
