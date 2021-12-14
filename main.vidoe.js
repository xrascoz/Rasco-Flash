let vidoepart = document.querySelector(".vidoe-part");
let vidoeplayoverlay = document.querySelector(".vidoe-play-overlay");
let videoplayandpause = document.querySelector(".video-play-and-pause");
let ex = document.querySelector(".ex");

vidoepart.addEventListener("click", function (eo) {
  vidoeplayoverlay.classList.add("vidoe-play-overlayX");
  videoplayandpause.play();
});
ex.addEventListener("click", function (eo) {
  vidoeplayoverlay.classList.remove("vidoe-play-overlayX");
  videoplayandpause.pause();
});

// arrwo go to top
let arrwo = document.querySelector(".arrwo");

document.addEventListener("scroll", function (eo) {
  if (scrollY >= 600) {
    arrwo.classList.add("reset-arrwo");
  } else {
    arrwo.classList.remove("reset-arrwo");
  }
});
arrwo.addEventListener("click", function (eo) {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

let exul = document.querySelector(".ex-ul");
let ulphone = document.querySelector(".ul-phone");
let spanheader = document.querySelector(".span-header");

exul.addEventListener("click", function (eo) {
  ulphone.classList.remove("ulphone-X");
});
spanheader.addEventListener("click", function (eo) {
  ulphone.classList.add("ulphone-X");
});

// add red color to heart
let heaertvidoe = document.querySelectorAll(".heaert-vidoe");
let posterParent = document.querySelector(".poster");

let folder = document.querySelector(".folder");

let creatppsterdelet = document.createElement("div");
creatppsterdelet.classList.add("delet-div");

heaertvidoe.forEach((element) => {
  element.addEventListener("click", function (eo) {
    element.classList.toggle("red-heart");
    let parentofpostesnafselmkan = element.parentElement.parentElement;

    if (element.classList.contains("red-heart")) {
      parentofpostesnafselmkan.prepend(element.parentElement);
    } else {
      parentofpostesnafselmkan.append(element.parentElement);
    }
  });
});

// add orange color to stare
let strae = document.querySelectorAll(".strae");

strae.forEach((element) => {
  element.addEventListener("click", function (eo) {
    // if (element.classList.contains("strae-orange")) {
    //   let deletbutton = document.querySelectorAll(
    //     ".button-delete-stare-vidoes"
    //   );
    //   // deletbutton.forEach((item) => {
    //   //   item.addEventListener("click", function (eo) {
    //   //     item.parentElement.parentElement.remove();
    //   //   });
    //   // });
    //   for (let i = 0; i < deletbutton.length; i++) {
    //     let deletbuttoni = deletbutton[i];
    //     deletbuttoni.addEventListener("click", function (eo) {
    //       deletbuttoni.parentElement.parentElement.remove();
    //     });
    //   }
    // }
    element.classList.toggle("strae-orange");
    folder.classList.add("folderX");

    // parentofelemntPoster
    let parentofelemntPoster = element.parentElement;

    // imgdposter
    let imgdposter = parentofelemntPoster
      .getElementsByTagName("img")[0]
      .getAttribute("src");

    // h2poster
    let h2poster = parentofelemntPoster.getElementsByTagName("h2")[0].innerText;

    // Pposter
    let Pposter = parentofelemntPoster.getElementsByTagName("p")[0].innerText;

    let starevideos = document.createElement("div");
    starevideos.classList.add("stare-videos");

    let parentopposter = document.querySelector(".parent-op-poster");
    // parentopposter.prepend(starevideos);

    let divmakehtml = ` 
<div class="stare-videos">
<div class="img-stare">
  <img src="${imgdposter}" alt="" srcset="" />
</div>
<div class="title-loem-stare-film">
  <h2>${h2poster}</h2>
  <p>
${Pposter}  </p>
</div>
<div class="parent-of-button-stare">
  <button class="button-glitch button-stare-vidoes">
    <i class="fas fa-play"></i> Play
  </button>
  <button class="button-glitch button-delete-stare-vidoes">
    <i class="fas fa-trash"></i> Delete
  </button>
</div>
</div>`;

    creatppsterdelet.innerHTML += divmakehtml;
    parentopposter.append(creatppsterdelet);

    let deletbutton = document.querySelectorAll(".button-delete-stare-vidoes");

    deletbutton.forEach((item) => {
      item.addEventListener("click", function (eo) {
        item.parentElement.parentElement.remove();
        let getimgdelet = item.parentElement.parentElement;

        let imgsrc = getimgdelet
          .getElementsByTagName("img")[0]
          .getAttribute("src");

        // -----------------------
        // let partposter = document.querySelectorAll(".part-poster");

        // for (let i = 0; i < partposter.length; i++) {
        //   let itemss = partposter[i];
        //   let divdelet = itemss
        //     .getElementsByTagName("img")[0]
        //     .getAttribute("src");
        //   if (imgsrc == divdelet) {
        //     let imgdelet =
        //       itemss.parentElement.getElementsByClassName("strae")[i];
        //     imgdelet.classList.remove("strae-orange");
        //   }
        // }

        // -----------------------
        // let getchildposter = posterParent.children;
        // let makegetchildposterarray = Array.from(getchildposter);

        // makegetchildposterarray.forEach((element) => {
        //   let divdelet = element
        //     .getElementsByTagName("img")[0]
        //     .getAttribute("src");
        //   if (imgsrc == divdelet) {
        //     let imgdelet =
        //       element.parentElement.getElementsByClassName("strae");
        //     imgdelet.classList.remove("strae-orange");
        //   }
        // });

        // -----------------------
        let getchildposter = posterParent.children;
        let makegetchildposterarray = Array.from(getchildposter);

        for (let i = 0; i < makegetchildposterarray.length; i++) {
          let itemss = makegetchildposterarray[i];
          let divdelet = itemss
            .getElementsByTagName("img")[0]
            .getAttribute("src");
          if (imgsrc == divdelet) {
            let imgdelet =
              itemss.parentElement.getElementsByClassName("strae")[i];
            imgdelet.classList.remove("strae-orange");
          }
          if (overlay.children.length < 3) {
            folder.classList.remove("folderX");
          }
        }

        // -----------------------
      });
    });
  });
});

// move overlay
let overlay = document.querySelector(".overlay");
let exo = document.querySelector(".exo");

exo.addEventListener("click", function (eo) {
  overlay.classList.remove("tranlatex");
  // console.log("sssss")
});

// start ovelay

folder.addEventListener("click", function (eo) {
  overlay.classList.add("tranlatex");
});
