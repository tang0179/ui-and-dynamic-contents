$(function(){
    $('#add').click(function(){
        $('.modal').modal('toggle');
        $(this).addClass('add_0').removeClass('add_1')
    })
    $('#saveItem').click(function(){
        var newItem = $('#newItem').val();
        if(newItem == ''){
            alert('please enter new item');
            return false;
        } else {
            $('#newItem').val('');
            var html = '<li>'+newItem+'</li>';
            $('ol').append(html);
            $('.modal').modal('toggle')
        }

    })
    $(document).on('click','.btn-default,.btn-primary,.close,.modal-backdrop',function(){
        $('#add').addClass('add_1').removeClass('add_0');
        $('#newItem').val('');
    })

    $(document).on('click','ol li',function(){
        $(this).remove();
    })
})