var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'Who Runs The Cash';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/> <i>{b}</i>: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Mainly Wife','Wife & Husband jointly','Mainly Husband','Other','Missing']
    },
    series: [
        {
            name:'Who Runs The Cash',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:2445, name:'Mainly Wife'},
                {value:2039, name:'Wife & Husband jointly'},
                {value:430, name:'Mainly Husband'},
                {value:5, name:'Other'},
                {value:29, name:'Missing'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}