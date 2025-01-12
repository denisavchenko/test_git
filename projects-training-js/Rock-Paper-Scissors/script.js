const GameContainer = document.querySelector(".container"),
UserResult = document.querySelector(".user-result img"),
CpuResult = document.querySelector(".cpu-result img"),
result = document.querySelector(".result"), 
optionImages = document.querySelectorAll(".option-image");

// console.log(GameContainer,UserResult,CpuResult,result, optionImages)

optionImages.forEach ((image,index) =>{
    image.addEventListener('click', (e)=> {
        image.classList.add("active")

        UserResult.src = CpuResult.src = 'images/rock.png'
        result.textContent = "Wait.."

        optionImages.forEach((image2,index2 ) => {
            // console.log(index,index2); 

            index !== index2 && image2.classList.remove("active")
        });

        GameContainer.classList.add('start');


        let time = setTimeout(() =>{

            GameContainer.classList.remove('start');

            let imageSrc = e.target.querySelector("img").src; 

            UserResult.src = imageSrc
            // console.log(imageSrc ); 
    
            let randomNumber =  Math.floor(Math.random() * 3);
                //    console.log(randomNumber );  
    
            let CpuImages = ["images/rock.png","images/paper.png","images/scissors.png"]
            CpuResult.src = CpuImages[randomNumber];
    
            let cpuValue = ['R', 'P', 'S'][randomNumber];
            let userValue = ['R', 'P', 'S'][index];
    
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };
    
            let outcomeValue = outcomes[userValue + cpuValue];
    
            result.textContent = userValue === cpuValue ? "Math Draw" : `${outcomeValue} Won!`
            // console.log(outcomeValue)
    
            // console.log(cpuValue, userValue)
        },2500)



        
    })
})

// optionImages.forEach((image, index) => {
//     image.addEventListener("click", (e) => {
//         image.classList.add("active");

//         UserResult.src = CpuResult.src = "images/rock.png";
//         result.textContent = "Wait..";

//         optionImages.forEach((image2, index2) => {
//             index !== index2 && image2.classList.remove("active");
//         });

//         GameContainer.classList.add("start");

//         let time = setTimeout(() => {
//             GameContainer.classList.remove("start");

//             let imageSrc = e.target.querySelector("img").src;
//             UserResult.src = imageSrc;

//             let userValue = ["R", "P", "S"][index];
//             let cpuValue;

//             // Логика, чтобы компьютер всегда побеждал
//             if (userValue === "R") cpuValue = "P"; // Бумага побеждает Камень
//             else if (userValue === "P") cpuValue = "S"; // Ножницы побеждают Бумагу
//             else if (userValue === "S") cpuValue = "R"; // Камень побеждает Ножницы

//             let CpuImages = {
//                 R: "images/rock.png",
//                 P: "images/paper.png",
//                 S: "images/scissors.png",
//             };

//             CpuResult.src = CpuImages[cpuValue];

//             result.textContent = "Cpu Won!";
//         }, 2500);
//     });
// });

