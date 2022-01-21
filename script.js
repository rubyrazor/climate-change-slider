$("#slider").mousedown(function () {
    $("#container").mousemove(function (e) {
        console.log($("#container").offset().left);
        console.log($("#container").width());
        if (
            e.pageX < $("#container").offset().left + 3 ||
            e.pageX >
                $("#container").offset().left +
                    $("#container").width() - 3
        ) {
            return;
        } else {
            $("#slider").css({
                left: e.pageX - $("#container").offset().left + "px",
            });
            $("#top-img").css({
                width: e.pageX - $("#container").offset().left + "px",
            });
        }
    });
});

$(document).mouseup(function () {
    $("#container").off("mousemove");
});
