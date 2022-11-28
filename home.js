const container = document.querySelector(".menu-container_thinhhanh.list-phim");
const listThinhHanh = [
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/14/hunpdugz_1920x1080-tap18816e92c29345632c48c0012b1644a245_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },

    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/09/08/ab36m7vm_1920x1080-congly_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/07/zcm61m78_microsoftteams-image500212b2cc6f9ffcbc6f375bb9dcb0fb_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss   :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/09/30/o4z7g6tt_1920x1080-vdqghalan1b13240da8ed40330cd46ad437be3e1b_296_168.webp",
        ctry :"VN" ,
        year :"2022",
        ss   :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/03/0qz5v0jk_1920x1080-congtovienlachluat_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss   :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/13/d33sv4yu_bannerca98c51709f86fdd891192ccc8c592fc_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss   :"SS1",
    },
];
const listMoiNhat = [
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/14/j17qa39v_1920x1080-thuongthuc-dq_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/09/22/7etw9zje_1920x1080-blackpanther_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/17/8ctzyd1v_bannerhighlight_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/07/11/of6bzgim_1920x1080-tinhsujangokjung_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/03/24/63r9ahnm_1920x1080-vomynuongce93e71a27f8586ec36becd31bee3e91_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },
    {
        link :"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/08/11/rmn5nzqf_1920x1080-caubenguoigo_296_168.webp",
        ctry :"VN",
        year :"2022",
        ss  :"SS1",
    },
    
]
function getHTMLContent (list){
    let result ="";
    for (let i= 0;i< list.length;i++){
        result += `
        <a href="" class="menu-container_thinhhanh-list-phim">
            <img class="img-phim" src="${list[i].link}" alt="phim1" style="width: 207px;height: 117px">
            <div class="menu-container_thinhhanh-list-phim-detail">
                <i class="fa-sharp fa-solid fa-music" style="font-size: 10px;"></i>
                <div class="menu-container_thinhhanh-list-phim-detail-bnt">
                    <button class="menu-container_thinhhanh-list-phim-detail-bnt_play">
                        <i class="fa-solid fa-play" style="color: black; font-size: 8px;"></i>
                        <div class="menu-container_thinhhanh-list-phim-detail-bnt_play-text">Xem Ngay</div>
                    </button>
                    <button class="menu-container_thinhhanh-list-phim-detail-bnt_decr">
                        <i class="fa-solid fa-info" style="font-size: 8px;"></i>
                        <div class="menu-container_thinhhanh-list-phim-detail-bnt_decr-text" style="color: white;">Chi tiết</div>
                    </button>
                    <button class="menu-container_thinhhanh-list-phim-detail-bnt_add">
                        <div class="menu-container_thinhhanh-list-phim-detail-bnt_add-icon" style="font-size: 8px;">+</div>
                        <div class="menu-container_thinhhanh-list-phim-detail-bnt_add-text">Danh sách</div>
                    </button>
                </div>
                <div class="menu-container_thinhhanh-list-phim-detail-info">
                    <div class="menu-container_thinhhanh-list-phim-detail-info-ctry">${list[i].ctry}</div>
                    <div class="menu-container_thinhhanh-list-phim-detail-info-year">${list[i].year}</div>
                    <div class="menu-container_thinhhanh-list-phim-detail-info-season">${list[i].ss}</div>
                </div>
            </div>
    </a>
    
        `;
    };    
    return result;
}
function insertContent (query, html){
    const element = document.querySelector(query);
    element.innerHTML = html;
}
insertContent(".list-thinh-hanh .menu-container_thinhhanh-list", getHTMLContent(listThinhHanh));
insertContent(".list-moi-nhat .menu-container_thinhhanh-list", getHTMLContent(listMoiNhat));

// $(document).ready(function(){
//     $('.list-thinh-hanh .menu-container_thinhhanh-list').slick({
//         $('.menu-container_thinhhanh-list').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             fade: true,
//             asNavFor: '.slider-nav'
//           });
//           $('.slider-nav').slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             asNavFor: '.slider-for',
//             dots: true,
//             centerMode: true,
//             focusOnSelect: true
//           });
//     });
//   });