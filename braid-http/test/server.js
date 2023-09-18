var braidify = require('../braid-http-server.js')
var sendfile = (f, req, res) => res.end(require('fs').readFileSync(require('path').join(__dirname, f)))
require('http').createServer(
    (req, res) => {

        // Braidifies our server
        braidify(req, res)

        // We'll serve Braid at the /json route!
        if (req.url === '/json') {

            // If the client requested a subscription, let's honor it!
            if (req.subscribe)
                res.startSubscription()

            // Send the current version
            res.sendVersion({
                version: 'test',
                body: JSON.stringify({this: 'stuff'})
            })

            // If this is a subscription, let's simulate an update
            if (req.subscribe)
                setTimeout(() => res.sendVersion({version: 'another!', body: ''}), 500)

            // End the response, if this isn't a subscription
            if (!req.subscribe) {
                res.statusCode = 200
                res.end()
            }
        }        

        // Static HTML routes here:
        else if (req.url === '/')
            sendfile('client.html', req, res)
        else if (req.url === '/braid-http-client.js')
            sendfile('../braid-http-client.js', req, res)
    }

).listen(9000, () => console.log("Listening on http://localhost:9000..."))
