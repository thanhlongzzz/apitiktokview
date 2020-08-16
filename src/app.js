import express from "express";
import 'regenerator-runtime';
import User from './model/user';
import {User2,Data} from './model/user';
const app = express();
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
const user  = new User('Thành Long', 23);
const user2 = new User2("Nguyễn Thành Long");


var fetch = async (url, header) => {
    const data = new Data(url,header);
    return data;
};

var request = async (method, url, body = undefined) => {
    var data = await fetch(url, {
        method: method,
        body: body,
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }).then((res) => {console.log('object :>> ', res); return res;});
    return data;
};

var s = ()=>{
    console.log();
};
app.get('/', async (req, res) => {
    var text = "Test string 2";
    console.log('before');
    var data = await request('GET','/user');
    console.log('after');
    res.send(data);
});
app.get('/user', (req, res) => {
    res.send(user2);
});
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});