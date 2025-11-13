let image_list = ["Pictures/Koenigsegg_gemera_1.jpg", "Pictures/space_for_four.jpg", "Pictures/creature_comforts.png", "Pictures/dark_matter.png"]

let heading_list = ["Pure Koenigsegg", "Space for four", "Creature comforts", "Dark Matter"];

let description_list = [
    "As Koenigsegg’s first four-seater and with over 1MW of power, the Gemera has pioneered a revolutionary new vehicle category - the Mega GT.  The Gemera's silhouette is long, sleek and minimal, while still keeping that iconic Koenigsegg aesthetic. ",

    "The Gemera comfortably seats four tall adults with room for four carry-on suitcases in the back. Its megacar pedigree is obvious from its sleek exterior. This is the Koenigsegg megacar experience that can be shared with family and friends in a way previously unknown.",

    "The Koenigsegg Gemera has a beautiful, luxuriously appointed interior that’s perfectly suited to an epic Grand Tour. It is equipped with perfectly padded memory foam seats, eight cup holders - four heated and four chilled - entertainment screens with Apple CarPlay for both front and rear passengers, USB connectivity and two induction charging ports. The 11-speaker audio system is out of this world.",

    "The Gemera features the revolutionary Koenigsegg Dark Matter e-motor - reducing weight and complexity while raising total power and providing instant torque from 0rpm."
]

function change_description(index) {
    let container = document.getElementById("equal_respect_features");
    let image = container.querySelector("img");
    let container_second = document.getElementById("description");
    let heading = container_second.querySelector("h2");
    let para = container_second.querySelector("p");
    image.style.opacity = 0;
    heading.style.opacity = 0;
    para.style.opacity = 0;

    let nav_container = document.getElementById("equal_respect_options");
    let button_list = nav_container.querySelectorAll("button");

    setTimeout(() => {
        button_list.forEach(button => {
            button.style.color = "white"
        })
        button_list[index].style.color = " #FF4F00";

        image.setAttribute("src", image_list[index]);
        para.textContent = description_list[index];
        heading.textContent = heading_list[index];

        para.style.opacity = 1;
        heading.style.opacity = 1;
        image.style.opacity = 1;
    }, 400)
}

let specs_section = document.getElementById("specs");

function show_spec_section(entries) {

    let entry_one = entries[0];

    if (entry_one.isIntersecting == true) {
        entry_one.target.classList.add("show");
    }
}

let specs_observer = new IntersectionObserver(show_spec_section, { threshold: 0.5 });
specs_observer.observe(specs_section);

let gallery_image = document.getElementById("gallery");

function shrink_gallery(entries) {
    if (entries[0].isIntersecting == true) {
        entries[0].target.classList.add("shrink");
    }
    else {
        entries[0].target.classList.remove("shrink");
    }
}

let gallery_observer = new IntersectionObserver(shrink_gallery, { threshold: 0.4 });
gallery_observer.observe(gallery_image);