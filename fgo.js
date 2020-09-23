auto.waitFor()



function run(hour) {
    let loop = 100
    for (var n = 0; n < loop; n++) {
        toastLog("click");
        
        sleep(1000);

        
            
    }
}

function battle() {
    click(1,1)
    sleep(2000);
    click(2,2)
    sleep(2000);
    click(1000,1000) //开炸
    sleep(22000);
}

function exitApp() {
    back();
    sleep(500);
    back();
    sleep(1000);
    click(1200, 750);
}

function enter(option) {
    switch (option) {
        case 'exp':
            click(100, 200); //进门
            sleep(2000);
            click(100, 200);
            sleep(2000);
            click(100, 200);
            sleep(12000); //确认
            battle()
        break
        default:
            break
    }
    
}

function runtime(times) {
    launchApp("命运-冠位指定");
    // toastLog(click(1000,1000));
    sleep(5 * 1000);
    
    toastLog("开始");
    run(times);
    exitApp();
    
}

runtime(4); // 3小