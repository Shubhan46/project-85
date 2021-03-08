//These are the variables that will be used
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
random_number = Math.floor(Math.random()*4);
console.log(random_number);
background_image ="racing.jpg";
console.log(background_image);
car_1_image ="car1.png";
car_2_image ="car2.png";

car1_x = 10;
car1_y = 10;
car_1width = 120;
car_1height = 70;

car2_x = 10;
car2_y = 100;
car_2width = 120;
car_2height = 70;
//This is the function "add()"
function add()
{
    background_Img = new Image();//Defining the variable with a new image
    background_Img.onload=uploadBackground;//Setting the img to onload and call function
    background_Img.src= background_image;

    car_1Img = new Image();//Defining the car_1 with a new image
    car_1Img.onload=uploadCar_1;//Setting the car_1 to onload and call function
    car_1Img.src= car_1_image;

    car_2Img = new Image();//Defining the car_2 with a new image
    car_2Img.onload=uploadcar_2;//Setting the car_2 to onload and call function
    car_2Img.src= car_2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_Img, 0, 0, canvas.width, canvas.height);
}

function uploadCar_1()
{
    ctx.drawImage(car_1Img, car1_x, car1_y, car_1width, car_1height);
}

function uploadcar_2()
{
    ctx.drawImage(car_2Img, car2_x, car2_y, car_2width, car_2height);
}

//This is for adding an event listner for "keydown"
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    if(keypressed == "38")
    {
        car_1up();
        console.log("left arrow key pressed");
    }
    if(keypressed == "40")
    {
        car_1down();
        console.log("down key pressed");
    }
    if(keypressed == "37")
    {
        car_1left();
        console.log("left key pressed");
    }
    if(keypressed == "39")
    {
        car_1right();
        console.log("right key pressed");
    }
    if(keypressed == "87")
    {
        car_2up();
        console.log("w key pressed");
    }
    if(keypressed == "83")
    {
        car_2down();
        console.log("s key pressed");
    }
    if(keypressed == "65")
    {
        car_2left();
        console.log("a key pressed");
    }
    if(keypressed == "68")
    {
        car_2right();
        console.log("d key pressed");
    }

}

function car_1up()
{
    if(car1_y <= 0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow pressed, X = "+car1_x+" Y = "+car1_y);
        uploadBackground();
        uploadCar_1();
        uploadcar_2();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 1
        
    }
}

function car_1down()
{
    if(car1_y >= 0)
    {
        car1_y = car1_y + 10;
        console.log("When down arrow pressed, X = "+car1_x+" Y = "+car1_y);
        uploadBackground();
        uploadCar_1();
        uploadcar_2();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 1
        
    }
}

function car_1left()
{
    if(car1_x <= 0)
    {
        car1_x = car1_x - 10;
        console.log("When left arrow pressed, X = "+car1_x+" Y = "+car1_y);
        uploadBackground();
        uploadCar_1();
        uploadcar_2();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 1
        
    }
}

function car_1right()
{
    if(car1_x >= 700)
    {
        car1_x = car1_x - 10;
        console.log("When right arrow pressed, X = "+car1_x+" Y = "+car1_y);
        uploadBackground();
        uploadCar_1();
        uploadcar_2();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 1
        
    }
}

function car_2up()
{
    if(car2_y >= 0)
    {
        car2_y = car2_y - 10;
        console.log("When up arrow pressed, X = "+car2_x+" Y = "+car2_y);
        uploadBackground();
        uploadCar_1();
        uploadcar_2();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 2
        
    }
}

function car_2down()
{
    if(car2_y <= 500)
    {
        car2_y = car2_y - 10;
        console.log("When down arrow pressed, X = "+car2_x+" Y = "+car2_y);
        uploadBackground();
        uploadCar_1();
        uploadcar_2();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 1
        
    }
}

function car_2left()
{
    if(car2_x >= 0)
    {
        car2_x = car2_x - 10;
        console.log("When left arrow pressed, X = "+car2_x+" Y = "+car2_y);
        uploadBackground();
        uploadCar_1();
        uploadcar_2();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 1
        
    }
}

function car_2right()
{
    if(car2_x <= 700)
    {
        car2_x = car2_x - 10;
        console.log("When right arrow pressed, X = "+car2_x+" Y = "+car2_y);
        uploadBackground();
        uploadcar_2();
        uploadCar_1();
        //We have typed the code for giving the console dot log and display it in the console
        //We have also completed the function up of car 1
        
    }
}

if(car1_x > 700)
{
    console.log("car 1 won!");
    document.getElementById("game_status").innerHTML="Car 1 won!";
}

if(car2_x > 700)
{
    console.log("car 2 won!");
    document.getElementById("game_status").innerHTML="Car 2 won!";
}