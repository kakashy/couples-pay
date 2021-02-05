var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'WhoRunsTheCash';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Mainly Wife','Husband & Wife Jointly','Mainly Husband','Other','Missing']
    },
    series: [
        {
            name:'Who Runs The Cash',
            type:'pie',
            radius: ['30%', '90%'],
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
                {value:264, name:'Mainly Wife'},
                {value:3360, name:'Husband & Wife Jointly'},
                {value:2493, name:'Mainly Husband'},
                {value:6, name:'Other'},
                {value:18, name:'Missing'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}