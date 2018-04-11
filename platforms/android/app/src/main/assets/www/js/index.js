/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //alert('test');
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
  SpinnerDialog.show();


        var data = {
          username: "shubham",
          password: "root1234",
          device_imei: "1234567891020",
          date: "2018-04-02 11:47:15"
        }

        // fetch(`http://139.59.86.255:8001/content/login`, {
        //   mode: 'no-cors',
        //   body: JSON.stringify(data),
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        // }).then(data => {
        //     console.log(data.json());
        // });

        fetch(`http://139.59.86.255/content/login`, {
          body: JSON.stringify(data), // must match 'Content-Type' header
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, same-origin, *omit
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
        })
        .then(function(response){
        //  SpinnerDialog.show();
          if(response.ok)
          {
  SpinnerDialog.hide();

          }
        });


    },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    postData: function postData() {
        alert('gjdbhjk');

    }
};

app.initialize();
