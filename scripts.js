"use";
     
    var _buttons = document.getElementsByTagName("button");

    _buttoncount= _buttons.length;

    _result = document.getElementById("result");

    for (var i=0; i<_buttons.length; i++){
        _buttons[i].onclick = hesapla;
    }
   
    function hesapla(){

        var _deger = this.innerHTML;

    if (_deger=="="){
        try{
            _result.value=eval(_result.value);
        }catch{
            _result.value="0";
        } return;
    }else if(_deger=="Clear"){
        _result.value = "0";
        return ;
    }

        _result.value+=_deger;
    }