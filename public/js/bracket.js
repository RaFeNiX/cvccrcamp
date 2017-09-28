function edit_fn(container, data, doneCb) {
    let input = $('<input type="text">')
    input.val(data ? `${data.flag}:${data.name}` : '')
    container.html(input)
    input.focus()
    input.blur(function () {
        let inputValue = input.val()
        if (inputValue.length === 0) {
            doneCb(null);
        } else {
            let flagAndName = inputValue.split(':')
            if (flagAndName.length < 2) doneCb(null)
            doneCb({ flag: flagAndName[0], name: flagAndName[1] })
        }
    })
}

function render_fn(container, data, score, state) {
    switch (state) {
        case "empty-bye":
            container.append("BYE")
            return;
        case "empty-tbd":
            container.append("à jogar")
            return;
        case "entry-default-win":
            container.append("Vitória por BYE")
            return;
        case "entry-no-score":
        case "entry-complete":
            container
                .append(`<img src="images/cards/${data.flag}.png" height="17" width="14"/> `)
                .append(data.name)
            return;
    }
}

let container = $('#brackets'),
    containerObj = {
        teamWidth: 150,
        scoreWidth: 20,
        matchMargin: 50,
        roundMargin: 80,
        decorator: { edit: edit_fn, render: render_fn }
    }
function saveFn(data, userData) {
    $.post(userData,data).always(function(){
        location.reload();
    })
}
containerObj.userData = "http://localhost:3000/camp/save";
containerObj.save = saveFn;
$(function () {
    eval($('#what').html())
})