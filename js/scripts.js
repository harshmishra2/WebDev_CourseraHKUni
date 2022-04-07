$(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });

        $('#reservationModalButton').click(function(){
            //launch modal
            $('#myModal').modal('show'); 

            //for closing
            $(".close").click(function(){
                $("#reservationModalButton").modal("hide");
            })
        })

        $("#loginButton").click(function () {
        // Open modal on page load
        $("#loginModal").modal("show");

        // Close modal on button click
        $(".close").click(function () {
          $("#loginModal").modal("hide");
        });
      });