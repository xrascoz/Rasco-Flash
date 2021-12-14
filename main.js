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
        }

        // -----------------------
      });
    });
  });
});

// move overlay
let overlay = document.querySelector(".overlay");
let ex = document.querySelector(".ex");
ex.addEventListener("click", function (eo) {
  overlay.classList.remove("tranlatex");
});
// start ovelay

folder.addEventListener("click", function (eo) {
  overlay.classList.add("tranlatex");
  if (creatppsterdelet.length == 0) {
    folder.classList.remove("folderX");
  }
});

// ------------
// arwwo

let arrwo = document.querySelector(".arrwo");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    arrwo.classList.add("reset-arrwo");
  } else {
    arrwo.classList.remove("reset-arrwo");
  }
};

arrwo.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// let cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (eo) => {
//   let leftpothion = eo.pageX + 4;
//   let toppothion = eo.pageY + 4;
//   cursor.style.left = `${leftpothion}px`;
//   cursor.style.top = `${toppothion}px`;
// });

// ul-content
let ulcontent = document.querySelectorAll(".ul-content a");
let posterparent = document.querySelector(".poster-parent");

ulcontent.forEach((element, index) => {
  element.addEventListener("click", function (eo) {
    let activeElemnt = element.parentElement.parentElement
      .getElementsByClassName("active-a")[0]
      .classList.remove("active-a");
    element.classList.add("active-a");

    // eo.target.classList.add("active-a");

    posterparent
      .getElementsByClassName("poster-active")[0]
      .classList.remove("poster-active");

    posterparent
      .getElementsByClassName("toggel-poster")
      [index].classList.add("poster-active");
    eo.preventDefault();

    // ----------------------

    // let x = eo.clientX - eo.target.offsetLeft;
    // console.log(x);
    // let y = eo.clientY - eo.target.offsetTop;
    // console.log(y);

    // let span = document.createElement("span");
    // span.classList.add("span-style");
    // let left = `${x}+ px`;
    // console.log(left);
    // let top = `${y}+ px`;
    // console.log(top);
    // span.style.left = left;
    // span.style.top = top;

    // this.appendChild(span);
    // setTimeout(() => {
    //   span.remove();
    // }, 1000);
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

let playvidoepost = document.querySelectorAll(".play-vidoe-post");

playvidoepost.forEach((element) => {
  element.addEventListener("click", function (eo) {
    location.href = "index-video.html";
  });
});

// ------------------

// let carouselimg = document.querySelectorAll(".carousel img");

// carouselimg.forEach((element) => {
//   element.addEventListener("click", function (eo) {
//     location.href = "index-video.html";
//   });
// });
