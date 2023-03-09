const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => displayData(data.data.news_category));
};
const displayData = (datas) => {
  const catagoryTitle = document.getElementById("catagory-title");
  for (const data of datas)
    catagoryTitle.innerHTML += `<div><button class="btn" onclick="catagoryId('${data.category_id}'),catagoryName('${data.category_name}')">${data.category_name}</button></div>`;
  //    console.log(data.category_name);
};
const catagoryName = (name) => {
  document.getElementById("catagory-id").innerText = name;
};
const catagoryId = (id) => {
  fetchDisplayNews(id);
};
const fetchDisplayNews = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => countId(data.data.length));
};
const countId = (num) => {
  document.getElementById("count-id").innerText = num;
};
loadData();
