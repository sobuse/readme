let imageVar = document.getElementById('image');
let imageArray = [
  "./image/slide (1).jpeg",
  "./image/slide (1).jpg",
  "./image/slide (1).png",
  "./image/slide (2).jpeg",
  "./image/slide (2).jpg",
  "./image/slide (2).png",
  "./image/slide (3).jpeg",
  "./image/slide (3).jpg",
  "./image/slide (3).png",
  "./image/slide (4).jpeg",
  "./image/slide (4).jpg",
  "./image/slide (4).png",
  "./image/slide (5).jpeg",
  "./image/slide (5).jpg",
  "./image/slide (5).png",
  "./image/slide (6).jpeg",
  "./image/slide (6).jpg",
  "./image/slide (6).png",
  "./image/slide (7).jpeg",
  "./image/slide (7).jpg",
  "./image/slide (7).png",
  "./image/slide (8).jpeg",
  "./image/slide (8).jpg",
  "./image/slide (8).png",
  "./image/slide (9).jpeg",
  "./image/slide (9).jpg",
  "./image/slide (9).png",
  "./image/slide (10).jpeg",
  "./image/slide (10).jpg",
  "./image/slide (10).png",
  "./image/slide (11).jpeg",
  "./image/slide (11).jpg",
  "./image/slide (11).png",
  "./image/slide (12).jpeg",
  "./image/slide (12).jpg",
  "./image/slide (12).png",
  "./image/slide (13).jpg",
  "./image/slide (13).png",
  "./image/slide (14).jpg",
  "./image/slide (14).png",
  "./image/slide (15).jpg",
  "./image/slide (15).png",
  "./image/slide (16).jpg",
  "./image/slide (16).png",
  "./image/slide (17).jpg",
  "./image/slide (17).png",
  "./image/slide (18).jpg",
  "./image/slide (18).png",
  "./image/slide (19).jpg",
  "./image/slide (19).png",
  "./image/slide (20).jpg",
  "./image/slide (20).png",
  "./image/slide (21).jpg",
  "./image/slide (21).png",
  "./image/slide (22).png",
  "./image/slide (23).png",
  "./image/slide (24).png",
  "./image/slide (25).png",
  "./image/slide (26).png",
  "./image/slide (27).png",
  "./image/slide (28).png",
  "./image/slide (29).png",
  "./image/slide (30).png",
  "./image/slide (31).png",
  "./image/slide (32).png",
  "./image/slide (33).png",
  "./image/slide (34).png",
  "./image/slide (35).png",
  "./image/slide (36).png",
  "./image/slide (37).png",
  "./image/slide (38).png",
  "./image/slide (39).png",
  "./image/slide (40).png",
  "./image/slide (41).png",
  "./image/slide (42).png",
  "./image/slide (43).png"
];

let imageIndex = 0;

function slideShow() {
    imageVar.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex >= imageArray.length){
        imageIndex = 0
    }
}

setInterval(slideShow, 3000);