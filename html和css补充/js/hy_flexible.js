// 1、获取html元素
const htmlEl = document.documentElement
// console.log(htmlEl);

function setRemUnit() {
    // 2、获取html的宽度（视口宽度）；
    const htmlWidth = htmlEl.clientWidth
    console.log(htmlWidth);

    // 3、根据宽度计算一个html的fontSize的大小；自定义设置fontSize的大小为当前屏幕宽度的十分之一；
    const htmlFontSize = htmlWidth / 10;

    // 4、将fontSize设置到html上；
    htmlEl.style.fontSize = htmlFontSize + "px"
}

// 保证第一次进来时，可以设置一次fontSize；
setRemUnit()

// 监听窗口变化，当屏幕尺寸发生变化时，实时来修改html的fontSize；
window.addEventListener('resize', setRemUnit)