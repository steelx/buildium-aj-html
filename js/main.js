(function(){
    $('.tab_links li a, .tabs li a').on('click', function(){
        $('i.arrow').remove();
        $('.selected').removeClass('selected');
        $(this).append('<i class="arrow"></i>').addClass('selected');
    });

    $('.tabs li a').on('click', function(e){
        var $hash = $($(this).attr('href'));
        console.log($hash);
        $('.tabs_content').hide();
        $hash.fadeIn(200);
        e.preventDefault();
    });
    $('.tabs a.selected').trigger('click');
})();
