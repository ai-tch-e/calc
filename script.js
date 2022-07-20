setTimeout(function(){
    var b32 = document.getElementById('b32');
    var b31 = document.getElementById('b31');
    b32.onclick = send;
    b31.onkeyup = (e) => {
      if(e.key === "Enter"){
        send();
      }
    }
    
    function send(){
      var res = 0;
      var Get = (name) => document.getElementsByClassName(name)[0];
      var Create = (obj) => document.createElement(obj);
      var Class = (obj,name) => obj.className = name;
      var b2 = Get(['b2'][0]);
      var b31 = Get(['b31'][0]);
      var b21s = Create(['div'][0]);
      Class(b21s,['b21 b21s'][0]);
      var b211s = Create(['div'][0]);
      Class(b211s,['b211 b211s'][0]);
      var b212s = Create(['div'][0]);
      Class(b212s,['b212 b212s'][0]);
      var b21f = Create(['div'][0]);
      Class(b21f,['b21 b21f'][0]);
      var b211f = Create(['div'][0]);
      Class(b211f,['b211 b211f'][0]);
      var b212f = Create(['div'][0]);
      Class(b212f,['b212 b212f'][0]);
      var usr = b31.innerText.toLocaleLowerCase();

      try {
        res = eval(usr);
      } catch (e) {
        res = 'error';
      }

      if( /[0-9a-z]/.test(usr) ){
        b212s.innerText = b31.innerText.trim();
        b21s.appendChild(b212s);
        b21s.appendChild(b211s);
        b2.appendChild(b21s);
      }

      if(usr.toLocaleLowerCase().includes(usr)){
        b212f.innerText = `result: ${res}`;
        b21f.appendChild(b211f);
        b21f.appendChild(b212f);
        b2.appendChild(b21f);
      }

      var pos = b2.scrollHeight;
      b2.scrollTop = pos;
      b31.innerText = null;
    }
  },1)