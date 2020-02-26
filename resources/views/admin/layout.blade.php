@extends('layout')
@push('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="{{asset('css/admin/sidenav.css')}}">
    <style>
        .components {
            display: none;
        }
    </style>
@endpush
@section('content')
        <div id="mySidebar" class="sidebar shadow">
            <div class="header text-center">
                <img src="{{ asset('img/aktus.png') }}" class="" style={ width= 20px; } alt="" srcset="">
            </div>
            <div class="sidebar-content">
                {{-- <div class="sticky-top px-2 searchbar my-2">
                    <input type="text" class="form-control" placeholder="Search...">
                </div> --}}
                <div class="group">
                    <div class="first-level">
                        <button class="btn form-control rounded-0 myBtn" type="button">
                            <div class="row m-0">
                                <div class="col-10">
                                    Navigations
                                </div>    
                                <div class="col-2 dd-icon">
                                    <div class="pt-2">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="second-level">
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button">Side Navigation</button>
                            <div class="third-level-content">
                                {{-- No Content --}}
                            </div>
                        </div>
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button">Navbar</button>
                            <div class="third-level-content">
                                {{-- No Content --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="group">
                    <div class="first-level">
                        <button class="btn form-control rounded-0 myBtn" type="button">
                            <div class="row m-0">
                                <div class="col-10">
                                    Pages
                                </div>    
                                <div class="col-2 dd-icon">
                                    <div class="pt-2">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="second-level">
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button" btnType="loginPage">Login Page</button>
                        </div>
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button" btnType="404Page">404 Page</button>
                        </div>
                    </div>
                </div>
                <div class="group">
                    <div class="first-level">
                        <button class="btn form-control rounded-0 myBtn" type="button">
                            <div class="row m-0">
                                <div class="col-10">
                                    Components
                                </div>    
                                <div class="col-2 dd-icon">
                                    <div class="pt-2">
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="second-level">
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button">Buttons</button>
                            <div class="third-level-content">
                                <button class="btn form-control rounded-0" type="button" btnType="square">Square Buttons</button>
                                <button class="btn form-control rounded-0" type="button" btnType="outline">Outline Buttons</button>
                                <button class="btn form-control rounded-0" type="button" btnType="brand">Brand Buttons</button>
                            </div>
                        </div>
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button">Forms</button>
                            <div class="third-level-content">
                                <button class="btn form-control rounded-0" type="button">Checkbox</button>
                                <button class="btn form-control rounded-0" type="button">Switches</button>
                                <button class="btn form-control rounded-0" type="button">Radio Button</button>
                                <button class="btn form-control rounded-0" type="button">File Input</button>
                                <button class="btn form-control rounded-0" type="button">Textbox</button>
                                <button class="btn form-control rounded-0" type="button">Datepicker</button>
                                <button class="btn form-control rounded-0" type="button">Masking</button>
                                <button class="btn form-control rounded-0" type="button">Select w/ Search</button>
                                <button class="btn form-control rounded-0" type="button">Validation</button>
                            </div>
                        </div>
                        
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button" btnType="card">Cards</button>
                        </div>
                        <div class="third-level">
                            <button class="btn form-control rounded-0 second-level-btn" type="button" btnType="toast">Toast</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div>
                    asd
                </div>
            </div>
        </div>
        <div class="container-fluid no-padding">
            <div id="main" class="px-4">
                @include('admin.components.navbar')
                @include('admin.components.card')
                @include('admin.components.login-page')
                @include('admin.components.buttons.buttons') 
                @include('admin.components.buttons.btn-outline') 
                @include('admin.components.buttons.brand') 
                @include('admin.components.toaster') 
                @include('admin.components.forms.mask')
            </div>
        </div>
@endsection
@push('script')
    <script>
        function navControls() {
            var sideNavWidth = $('.sidebar').width();
            if(sideNavWidth === 250){
                $("#mySidebar").css({"width": "0"});
                $("#main").css({"marginLeft": "0"});
                $('.dd-icon').css({"display":"none"})
            }
            else{
                $("#mySidebar").css({"width": "250px"});
                $("#main").css({"marginLeft": "250px"});
                setTimeout(() => {
                    $('.dd-icon').css({"display":"block"})
                }, 400);
            }
        }

        $(function(){
            $(".myBtn").click(function() {
                let rightIcon = `fas fa-chevron-right`;
                let chevronDown = 'fas fa-chevron-down';
                let firstLevelIcon = $(this).find(".dd-icon div i");
                let secondLevel = $(this).parent().next();
                let iClass = firstLevelIcon.attr('class');
                $('.second-level').css('display', 'none')
                $('.first-level').find('.dd-icon div i').attr('class', rightIcon);
                firstLevelIcon.attr('class', iClass === rightIcon ? chevronDown : rightIcon);
                secondLevel.css({"display": iClass === rightIcon ? "block" : "none" });
            })

            $('.second-level-btn').click(function() {
                let nextElement = $(this).next();
                if(nextElement.html() === undefined){
                    $('.components').css({'display':'none'})
                    $('.toast').toast('hide');
                    let btnType = $(this).attr('btnType');
                    switch(btnType){
                        case 'loginPage':
                            $('#loginPage').css({'display':'block'});
                            break;
                        case 'card':
                            $('#card').css({'display':'block'});
                            break;
                        case 'toast':
                            $('#toast').css({'display':'block'});
                            $('.toast').toast('show');
                        break;
                    }
                }
                else {
                    $(this).next().css({'display': nextElement.css('display') === 'block' ? 'none' : 'block'});
                }
            })
            
            $('.third-level-content Button').click(function(){
                let btnClicked = $(this).attr('btnType');
                $('.components').css({'display':'none'});
                switch (btnClicked) {
                    case 'square':
                        $('#btnBox').css({'display': 'block'});
                        break;
                    case 'outline':
                        $('#btnOutline').css({'display': 'block'});
                        break;
                    case 'brand':
                        $('#btnBrand').css({'display': 'block'});
                        break;
                    default:
                        break;
                }
            })
        })
    </script>
@endpush