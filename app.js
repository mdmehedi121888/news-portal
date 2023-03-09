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
    .then((data) => {
      countId(data.data.length), newsDisplay(data.data);
    });
};
const newsDisplay = (datas) => {
  const newsDisplayId = document.getElementById("news-display");
  newsDisplayId.innerHTML = "";
  for (const data of datas) {
    console.log(data);
    newsDisplayId.innerHTML += `
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.image_url}" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.details.slice(0, 300)}....</p>
      </div>
     <div class="card-footer d-flex justify-content-between align-items-center">
     <div class="d-flex">
        <div><img src="${
          data.author.img
        }" class="img-fluid rounded-circle" style="height:80px"></div>
        <div class="d-flex flex-column align-items-center justify-content-center">
        <p>${data.author.name ? data.author.name : "Not Available"}</p>
        <p class="">${
          data.author.published_date
            ? data.author.published_date
            : "Not Available"
        }</p>
        </div>
     </div>
     <div class="d-flex gap-2 align-items-center justify-content-center">
     <i class="fa-solid fa-eye fa-1x"></i>
     <p class="pt-3">${data.total_view ? data.total_view : "Not Available"}</p>
     
     </div>
     <div>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     </div>
     <div>
     <i class="fa-solid fa-right-long fa-2x text-primary"></i>
     </div>
     </div>
    </div>
  </div>
</div>
`;
  }
};
const countId = (num) => {
  document.getElementById("count-id").innerText = num;
};
