const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const date = new Date();
$(function() {
    username();
    password();
    maskInput();
    brandButtons();
    datePicker();
    sidenav();
});
function datePicker() {
    $(".datepicker input").val(
        months[date.getUTCMonth()] +
            " " +
            date.getUTCDate() +
            ", " +
            date.getUTCFullYear()
    );
    $(".datepicker").datepicker({
        clearBtn: true,
        format: "MM dd, yyyy",
        todayHighlight: true
    });
    $(".datepicker").keydown(function() {
        return false;
    });
}
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
    // Accept Alpha Characters both uppercase and lowercase
    $("input.alpha").inputmask({ regex: "[a-z, A-Z]*" });
    // Accept Numeric Characters
    $("input.numeric").inputmask({ regex: "[0-9]*" });
    // Mobile NUmber
    $("input.mobile-no")
        .inputmask("99-999-999-9999", { placeholder: "00-000-000-0000" })
        .val("639");
    // Adding Placeholder
    $("input.sss").attr({ placeholder: "00-0000000-0" });
    $("input.tin").attr({ placeholder: "000-000-000-000" });
    $("input.hdmf").attr({ placeholder: "0000-0000-0000" });
    $("input.philhealth").attr({ placeholder: "00-000000000-0" });

    // Defining required characters
    $("input.sss").inputmask("99-9999999-9", {
        placeholder: "00-0000000-0",
        oncomplete: function() {
            // function  here
        }
    });
    $("input.tin").inputmask("999-999-999-999", {
        placeholder: "000-000-000-000",
        oncomplete: function() {
            // function  here
        }
    });
    $("input.hdmf").inputmask("9999-9999-9999", {
        placeholder: "0000-0000-0000",
        oncomplete: function() {
            // function  here
        }
    });
    $("input.philhealth").inputmask("00-999999999-9", {
        placeholder: "00-000000000-0",
        oncomplete: function() {
            // function  here
        }
    });
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
function sidenav() {
    $(".myBtn").click(function() {
        let rightIcon = `fas fa-chevron-right`;
        let chevronDown = "fas fa-chevron-down";
        let firstLevelIcon = $(this).find(".dd-icon div i");
        let secondLevel = $(this)
            .parent()
            .next();
        let iClass = firstLevelIcon.attr("class");
        $(".second-level").css("display", "none");
        $(".first-level")
            .find(".dd-icon div i")
            .attr("class", rightIcon);
        firstLevelIcon.attr(
            "class",
            iClass === rightIcon ? chevronDown : rightIcon
        );
        secondLevel.css({ display: iClass === rightIcon ? "block" : "none" });
    });

    $(".second-level-btn").click(function() {
        let nextElement = $(this).next();
        if (nextElement.html() === undefined) {
            $(".components").css({ display: "none" });
            $(".toast").toast("hide");
            let btnType = $(this).attr("btnType");
            switch (btnType) {
                case "loginPage":
                    $("#loginPage").css({ display: "block" });
                    break;
                case "card":
                    $("#card").css({ display: "block" });
                    break;
                case "toast":
                    $("#toast").css({ display: "block" });
                    $(".toast").toast("show");
                    break;
            }
        } else {
            $(this)
                .next()
                .css({
                    display:
                        nextElement.css("display") === "block"
                            ? "none"
                            : "block"
                });
        }
    });

    $(".third-level-content Button").click(function() {
        let btnClicked = $(this).attr("btnType");
        $(".components").css({ display: "none" });
        switch (btnClicked) {
            case "square":
                $("#btnBox").css({ display: "block" });
                break;
            case "outline":
                $("#btnOutline").css({ display: "block" });
                break;
            case "brand":
                $("#btnBrand").css({ display: "block" });
                break;
            default:
                break;
        }
    });
}
