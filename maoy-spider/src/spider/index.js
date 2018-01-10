var request = require('superagent');
request.post('http://m.maoyan.com/city?_v_=yes')
        .then(function(res) {
            console.log('yay got ' + res.text);
        });