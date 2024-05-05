// Hero
import hero from "../assets/Hero/hero.jpg";
import hero2 from "../assets/Hero/hero2.jpg";
// Management
import person1 from "../assets/Management/person1.png";
import person2 from "../assets/Management/person2.png";
import person3 from "../assets/Management/person3.png";
import person4 from "../assets/Management/person4.png";
import person5 from "../assets/Management/person5.png";
import person6 from "../assets/Management/person6.png";
// Gallery
import gallery1 from "../assets/Gallery/gallery1.jpg";
import gallery2 from "../assets/Gallery/gallery2.jpg";
import gallery3 from "../assets/Gallery/gallery3.jpg";
import gallery4 from "../assets/Gallery/gallery4.jpg";
import gallery5 from "../assets/Gallery/gallery5.jpg";
import gallery6 from "../assets/Gallery/gallery6.jpg";
// Latest News
import news1 from "../assets/News/LatestNews/latest1.jpg";
// News
import newsItem1 from "../assets/News/NewsItem/newsItem1.jpeg";
import newsItem2 from "../assets/News/NewsItem/newsItem2.jpeg";
import newsItem3 from "../assets/News/NewsItem/newsItem3.jpg";
import newsItem4 from "../assets/News/NewsItem/newsItem4.jpg";

// News

const data = {
  heroSwiper: [
    {
      id: 1,
      img: hero,
    },
    {
      id: 2,
      img: hero2,
    },
  ],
  navbarRoutes: [
    {
      id: 1,
      path: "/#about",
      name: "Haqqımızda",
    },
    {
      id: 2,
      path: "/#management",
      name: "Rəhbərlik",
    },
    {
      id: 3,
      path: "/#gallery",
      name: "Qalereya",
    },
    {
      id: 4,
      path: "/#contact",
      name: "Bizimlə Əlaqə",
    },
  ],
  managementItems: [
    {
      id: 1,
      img: person1,
      name: "Eldar",
      surname: "Məmmədov",
      role: "Direktor",
    },
    {
      id: 2,
      img: person2,
      name: "Tərlan",
      surname: "Rəşidov",
      role: "Direktor Müavini",
    },
    {
      id: 3,
      img: person3,
      name: "Səxavət",
      surname: "Ataşov",
      role: "Baş Mühəndis",
    },
    {
      id: 4,
      img: person4,
      name: "Şövlə",
      surname: "Zeynalova",
      role: "Baş mühasib",
    },
    {
      id: 5,
      img: person5,
      name: "Aydın",
      surname: "Cabbarlı",
      role: "Təsərrüfat Müdiri",
    },
    {
      id: 6,
      img: person6,
      name: "Hafiz",
      surname: "Eminov",
      role: "Sahə Rəisi",
    },
  ],
  galleryItems: [
    {
      id: 1,
      img: gallery1,
    },
    {
      id: 2,
      img: gallery2,
    },
    {
      id: 3,
      img: gallery3,
    },
    {
      id: 4,
      img: gallery4,
    },
    {
      id: 5,
      img: gallery5,
    },
    {
      id: 6,
      img: gallery6,
    },
  ],
  latestNewsItem: [
    {
      id: 1,
      img: news1,
      title:
        "Bələdiyyələrin iştirakıyla Binəqədi rayonunda “Yaşıl dünya naminə həmrəylik ili”nə həsr olunan növbəti ağacəkmə aksiyası keçirilib",
      date: "04-05-2024",
    },
  ],
  newsItems: [
    {
      id: 1,
      title:
        "Bələdiyyələrin iştirakıyla Binəqədi rayonunda “Yaşıl dünya naminə həmrəylik ili”nə həsr olunan növbəti ağacəkmə aksiyası keçirilib",
      date: "04-05-2024",
      description:
        "Bu gün  Ədliyyə Nazirliyi Bələdiyyələrlə İş mərkəzinin təşəbbüsü, Binəqədi Bələdiyyəsinin və Azsu Ekoloji Qurğu MMC-nin təşkilatçılığı, habelə  Bakı şəhərində fəaliyyət göstərən bələdiyyələrin nümayəndələrinin iştirakıyla Binəqədi rayonu ərazisində ağacəkmə, o cümlədən sahilyanı zonada təmizlik aksiyası keçirilib. Aksiyada Bələdiyyələrlə iş Mərkəzinin rəisi Rəhman Məmmədov, habelə mərkəzin məsul işçiləri, paytaxtda formalar bələdiyyələrin sədrləri və qulluqçuları iştirak ediblər. Bu Bələdiyyələrlə iş mərkəzinin təşəbbüsü ilə keçirilən ikinci aksiyadır. Bundan əvvəl belə bir aksiya Nərimanov bələdiyyəsinin təşkilatçılığı ilə keçirilmişdir.Bu aksiyaların keçirilməsində məqsəd yaşıllaşdırma ənənələri irsini davam etdirmək və insanlar arasında ekoloji mədəniyyəti, təbiətə olan qayğı hissini təbliğ etməkdən, habelə çimərlik zonasında təmizliyə riayət olunmasını təbliğ etməkdən ibarət olub.Aksiyada 200 ədəd “Eldar şamı” ağacı əkilərək aqrotexniki xidmət göstərilib. Əlavə edək ki, dövlət başçısının Sərəncamı ilə 2024-cü il “Yaşıl dünya naminə həmrəylik ili” elan olunub. Ədliyyə Nazirliyi tərəfindən Azərbaycan Respublikasında 2024-cü ilin “Yaşıl dünya naminə həmrəylik ili” elan edilməsi haqqında Azərbaycan Respublikası Prezidentinin 25 dekabr 2023-cü il tarixli  Sərəncamından irəli gələn məsələlər barədə” tövsiyə hazırlanaraq bütün bələdiyyələrə göndərilib. Tövsiyəyə uyğun olaraq ölkənin ayrı-ayrı bələdiyyələri tərəfindən çoxsaylı ağacəkmə aksiyaları və ekoloji tədbirlər həyata keçirilməsi nəzərdə tutulub. Sonda aksiya iştirakçıları ilə xatirə şəkli çəkilib.",
      images: [newsItem1, newsItem2, newsItem3, newsItem4],
    },
  ],
};

export default data;
