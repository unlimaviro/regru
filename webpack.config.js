const path = require('path');

module.exports = {
    mode: 'development', // Или 'production' для оптимизации размера и скорости
    entry: './mainpage/static/js/index.js', // Точка входа в ваше приложение
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'mainpage/static/dist'), // Путь для сохранения собранных файлов
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Применять правила к файлам CSS
                use: [
                    'style-loader', // Добавляет CSS в DOM через тег <style>
                    'css-loader', // Позволяет импортировать CSS в JavaScript
                ],
            },
            {
                test: /\.js$/, // Применять правила к файлам JavaScript
                exclude: /node_modules/, // Исключить папку node_modules
                use: {
                    loader: 'babel-loader', // Использовать Babel для транспиляции JavaScript
                    options: {
                        presets: ['@babel/preset-env'], // Поддержка современного JavaScript
                    },
                },
            },
            // Вы можете добавить дополнительные правила для других типов файлов здесь
        ],
    },
};
