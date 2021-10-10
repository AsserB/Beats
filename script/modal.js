$('.form').submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name = 'name']");
  const phone = form.find("[name = 'phone']");
  const comment = form.find("[name = 'comment']");
  const to = form.find("[name = 'to']");

  const modal = $("#modal");
  const content = modal.find(".modal__content");

  modal.removeClass("error-modal");

  [name, phone, comment, to].forEach(field => {

    field.removeClass("input--error")
    if (field.val().trim() == "") {
      field.addClass("input--error")
    }
  })

  const errorField = form.find(".input--error");

  if (errorField.length == 0) {
    $.ajax({
      type: "post",
      url: "https://webdev-api.loftschool.com/sendmail",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val()
      },
      success: data => {
        content.text(data.message)
        //console.log(data)
        $.fancybox.open({
          src: "#modal",
          type: "inline"
        })
      },
      error: data =>{
        const message = data.responseJSON.message;
        content.text(message);
        console.log(data);
        modal.addClass("error-modal");
        $.fancybox.open({
          src: "#modal",
          type: "inline"
        })
      }
    });
  }


})

$(".app-button__close").click(function (e) {
  e.preventDefault();
  $.fancybox.close()
});