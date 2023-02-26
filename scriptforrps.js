            let popup01 = document.getElementById("popup01");
            let popup02 = document.getElementById("popup02");
            let popup03 = document.getElementById("popup03");
            let body = document.getElementById("body");

            function openPopUp01(){
                    popup01.classList.add("open-popup01");
                    body.classList.add("open-body");
                    
            };
            function openPopUp02(){
                    popup02.classList.add("open-popup02");
                    body.classList.add("open-body");
            };
            function openPopUp03(){
                    popup03.classList.add("open-popup03");
                    body.classList.add("open-body");
            };
            function closePopUp01(){
                popup01.classList.remove("open-popup01");
                body.classList.remove("open-body");
            };
            function closePopUp02(){
                popup02.classList.remove("open-popup02");
                body.classList.remove("open-body");
            };
            function closePopUp03(){
                popup03.classList.remove("open-popup03");
                body.classList.remove("open-body");
            };
            
            function rock(){
            var a = Math.floor(Math.random()*3);
            document.getElementById("2").style.opacity="0.3";
            document.getElementById("3").style.opacity="0.3";

            if(a==0){
                document.getElementById("rps2").src="rock-removebg-preview.png";
                openPopUp02();
            }else if(a==1){
                document.getElementById("rps2").src="paper-removebg-preview.png";
                openPopUp03();
            }else{
                document.getElementById("rps2").src="scissore-removebg-preview.png";
                openPopUp01();
            }
            }

            function paper(){
                var a = Math.floor(Math.random()*3);
                document.getElementById("1").style.opacity="0.3";
                document.getElementById("3").style.opacity="0.3";

                if(a==0){
                    document.getElementById("rps2").src="rock-removebg-preview.png";
                    openPopUp01();
                }else if(a==1){
                    document.getElementById("rps2").src="paper-removebg-preview.png";
                    openPopUp02();
                }else{
                    document.getElementById("rps2").src="scissore-removebg-preview.png";
                    openPopUp03();
                }
            }

            function scissor(){
                var a = Math.floor(Math.random()*3);
                document.getElementById("1").style.opacity="0.3";
                document.getElementById("2").style.opacity="0.3";

                if(a==0){
                    document.getElementById("rps2").src="rock-removebg-preview.png";
                    openPopUp03();
                }else if(a==1){
                    document.getElementById("rps2").src="paper-removebg-preview.png";
                    openPopUp01();
                }else{
                    document.getElementById("rps2").src="scissore-removebg-preview.png";
                    openPopUp02();
                }
            }