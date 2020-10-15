function add(x,y){

    return x + y;
}

function main(x,y,func){

    x+=1;
    y+=1;
    console.log(func(x,y));
}

main(1,2,add);