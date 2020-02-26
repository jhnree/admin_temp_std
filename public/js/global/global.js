$(function() {
    username();
    password();
    maskInput();
    brandButtons();
    $(".password").click(function() {
        let passwordInput = $(this)
            .parent()
            .find("input");
        let eyeParent = $(this).find("span"); // hidden/shown
        if (eyeParent.attr("status") === "hidden") {
            eyeParent.html('<i class="far fa-eye-slash"></i>');
            passwordInput.attr("type", "text");
            eyeParent.attr("status", "shown");
        } else {
            eyeParent.html('<i class="far fa-eye"></i>');
            passwordInput.attr("type", "password");
            eyeParent.attr("status", "hidden");
        }
    });
});
function password() {
    $(".password")
        .find("span")
        .html('<i class="far fa-eye"></i>');
    $(".password")
        .find("span")
        .attr("status", "hidden");
    $(".password")
        .parent()
        .find("input")
        .attr({ type: "password", placeholder: "Password" });
    $(".password")
        .parent()
        .find(".input-group-prepend span")
        .html('<i class="fas fa-key"></i>');
}
function username() {
    $(".username")
        .find("span")
        .html('<i class="fas fa-user"></i>');
    $(".username")
        .parent()
        .find("input")
        .attr({ placeholder: "Username" });
}

function maskInput() {
    $("#sss").attr({ placeholder: "00-0000000-0" });
    $("#sss").mask("99-9999999-9");
}

function brandButtons() {
    var brandList = {
        behance: "<i class='fab fa-behance'></i><span>Behance</span>",
        css3: "<i class='fab fa-css3'></i><span>CSS3</span>",
        dribbble: "<i class='fab fa-dribbble'></i><span>Dribble</span>",
        dropbox: "<i class='fab fa-dropbox'></i><span>Dropbox</span>",
        facebook: "<i class='fab fa-facebook-f'></i><span>Facebook</span>",
        flickr: "<i class='fab fa-flickr'></i><span>Flickr</span>",
        github: "<i class='fab fa-github'></i><span>Github</span>",
        googlePlus:
            "<i class='fab fa-google-plus-g'></i><span>Google Plus</span>",
        html5: "<i class='fab fa-html5'></i><span>HTML5</span>",
        instagram: "<i class='fab fa-instagram'></i><span>Instagram</span>",
        linkedin: "<i class='fab fa-linkedin-in'></i><span>LinkedIn</span>",
        openid: "<i class='fab fa-openid'></i><span>OpenID</span>",
        pinterest: "<i class='fab fa-pinterest'></i><span>Pinterest</span>",
        reddit: "<i class='fab fa-reddit'></i><span>Reddit</span>",
        spotify: "<i class='fab fa-spotify'></i><span>Spotify</span>",
        stackOverflow:
            "<i class='fab fa-stack-overflow'></i><span>Stack-Overflow</span>",
        tumblr: "<i class='fab fa-tumblr'></i><span>Tumblr</span>",
        twitter: "<i class='fab fa-twitter'></i><span>Twitter</span>",
        vimeo: "<i class='fab fa-vimeo-v'></i><span>Vimeo</span>",
        vk: "<i class='fab fa-vk'></i><span>VK</span>",
        xing: "<i class='fab fa-xing'></i><span>Xing</span>",
        yahoo: "<i class='fab fa-yahoo'></i><span>Yahoo</span>",
        youtube: "<i class='fab fa-youtube'></i><span>Youtube</span>"
    };
    var brandBtnClass = [];

    $(".brand-btn").each(function() {
        brandBtnClass.push(
            $(this)
                .attr("class")
                .split(" ")
        );
    });

    $.each(brandBtnClass, function(key, value) {
        $.each(brandList, function(key1, value1) {
            if (jQuery.inArray(key1, value) == 1) {
                $(`.brand-btn.${key1}`).html(value1);
                return false;
            }
        });
    });
}
