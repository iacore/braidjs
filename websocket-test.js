// Tests for the braid-websocket protocol

module.exports = require['websocket-test'] = (sim) => (
    {
        sync: false,
        certificate: `-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJANoWGfl3pEeHMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV
BAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQwHhcNMTkwODE2MjAxNTIxWhcNMjAwODE1MjAxNTIxWjBF
MQswCQYDVQQGEwJVUzETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50
ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
CgKCAQEA1bilKJKH1axV0OLLIwg3WxXx6MMsFL3/bv2uX9+Z22uZukJsgqnR2y+6
OCLH8opczH4Now3Od+P0G4kNSn9m+T5W5bvf9bIIDmCG/04uGCvx0L8bgYA5lyMJ
aFdcfCXu1iKvUt1LdZlds2AsBfceYCB6FwsMkUODzZ7OJ6R1aXUHxQ74me/ksoxV
P7Fmv012gRJkYn5gzvrokula2Yxb+z84TP115tALYBBpLhj5WPOXSmyVo0Lf1dGQ
JfbRxvx32pxZiBPwcNre3yzKhRue99tRuPHFCQBZSkXGuT7K9bsNnPwXfAmB2VbQ
bjezmqVGv8KnwyTRWdLaEcV9cxHCnQIDAQABo1AwTjAdBgNVHQ4EFgQUOoDGcBG8
Xm/Jj+WbIYctxhGqD6owHwYDVR0jBBgwFoAUOoDGcBG8Xm/Jj+WbIYctxhGqD6ow
DAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEAaHjdu8Hg34Zzay4djFSo
hRno4m+tiJ4UT3oLTHRGh54JFKQPeLLEY0WbhrBDyuDJrCdyjvmqpuELPPwNRdo0
Ly3fhRIxeaN8px6V0bpdj0ePDqC0ZU5It/9jVlC0OkdG2xwJygw+xNLaHb09l7rj
ZLM+tOKQEBxZCLKqc1FLlS9MIxDKaVdI2JSBDmNl+0XyFwKM6bfI3Mk8STuZXm5A
EtWvDNbLFl6TLyKDeHNRc0LQEa74xE3yhoWO3kb9phL4A1g/I7rW+B2we4N84FfT
v5C5/zn58xabUtMVeGUi/avnVz+C4HY4ZMEIQPIodtsRcZq05RQGW8ipig7QaXnD
gQ==
-----END CERTIFICATE-----
`,
        private_key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVuKUokofVrFXQ
4ssjCDdbFfHowywUvf9u/a5f35nba5m6QmyCqdHbL7o4IsfyilzMfg2jDc534/Qb
iQ1Kf2b5Plblu9/1sggOYIb/Ti4YK/HQvxuBgDmXIwloV1x8Je7WIq9S3Ut1mV2z
YCwF9x5gIHoXCwyRQ4PNns4npHVpdQfFDviZ7+SyjFU/sWa/TXaBEmRifmDO+uiS
6VrZjFv7PzhM/XXm0AtgEGkuGPlY85dKbJWjQt/V0ZAl9tHG/HfanFmIE/Bw2t7f
LMqFG57321G48cUJAFlKRca5Psr1uw2c/Bd8CYHZVtBuN7OapUa/wqfDJNFZ0toR
xX1zEcKdAgMBAAECggEAWCxLh0ec3tywsvM+V3+mRt/w49TRtOUGIyZp8IfxlAL6
c0vANNAXElTIgSxoTXoj+wHuYlzp17CmH04Vu6yAMUg01acDKPyAMl5Ek8QPZE2N
AFA36t+Z4u7DjNauA1IrDRFWP9uorCXP8Jc20mc3kvUTKbqXPr8Z+5UO/G/vOMgc
QKXPoz45EbFahTwck4TQowLeKhAF3BU5fn48zuBy055q6babV1z0LDzDIUGcZqHv
4VPMLOUp1KzpwoQd6o3wwBBttJkFqBf7US3nExdq0SkHgwE/lOKgJuSMmgAWgGm5
3iO8F+Ve84206IgmhQOMw3KZjIgWdiCW/dgVbJQsQQKBgQD4/2Wr4NYfdXqotnjT
MZCx5921nFwkMyt7JndCIs49CQ3lMGtlijRtVHGhZKVHUZr4SKKfjbOAiABPCsRL
ZhvVnhlbmUioSgfMM/Y+fkCs3DdzuJE9tVuSdyQFoblY5W1dLeuLTEI3TDTos+V7
jfKsHMqF0gAbCkt7GgVpy5vCRQKBgQDbu0ibskjwF5voMuJmJdvIv0XAi91sRTRJ
RuDrH6NPU+RrVHTHRJMtGRM5zWI4b7N0KTx+J2xaJ6J/FxbfsdThgKb99gB9j3hR
F0CK/quMjAwpezWwatHarK87c//rvmIBVL82xLe3sQKxmwdCUiyhum/4l+GN+WpZ
lfP4HU4weQKBgQD18WaekBVPu31tedb8XB/c6fZ/NTN5+iT/ni374F8vwGq+L8ZU
5F8Ggns+fCgYus1EYpJm4NMlqLANYsgi5Xem12Oaq1wuBfmPxN98OL5vP5FyNyMW
/bS2hgHJokVuPid4+yuGSsu4zQgRted80+eYA1QzPAsoqlGGBVzFc/yktQKBgQDP
RcqHPFV7Tfn+vkk8bEf4BR4KNKWJZXqeCONQSEboJM3axQ9njXN73iR5qRkW/Z99
Wwy6P/wAy1SIqEImf3y9v3tHI1BxIO4xKEr1EqjGarFqS9Rod0tACRc/cPwf6DZQ
5R1+z3AyMiLFYOUnFZcOdGz9RmA5aeZ9XWuHSDWimQKBgGgmRWuGasEEMXdnkLQA
rNg1Di5DFv+KvXwgTo63MxwBs2olQ7jUsFf8khipqpByGazYgGeEa1RxDGpQrdyO
I/5N3d5VcGW4g9obfdexuuKOloyKRS2N0KNhLfEfb+qr4gRACPpyKnj5Jeohliox
bHieUzx8qriZ8KrD3PbjKqap
-----END PRIVATE KEY-----
`,
        setup () {
            // Make the hub
            var hub = require('./node.js')()
            hub.pid = 'hub'
            sim.add_peer(hub)
            this.server = require('./websocket-server.js')(
                hub,
                this.certificate,
                this.private_key
            )

            // Make the clients
            var clients = []
            for (var i = 0; i < sim.n_peers - 1; i++) {
                var client = require('./node.js')()
                client.pid = 'C' + (i+1)
                sim.add_peer(client)
                clients.push(client)
            }

            // Create pipes that connect peers to the hub
            this.client_pipes = {}
            for (var i = 0; i < clients.length; i++)
                this.client_pipes[clients[i].pid] = require('./websocket-client.js')({
                    node: clients[i],
                    url: 'ws://localhost:3007/',
                    prefix: 'my_key'
                })

            WebSocket = require('ws')
        },
        wrapup (cb) {
            log('Wrapping up!')

            // Connect all the pipes together
            for (var pipe in this.client_pipes)
                if (!this.client_pipes[pipe].enabled())
                    this.client_pipes[pipe].enable()

            // Make a joiner at 100ms
            setTimeout(make_joiner, 100)

            // And be done at 200ms
            setTimeout(() => this.server.close(cb), 200)

            function make_joiner () {
                var i = Math.floor(sim.rand() * sim.n_peers)
                var p = sim.peers[i]
                
                notes = ['creating joiner']

                // Create it!
                p.create_joiner('my_key')
                
                sim.vis.add_frame({
                    peer_notes: {[p.pid]: notes},
                    peers: sim.peers.map(x => JSON.parse(JSON.stringify(x)))
                })
            }
        },
        toggle_pipe () {
            console.log('XXX Fake toggling pipe XXX')
        }
    }
)
