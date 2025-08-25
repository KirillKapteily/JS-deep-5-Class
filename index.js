// PNotify.success({ text: "Opetation succeed", delay: 1500 });
// PNotify.error({ text: "Opetation failed", delay: 1500 });
// PNotify.alert({ text: "Opetation's workin'", delay: 1500 });
// PNotify.info({ text: "Opetation lol", delay: 1500 });
// PNotify.notice({ text: "Opetation lol", delay: 1500 });
//2 Those librarys are giving so much pain)
// new Chart (document.getElementById("idcan"), {type: "doughnut", data: {
//     labels: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'],
//     datasets: [{ label:'Відвідування', data:[12,19,3,5,2,3,7]}]
//   }});
//3
let modalBtn = document.querySelector("#modalBtn");

modalBtn.addEventListener("click", () => {
    const instans = basicLightbox.create('<img src="./logo.png">');
    instans.show();
}); 