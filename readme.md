npm init -y  ===>initalized with empty json
npx tsc --init  ==> for the ts config
in ts config==> "rootDir":"./src" and "outDir":"./dist"===> 
npm i ws @types/ws



///First time it is created the https server  and connection normally what we have did  earlier. 
//after that first connected then websocket it will presistently connected the connected between browser to server or server to server.

//In websoket it will server can push to browser even though client will request or not. it is like full duplex but in http only client will request to server then only server will response to browser.

//here we will create two way to create websoket in server 
        1)https library (without using express)==native https library in node.js
        2)with express

Here now going with the natively https server

tsc -b for compiler
node dist/index.js

//now you can via post =man or via react.js or any front end you connect to the websoket server



//from postwoman and then select the realtime(websoket)
then ws://localhost:8080/ and connect it will show connected and more than one tab and connect and you will see there can be multiple client to same server and if one of them will send the message then websoket will send the every user the message