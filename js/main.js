(function(){
    $('.tab_links li a').on('click', function(){
        $('.tab_links').find('i.arrow').remove();
        $('.tab_links').find('a.selected').removeClass('selected');
        $(this).append('<i class="arrow"></i>').addClass('selected');
    });

    $('.tabs li a').on('click', function(e){
        $('.tabs').find('i.arrow').remove();
        $('.tabs').find('a.selected').removeClass('selected');
        $(this).append('<i class="arrow"></i>').addClass('selected');

        var $hash = $($(this).attr('href'));
        console.log($hash);
        $('.tabs_content').hide();
        $hash.fadeIn(200);
        e.preventDefault();
    });
    $('.tabs li a.selected').trigger('click');

})();
