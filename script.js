const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});



function formsubmit(formName, reqFieldArr){
    var curForm = new formObj(formName, reqFieldArr);
    if(curForm.valid)
        curForm.send();
    else{
        curForm.paint();
        curForm.listen();
    }
}


function formObj(formName, reqFieldArr){
    var filledCount = 0;
    var fieldArr = new Array();
    for(i=reqFieldArr.length-1; i>=0; i--){
        fieldArr[i] = new fieldObj(formName, reqFieldArr[i]);
        if(fieldArr[i].filled == true)
            filledCount++;
    }

    if(filledCount == fieldArr.length)
        this.valid = true;
    else
        this.valid = false;


    this.paint = function(){
        for(i=fieldArr.length-1; i>=0; i--){
            if(fieldArr[i].filled == false)
                fieldArr[i].paintInRed();
            else
                fieldArr[i].unPaintInRed();
        }
    }

    this.send = function(){
        document.forms[formName].submit();
    }

    this.listen = function(){
        for(i=fieldArr.length-1; i>=0; i--){
            fieldArr[i].fieldListen();
        }
    }
}

function fieldObj(formName, fName){
    var curField = document.forms[formName].elements[fName];

    this.filled = getValueBool();

    this.paintInRed = function(){
        curField.addClassName('red');
    }

    this.unPaintInRed = function(){
        curField.removeClassName('red');
    }

    this.fieldListen = function(){
        curField.onkeyup = function(){
            if(curField.value != ''){
                curField.removeClassName('red');
            }
            else{
                curField.addClassName('red');
            }
        }
    }

    function getValueBool(){
        if(curField.value != '')
            return true;
        else
            return false;
    }
}