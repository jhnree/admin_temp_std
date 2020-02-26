<div>
    <input class="form-control sss" type="text" name="">
</div>

<script>
    $(function(){
        $('.sss').inputmask("99-9999999-9", 
                            {placeholder:"00-0000000-0", 
                            "oncomplete": function(){
                                    // function  here
                                }
                            });
    })
</script>