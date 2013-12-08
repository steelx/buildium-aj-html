(function(){
    $('.tab_links li a').on('click', function(){
        $('i.arrow').remove();
        $('.selected').removeClass('selected');
        $(this).after('<i class="arrow"></i>').addClass('selected');
    });
})();
