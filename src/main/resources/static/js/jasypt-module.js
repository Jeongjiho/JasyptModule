var jasyptModule = {

    init : function() {
        jasyptModule.bind();
    },

    bind : function() {

        // 숫자만 입력
        //common.onlyNumber( $("#printUnit") );

        $("#btnEncrypt").on("click", function() {
            jasyptModule.callEnc();
        });

        $("#btnDecrypt").on("click", function() {
            jasyptModule.callDec();
        });

    },

    validation : function() {

        if( !$("#requestUrl").val() ) {
            alert("URL을 입력해주세요.");
            $("#requestUrl").focus();
            return false;
        }

        if( !CONSTRACT.REG_EXP.URL.test($("#requestUrl").val().toLowerCase()) ) {
            alert("URL형식을 입력해주세요.");
            $("#requestUrl").focus();
            return false;
        }

        if( !$("#type").val() ) {
            alert("타입을 선택해주세요.");
            $("#type").focus();
            return false;
        }

        if( !$("#printUnit").val() ) {
            alert("출력 묶음 단위를 입력해주세요.");
            $("#printUnit").focus();
            return false;
        }

        return true;

    },

    getParam : () => {
        return {
            "key" : $("#key").val(),
            "str" : $("#str").val()
        }
    },

    callEnc : function() {
        $.ajax({
            url: "/module/enc",
            method: "POST",
            data: jasyptModule.getParam(),
            success : function( data ) {
                try {
                    jasyptModule.display(data);
                }
                catch (ex) {
                    console.error(ex);
                    alert("에러가 발생했습니다.\n관리자에게 문의하세요.");
                }

            }
        });
    },

    callDec : () => {
        $.ajax({
            url: "/module/dec",
            method: "POST",
            data: jasyptModule.getParam(),
            success : function( data ) {
                try {
                    jasyptModule.display(data);
                }
                catch (ex) {
                    console.error(ex);
                    alert("에러가 발생했습니다.\n관리자에게 문의하세요.");
                }

            }
        });
    },

    display : function( result ) {
        $("#resultArea").text( result );
    },

};