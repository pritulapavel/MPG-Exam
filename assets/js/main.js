document.querySelectorAll(".stack").forEach((card, i) => {
  //ვეძებთ კლასს .stack, ვანიჭებთ card ცვლადს და loop ში ვაგრძელებთ
  const img = card.querySelector(".card-image").src; // ვპოულობთ .stack კონტეინერის შიგნით .card-image კლასს და ვწერთ ცვლადში img
  card.style.setProperty("--img-stack", `url(${img})`); // ვიღებთ img დან src და setProperty-თ ქარდს style პარამეტრით ვუმატებთ css ცვლადს --img-stack
});

const images = document.querySelectorAll(".card-image"); //ეძებს ყველა კლასს რომელსაც ააქვს სახელი .card-image
images.forEach((img) => {
  // ციკლი სადაც დანარჩენ ლოგიკას ასრულებს
  const applyColor = () => {
    // კონტსანტა რომლის მეშვეობითაც სურათიდან მიღებულ ფერს ადებს .browse-card -ზე
    const color = getAverageColor(img); // ვღებულობთ კონსტანტას ფერით, მიღებული ფუნქციიდან getAverageColor()
    const wrapper = img.closest(".browse-card"); // ვწვდებით სურათის მშობელ კონტეინერს .browse-card და ვწერთ კონსტანტაში wrapper

    if (wrapper) {
      //გადამოწმებაა თუ ნამდვილად არის wrapper კონსტანტა მაშინ ვანიჭებთ ბექგრაუნდ ფერს
      wrapper.style.backgroundColor = color;
    }
  };

  if (img.complete) {
    //დამატებითი გადამოწმებები
    applyColor();
  } else {
    img.addEventListener("load", applyColor);
  }
});

function getAverageColor(img) {
  //აკეთებს სურათიდან canvas და ძირითად ფერს იღებს, აბრუნებს შემდგომ მაგას rgb-ში
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.drawImage(img, 0, 0);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  for (let i = 0; i < data.length; i += 80) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  r = Math.floor(r / count);
  g = Math.floor(g / count);
  b = Math.floor(b / count);

  return `rgb(${r}, ${g}, ${b})`;
}

// <<<<<<<<<<<<<<<<<<<<<< Discover Page Scripts: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// ფუნქცია რომ ანიმაციები  ივსებოდეს ტანმიმდევრულად,
// მხოლოდ იმ  სექციაში, რომელიც ვიუპორტში ხვდება
const scrollSections = document.querySelectorAll(".scrolls");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".scroll-bar");

        let index = 0;

        function animateBars() {
          bars[index].classList.add("active");

          bars[index].addEventListener(
            "animationend",
            () => {
              index++;

              if (index < bars.length) {
                animateBars();
              }
            },
            { once: true },
          );
        }

        animateBars();

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.6,
  },
);

scrollSections.forEach((section) => observer.observe(section));

//  Hide  fixed menu while scrolling down and  show it  when customer will scroll up
let lastScroll = 0;
const nav = document.querySelector(".mobile-filters nav");
const main = document.querySelector(".main-discover");
main.addEventListener("scroll", () => {
  const currentScroll = main.scrollTop;

  if (currentScroll > lastScroll) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
