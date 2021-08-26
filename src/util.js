
const echartsDom = [];  //所有echarts图表的数组
/**
 * 将echarts图表变为自适应
 * @param {*} eDom 
 */
export function echartsResize(eDom) {   
    echartsDom.push(eDom);
    window.onresize = () => {
        echartsDom.forEach((it)=>{
            it.resize();
        })
    };
}
