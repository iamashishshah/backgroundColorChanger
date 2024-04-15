  // // console.log("Ashish")
        // let buttons = document.querySelectorAll(".button")
        // // console.log(buttons)
        // let body = document.body;
        // // console.log(body)
        // buttons.forEach((button) =>{
        //     // console.log(button)
        //     button.addEventListener("click", (e) =>{
        //         // console.log(e)  // it gives what event is happening
        //         // console.log(e.target)  //it gives from which target that event occur
        //         body.style.backgroundColor = e.target.id;
        //     })
        // })

        let buttons = document.querySelectorAll(".button")
        let body = document.body;
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                body.style.backgroundColor = e.target.id;

            })
        })

        // let colorInput = document.querySelector("#colorInput")
        // console.log(colorInput)
        const colorInput = document.getElementById('colorInput');
        colorInput.addEventListener('change', () => {
            // console.log('Selected color:', colorInput.value);
            body.style.backgroundColor = colorInput.value;
        })