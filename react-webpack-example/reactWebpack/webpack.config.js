var path = require('path');

module.exports = {
    entry: {
        server: './Content/server.js',
        client: './Content/client.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
    ,
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        //'semantic-ui-react': 'semanticUIReact'
    }
};