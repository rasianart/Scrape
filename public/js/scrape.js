$(document).ready(() => {

    $('#submit-comment').on('click', (e) => {
        e.preventDefault();
        let articleTitle = $('form').attr('data-title');
        let userName = $('#name').val().trim();
        let userComment = $('#comment').val().trim();
        let postObj = {
            title: articleTitle,
            name: userName,
            comment: userComment
        };
        if (userName === '' || userComment === '') {
            console.log('please enter name and comment');
            return;
        }
        $.post('/submitcomment', postObj, (req, res) => {

            $('#comment').val('Posted');
        });
    })

});
