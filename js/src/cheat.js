//崩溃欺骗
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/failure.ico");
        $('[rel="shortcut icon"]').attr('href', "/failure.ico");
        document.title = '╭(°A°`)╮ awsl！！！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/16.ico");
        $('[rel="shortcut icon"]').attr('href', "/images/16.ico");
        document.title = '(ฅ>ω<*ฅ) 骗你哒 ~ ';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});