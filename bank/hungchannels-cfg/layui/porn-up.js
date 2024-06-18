const Wussun_Music=["https://api.thanhdieu.com/random-music.php",];let index=Math.floor(Math.random()*Wussun_Music.length);const audio=new Audio(Wussun_Music[index]);function wussunplay(){audio.play()}document.addEventListener("click",wussunplay()),audio.addEventListener("ended",function(){index=(index+1)%Wussun_Music.length,audio.src=Wussun_Music[index],audio.play()});
      window.addEventListener("DOMContentLoaded", function() {
				window.MyNavCard = $MGC({
					icon: `../hungchannels-cfg/img/9b1354f4-455d-4ac1-b803-b8d8a63a5272.jpg`,
					name: `Võ Quang Phúc`,
					info: "Chào mừng đến với profile thông tin thanh toán,tại đây bạn có thể sao chép tài khoản ngân hàng 1 cách nhanh chóng",
					z_index: 9999,
					blur: ".main",
					lang: "en-US",
					mini: false,
					darkmode: 3,
					/*
					darkmode: Chế độ ban đêm
					Giá trị mặc định: 1
					Giá trị tùy chọn: 0、1、2、3
					0: Tắt chế độ ban đêm
					1: Theo dõi hệ thống (nếu hệ thống hỗ trợ chế độ ban đêm)
					2: Bật chế độ ban đêm từ 18h đến 6h sáng tùy thời điểm
					3: Luôn ở chế độ ban đêm
					*/
					maxWidth: "380px",
					/*
					maxWidth: Chiều rộng tối đa
					*/
					fontFamily: "",
					/*
					fontFamily: Phông chữ, trống hoặc không được đặt sẽ sử dụng phông chữ mặc định
					*/
					closeDuration: 15000,
					/*
					closeDuration: Sau khi đóng popup, bao lâu thì nó không còn hiển thị nữa (ngay cả khi trang được làm mới thì nó không còn hiển thị nữa nhưng vẫn có thể mở thủ công thông qua nút mini)
					Giá trị mặc định: 60000 (60 giây)
					Lưu ý: closeDuration chỉ hoạt động khi defaultClosed được đặt thành false
					*/
					defaultClosed: false,
					/*
					defaultClosed: Popup bị tắt theo mặc định
					Giá trị mặc định: false
					Giá trị tùy chọn: true / false
					Lưu ý: Nếu defaultClosed là true thì closeDuration sẽ không hoạt động.
					*/
					defaultLinkIcon: "fa-solid fa-paw",
					fontawesome: {
						"type": "svg",
						"CDN": "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/js/all.min.js"
					},
					iconLinks: [{
						"title": "My Github",
						"icon": "fa-brands fa-github",
					}, {
						"title": "My Blog",
						"icon": "fa-brands fa-instagram"
					},],
					links: [{
						"title": "Contact Facebook",
                        "url": `https://www.facebook.com/8164743716921746`,
						"type": "primary",
						"target": "_blank"
					}, {
						"title": "Contact Zalo",
                        "url": `https://zalo.me/0777744987`,
                        "type": "primary",
						"target": "_blank"
					},],
				});
			});