// Задание 1

// const h2 = document.getElementById("main-heading");
// h2.style.color = "red";
// h2.style.fontSize = "32px";
// h2.textContent = "Popular products"

// const aside = document.querySelector('aside');
// const parent = aside.parentNode;
// parent.removeChild(aside);

// 3 не сделано

// const h3 = document.querySelector('h3');
// h3.classList.remove('small heading');
// console.log(h3.classList)

// Задание 2

const array = [
  {
    icon: "https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c",

    title: "Twitter",
    discription:
      "Твиттер – это бесплатная система микроблогинга, с помощью которой пользователи (твиттеряне) публикуют короткие текстовые заметки через web-интерфейс, службы мгновенных сообщений, SMS или сторонние программы. ",
    link: "https://ria.ru/organization_Twitter_Inc/",
  },
  
  {
    icon: "https://img.freepik.com/premium-vector/ikonka-instagram-v-stile-vyrezki-iz-bumagi-ikonki-social-nyh-setei_505135-235.jpg?semt=ais_hybrid",

    title: "Instagram",
    discription:
      "Инстаграм – это бесплатная система микроблогинга, с помощью которой пользователи (твиттеряне) публикуют короткие текстовые заметки через web-интерфейс, службы мгновенных сообщений, SMS или сторонние программы. ",
    link: "https://ru.wikipedia.org/wiki/Instagram",
  },
];

array.flat(array)

const container = document.getElementById("list");

array.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.className = "list-item";

  const image = document.createElement("img");
  image.src = element.icon;
  image.className = "img";

  const h1 = document.createElement("h1");
  h1.textContent = element.title;
  h1.className = "h1";

  const p = document.createElement("p");
  p.textContent = element.discription;
  p.className = "p";

  const button = document.createElement("button");
  button.className = "button"
  
  const a = document.createElement("a");
  a.href = element.link;
  a.textContent = "READ MORE";
  a.className = "a"
  
  button.append(a)

 

  listItem.append(image, h1, p, button);
  container.append(listItem);
});

// Задание 3