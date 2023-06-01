var jasyptModule = {

    init : () => {
        jasyptModule.bind();
    },

    bind : () => {

        $("#btnEncrypt").on("click", () => {
            jasyptModule.callEnc();
        });

        $("#btnDecrypt").on("click", () => {
            jasyptModule.callDec();
        });

        $("#btnCopy").on("click", () => {
            if($("#hiddenResult").val()) {
                $("#hiddenResult").attr("type", "text");
                $("#hiddenResult").select();
                document.execCommand('copy');
                $("#hiddenResult").attr("type", "hidden");
                alert('복사하였습니다.');
            }
        });

    },

    getParam : () => {
        return {
            "key" : $("#key").val(),
            "str" : $("#str").val()
        }
    },

    callEnc : () => {
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

    display : ( result ) => {
        $("#resultArea").text( result );
        $("#hiddenResult").val( result );
    },

};