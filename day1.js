function calculate() {
                var input = $('#text1:first'); //texting comments
                var val = input.val();
                var output = $('#text1_out:first');
                output.text(val);
                console.log(val);
            }