const skill = document.getElementsByClassName("skills")[0];
const intern = document.getElementsByClassName("internship")[0];
const abt = document.getElementsByClassName("about")[0];
const course = document.getElementsByClassName("courses")[0];
const proj = document.getElementsByClassName("projects")[0];
var mynumelemt = document.getElementById("cnum");
var mytotal = document.getElementById("ctotal");

const page = [abt, intern, skill, proj, course];
var count = 0;
const handlepagechange = (pageIndex) => {
  for (let i = 0; i < page.length; i++) {
    if (i == pageIndex) {
      page[i].style.opacity = 1;
    } else {
      page[i].style.opacity = 0;
    }
  }
};

const cardselector = (cardnumber, num_of_elements) => {
  var childs = page[document.body.dataset.page].querySelectorAll(".card");
  console.log(childs);
  for (let i = 0; i < num_of_elements; i++) {
    if (i == cardnumber) {
      childs[i].style.opacity = "1";
    } else {
      childs[i].style.opacity = "0";
    }
  }
};

const about = () => {
  document.body.dataset.page = 0;
  count = 0;
  handlepagechange(document.body.dataset.page);
  console.log(document.body.dataset.page);
  var num_of_elements = page[document.body.dataset.page].childElementCount;
  mytotal.textContent = num_of_elements;
  mynumelemt.textContent = count + 1;
};
const internship = () => {
  document.body.dataset.page = 1;
  count = 0;
  handlepagechange(document.body.dataset.page);
  console.log(document.body.dataset.page);
  var num_of_elements = page[document.body.dataset.page].childElementCount;
  mytotal.textContent = num_of_elements;
  mynumelemt.textContent = count + 1;
};
const skills = () => {
  document.body.dataset.page = 2;
  count = 0;
  handlepagechange(document.body.dataset.page);
  console.log(document.body.dataset.page);
  var num_of_elements = page[document.body.dataset.page].childElementCount;
  mytotal.textContent = num_of_elements;
  mynumelemt.textContent = count + 1;
};
const projects = () => {
  document.body.dataset.page = 3;
  count = 0;
  handlepagechange(document.body.dataset.page);
  console.log(document.body.dataset.page);
  var num_of_elements = page[document.body.dataset.page].childElementCount;
  mytotal.textContent = num_of_elements;
  mynumelemt.textContent = count + 1;
};

const courses = () => {
  document.body.dataset.page = 4;
  count = 0;
  handlepagechange(document.body.dataset.page);
  console.log(document.body.dataset.page);
  var num_of_elements = page[document.body.dataset.page].childElementCount;
  mytotal.textContent = num_of_elements;
  mynumelemt.textContent = count + 1;
};

const forward = () => {
  var num_of_elements = page[document.body.dataset.page].childElementCount;
  count += 1;

  if (count >= num_of_elements) {
    count = 0;
  } else if (count < 0) {
    count = num_of_elements - 1;
  }
  mytotal.textContent = num_of_elements;
  mynumelemt.textContent = count + 1;
  cardselector(count, num_of_elements);
  console.log(count);
};
const backward = () => {
  var num_of_elements = page[document.body.dataset.page].childElementCount;
  count -= 1;
  if (count >= num_of_elements) {
    count = 0;
  } else if (count < 0) {
    count = num_of_elements - 1;
  }
  mytotal.textContent = num_of_elements;
  mynumelemt.textContent = count + 1;
  cardselector(count, num_of_elements);
  console.log(count);
};
