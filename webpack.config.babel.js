module.exports = {
    entry: './src/app/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint']}

        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
}