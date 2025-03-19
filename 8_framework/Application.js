const http = require("http")
const Emitter = require("events")


module.exports = class Application {
    constructor(){
        this.emitter = new Emitter();
        this.server = this._createServer();
    }

    listen(PORT, callback){
        this.server.listen(PORT, callback)
    }

    addRouter(router){
        Object.keys(router.endpoints).forEach(path => {
            Object.keys(router.endpoints[path]).forEach(method => {
                // Mask for storing event name for every path-method : [path]:[mathod]
                this.emitter.on(`[${path}]:[${method}]`, (req, res) => {
                    router.endpoints[path][method](req, res);
                })
            });
        });
    }

    _createServer(){
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRouterMask(req.url, req.method), req, res);
            if(!emitted){
                res.end();
            }
        })
    }

    _getRouterMask(path, method){
        return `[${path}]:[${method}]`
    }
}