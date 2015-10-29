module.exports = function(config){
    config.set({
        basePath : '',
        files : [
            'js/test_e2e/*.js'
        ],
        autoWatch : false,
        browsers : ['Chrome'],
        frameworks: ['ng-scenario'],
        singleRun : true,
        proxies : {
            '/': 'http://localhost:8000/'
        },
        urlRoot: '__karma__',
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
        ],
        reporters: ['dots']
})}

