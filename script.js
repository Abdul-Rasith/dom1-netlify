//function label
function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML = content
    return ele;
}
// function break
function break_create(){
    var ele1 = document.createElement("br")
    return ele1;
}
// function input
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname)
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value)
    return element;
}
// 1 label label and input feild for first_name;
var fname = label_create("label","for","fname","First Name");
var fname_break = break_create();
var fname_input = input_create("input","type","text","id","fname");
var f1_break =break_create();

//2 label label and input feild for second_name;
var mname = label_create("label","for","mname","Middle Name");
var mname_break = break_create();
var mname_input = input_create("input","type","text","id","mname");
var f2_break =break_create();


//3 label label and input feild for third_name;
var lname = label_create("label","for","lname","Last Name");
var lname_break = break_create();
var lname_input = input_create("input","type","text","id","lname");
var f3_break =break_create();



//4 label and input feild for email
var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email");
var f4_break =break_create();


//5 label label and input feild for third_name;
var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email");
var f5_break =break_create();


// 6 label label and input feild for password;
var pwd = label_create("label","for","pwd","Password");
var pwd_break = break_create();
var pwd_input = input_create("input","type","password","id","pwd");



document.body.append(fname,fname_break,fname_input,f1_break,mname,mname_break,mname_input,f2_break,lname,lname_break,lname_input,f3_break,email,email_break,email_input,f4_break,pwd,pwd_break,pwd_input,f5_break)

