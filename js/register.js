(function ($) {

    // 페이지연결
    $('.login_nav a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // 유효성 체크 
    $('.join_form').submit(function() {

        // 이름 - 한글만가능
        var nametxt = $('#name_lbl').val()
        if (!/^[가-힣]+$/.test(nametxt)) {
            alert('이름은 한글로만 가능합니다.')
            $('#name_lbl').focus()
            $('#name_lbl').select()
            return false
        }

        //아이디 글자수 제한 7~12, 특수문자 제외
        var idtxt = $('#id_lbl').val()
        if (idtxt.length >= 7 && idtxt.length <= 12) {
            if (!/^[a-zA-Z0-9]+/.test(idtxt)) {
                alert('아이디는 영어와 숫자만 가능합니다.')
                $('#id_lbl').focus()
                $('#id_lbl').select()
                return false
            }
        } else {
            alert('아이디는 7~12글자 내에서만 가능합니다.')
            $('#id_lbl').focus()
            $('#id_lbl').select()
            return false
        }

        // 비밀번호 글자수 제한 8~16, 첫글자는 영어 대소문자만, 영어숫자특수문자 1개이상 조합
        var pass1 = $('#pw_lbl').val()
        var pass2 = $('#pwcheck_lbl').val()
        if (pass1.length >= 8 && pass1.length <= 16) {
            var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
            if (!check1.test(pass1)) {
                alert('비밀번호 첫글자는 영어 대소문자만 가능하며, 반드시 숫자와 특수문자 1개이상을 조합해 주세요.')
                $('#pw_lbl').focus()
                $('#pw_lbl').select()
                return false
            }
        } else {
            alert('비밀번호는 8~16글자 내에서만 가능합니다.')
            $('#pwcheck_lbl').focus()
            $('#pwcheck_lbl').select()
            return false
        }

        // 비밀번호 확인
        if (pass1!==pass2) {
            alert('비밀번호가 일치하지 않습니다.')
            $('#pwcheck_lbl').focus()
            $('#pwcheck_lbl').select()
            return false
        }

        // 연락처는 숫자만 가능
        var phonetxt = $('#phone_lbl').val()
        if (!/^[0-9]+$/.test(phonetxt)) {
            alert('연락처는 숫자만 가능합니다.')
            $('#phone_lbl').focus()
            $('#phone_lbl').select()
            return false
        }

        // 이메일은 한글 특수문자 제외
        var email = $('#email_lbl').val()
        if (!/^[a-zA-Z0-9]+$/.test(email)) {
            alert('이메일 형식이 잘못되었습니다.')
            $('#email_lbl').focus()
            $('#email.lbl').select()
            return false
        }
        var domain = $('#domain') = $('#domain').val()
        if (domain.length===0) {
            alert('도메인을 선택해 주세요.')
            $('#email_lbl').focus()
            return false
        } else if (!/^[a-zA-Z0-9]+[\.][a-z]+$/.test(domain)) {
            alert('도메인 형식이 잘못되었습니다.')
            $('#domain').focus()
            return false
        }
        
        return false // 나중에 삭제
    })

    // 이메일 choice 
    $('#email_choice').on('change', function(){
        $('#email_choice option:selected').each(function(){
            if($(this).val()==='nochoice') {
                $('#domain').val('')
                $('#domain').attr('disabled', true)
            } else if ($(this).val()==='self') {
                $('#domain').val('')
                $('#domain').attr('disabled', false)
            } else {
                $('#domain').val($(this).val())
                $('#domain').attr('disabled', true)
            }
        })
    })

})(jQuery)