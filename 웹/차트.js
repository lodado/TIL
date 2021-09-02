//canvas circle drawing 셋팅
function canvasCircle() {

    const canvas = document.querySelector('.canvasCircle');
    const ct = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 300;

    const center_x = canvas.width / 2;
    const center_y = canvas.height / 2;
    const Angle = Math.PI / 180;

    if (canvas.getContext) {
        ct.clearRect(0, 0, canvas.width, canvas.height);
    }

    return { "canvas": canvas, "ct": ct, "center_x": center_x, "center_y": center_y, "Angle": Angle };
}

//그리는 함수, 라디안 이용
function drawing({ canvas, ct, center_x, center_y, Angle }, color = '#00ff00', start = 0, last = 25, reset = false, r=80) {

    ct.fillStyle = color; // 색지정
    ct.beginPath(); // Path 시작
    ct.moveTo(center_x, center_y); // 중심점으로 이동

    if (!reset) {
        last = (last * 18 / 5);

        ct.arc(center_x, center_y, center_y - 50, start * Angle, (start + last) * Angle, false); //x, y, 반지름, 시작점, 끝점, 그리는 방향
    }
    else
        ct.arc(center_x, center_y, center_y - r, start * Angle, last * Angle, false); //x, y, 반지름, 시작점, 끝점, 그리는 방향
    ct.closePath(); // path 끝
    ct.fill(); // 채우기

    return start + last; //끝점 return
}


function canvasChart(obj, totalExpense) {

    const base = $('yearChart');

    const canvas = $('canvasChart');
    const ct = canvas.getContext('2d');

    canvas.width = getComputedStyle(base).getPropertyValue(
        'width'
    ).replace("px", "");

    canvas.height = 520;

    if (canvas.getContext) {
        ct.clearRect(0, 0, canvas.width, canvas.height);
    }

    const data = Object.entries(totalExpense).map(ele => [ele[0], ele[1][obj.classfi]]).filter(ele => ele[1]);

    drawBase(canvas, ct, data);

    return { "canvas": canvas, "ct": ct };
}


function drawBase(canvas, ctx, data) {

    const pad = 50;
    const chartInnerWidth = canvas.width - 2 * pad;
    const chartInnerHeight = canvas.height - 2 * pad;

    const blockWidth = chartInnerWidth / (11);
    const blockHeight = chartInnerHeight / (11);
    const ticklenhalf = 5;

    const monthObj = drawBelow(ctx, blockWidth, blockHeight, ticklenhalf, pad, chartInnerWidth, chartInnerHeight);

    pointXY(canvas, monthObj, data, ctx, blockWidth, blockHeight, ticklenhalf, pad, chartInnerHeight);


}

//각 data의 좌표
function pointXY(canvas, monthObj, data, ctx, blockWidth, blockHeight, ticklenhalf, pad, chartInnerHeight) {

    let max = 0, min = 0;
    const startX = pad;
    const startY = pad + chartInnerHeight;

    const arrX = [];
    const arrY = [];


    const m = data.map(ele => [-ele[1].minus, parseInt(ele[0].substr(ele[0].length - 2, ele[0].length))]).map(ele => {
        if (max < ele[0])
            max = ele[0];
        return ele;
    });

    m.map((ele, index) => {
        
        const X = startX + (monthObj[ele[1]]) * blockWidth, Y = startY - 450 * (ele[0] / max);

        arrX[index] = X;
        arrY[index] = Y;

        drawText(ctx, addCommaInt(ele[0]), X - 30, Y, color = "#045D8B");
    })

    lineTo(canvas, arrX, arrY, ctx);
            
}


function lineTo(canvas, arrX, arrY, ctx){

    ctx.beginPath();
    ctx.strokeStyle = '#B1C3CD';

    let pointX, pointY;

    console.log(arrX);

    for (let i = 0; i <= 7; i++) {
        if (arrX[i]) {
           
            if(!pointX){

                pointX=arrX[i];
                pointY=arrY[i];
            }else{

                ctx.moveTo(pointX, pointY);
                ctx.lineTo(arrX[i], arrY[i]);
                ctx.stroke();

                pointX=arrX[i];
                pointY=arrY[i];
            }
        }
    }
    ctx.closePath(); // path 끝

    for(let i=0; i<=7; i++){
        drawing({
            "canvas": canvas,
            "ct": ctx,
            "center_x": arrX[i],
            "center_y": arrY[i],
            "Angle": Math.PI / 180
        },
            color = '#045D8B',
            start = 0, last = 360, reset = true, r = arrY[i]-4);
    }

}


//바탕을(회색 선)을 그린다
function drawBelow(ctx, blockWidth, blockHeight, ticklenhalf, pad, chartInnerWidth, chartInnerHeight) {

    const query = queryAnswer();
    const y = parseInt(query.year), m = parseInt(query.month);

    let monthObj = {};

    ctx.beginPath();
    ctx.strokeStyle = "#F5F5F5";
    for (i = 0; i < 12 * 2 - 1; ++i) {

        let month = new Date(y, m - 7 + i, 1).getMonth() + 1;

        ctx.moveTo(pad + i * blockWidth / 2, pad + chartInnerHeight);
        drawText(ctx, month, pad + i * blockWidth, chartInnerHeight + 15 * ticklenhalf);
        ctx.lineTo(pad + i * blockWidth / 2, 0);
        ctx.stroke();

        if (i < 12) monthObj[month] = i;
    }
    ctx.strokeStyle = "black";
    ctx.closePath(); // path 끝

    drawBaseLine(ctx, pad, chartInnerWidth, chartInnerHeight);

    return monthObj;
}

//바탕의 검은 선을 그린다.
function drawBaseLine(ctx, pad, chartInnerWidth, chartInnerHeight) {

    ctx.beginPath(); // Path 시작
    ctx.moveTo(pad, pad + chartInnerHeight);
    ctx.lineTo(pad + chartInnerWidth, pad + chartInnerHeight);
    ctx.stroke();
    ctx.closePath(); // path 끝
}

//글자
function drawText(ctx, txt, x, y, color = "#888888") {

    ctx.font = "14px Noto Sans KR";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(txt, x, y);

}
