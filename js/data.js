const danhsachDienThoai = [
  {
    id: 1,
    ten: "Samsung Galaxy S24 Ultra 12GB 256GB",
    gia: 28380000,
    hinh: "images/samsungs24/ss-1.jpg",
    moTa: "Đặc điểm nổi bật của Samsung Galaxy S24 Ultra 12GB 256GB:Samsung Galaxy S24 Ultra sở hữu AI thông minh, hiệu năng cực đỉnh cũng đa tính năng cao cấp nhất. Đi kèm với đó là những cải tiến tích cực vượt trội hơn về camera, vi xử lý, và tích hợp AI toàn diện, đây là sản phẩm không thể bỏ qua cho người yêu công nghệ. Cùng xem giá bán và đánh giá chi tiết nhất dòng điện thoại này xem có nên mua không ngay nhé!",
    gallery: ["images/samsungs24/ss-2.jpg", "images/samsungs24/ss-3.jpg", "images/samsungs24/ss-4.jpg"]
  },
  {
    id: 2,
    ten: "iPhone 13 128GB | Chính hãng VN/A",
    gia: 12030000,
    hinh: "images/ip13/ip13-1.jpg",
    moTa: "Đặc điểm nổi bật của iPhone 13 128GB | Chính hãng VN/A:iPhone 13 thường được trang bị chip A15 Bionic mạnh mẽ với 6 nhân CPU và 4 nhân GPU, cung cấp mức hiệu năng vượt trội, giúp xử lý nhanh chóng các tác vụ nặng. Màn hình Super Retina XDR 6.1 inch trên máy cũng được đánh giá cao khi mang tới hình ảnh sắc nét với độ sáng cao, tối ưu hóa trải nghiệm xem nội dung dưới mọi điều kiện ánh sáng. Chưa hết, iPhone13 còn sở hữu hệ thống camera kép 12MP với công nghệ ổn định hình ảnh quang học (OIS) cải thiện khả năng quay film, chụp hình, ngay cả khi đang ở trong môi trường ánh sáng yếu.",
    gallery: ["images/ip13/ip13-2.jpg", "images/ip13/ip13-3.jpg","images/ip13/ip13-4.jpg"]
  },
  {
    id: 3,
    ten: "Samsung Galaxy S24 Plus 12GB 256GB",
    gia: 15890000,
    hinh: "images/samsungs24plus/ss-1.jpg",
    moTa: "Đặc điểm nổi bật của Samsung Galaxy S24 Plus 12GB 256GB:Samsung Galaxy S24 Plus là một trong những siêu phẩm điện thoại đang làm mưa làm gió trong giới công nghệ hiện nay.",
    gallery: ["images/samsungs24plus/ss-2.jpg", "images/samsungs24plus/ss-3.jpg","images/samsungs24plus/ss-4.jpg"]
  },
  {
    id: 4,
    ten: "iPhone 17 Pro 256GB | Chính hãng",
    gia: 34218000,
    hinh: "images/ip17/ip17-1.jpg",
    moTa: "Đặc điểm nổi bật của iPhone 17 Pro 256GB | Chính hãng:iPhone 17 Pro 256GB giá tốt được Apple trang bị chip A19 Pro mạnh mẽ giúp xử lý đa tác vụ nặng mà không lo bị giật lag. Ngoài ra, dòng 17 Pro lần này còn được thiết kế thêm màn hình Super Retina XDR 6.3 inch mang lại khả năng hiển thị rực rỡ cùng camera đến 48MP giúp thước phim, hình ảnh tạo ra rõ nét và thật Pro hơn nữa",
    gallery: ["images/ip17/ip17-2.jpg", "images/ip17/ip17-3.jpg","images/ip17/ip17-4.jpg"]
  },
  {
    id: 5,
    ten: "iPhone Air 256GB | Chính hãng",
    gia: 25739000,
    hinh: "images/ipair/ip-1.jpg",
    moTa: "Đặc điểm nổi bật của iPhone Air 256GB | Chính hãng:iPhone Air 256GB được Apple ra mắt với thiết kế siêu mỏng 5,64mm, khung titanium bền bỉ và màn hình Super Retina XDR 6,5 inch hỗ trợ ProMotion 120Hz. Máy trang bị chip A19 Pro kết hợp N1, mang lại hiệu suất mạnh mẽ. Camera Fusion 48MP cùng camera trước 18MP Center Stage giúp người dùng ghi lại hình ảnh sắc nét, quay video 4K ổn định.",
    gallery: ["images/ipair/ip-2.jpg", "images/ipair/ip-3.jpg","images/ipair/ip-4.jpg"]
  },
  {
    id: 6,
    ten: "OPPO Reno13 F 5G 12GB 256GB",
    gia: 6490500,
    hinh: "images/reno13f/rn-1.jpg",
    moTa: "Đặc điểm nổi bật của OPPO Reno13 F 5G 12GB 256GB:OPPO Reno13 F là dòng điện thoại tầm trung của thương hiệu OPPO ra mắt vào ngày 03/01/2025. Reno13 F nổi bật với màn hình AMOLED 6.67 inchs, tần số quét 120Hz sắc nét và độ sáng 1200 nits. Thiết kế hiện đại, kháng nước bụi chuẩn IP69, pin 5800mAh sạc nhanh, phiên bản 5G (chip Snapdragon 6 Gen 1) cùng các tính năng AI hỗ trợ camera, tập trung vào trải nghiệm hình ảnh và độ bền bỉ. ",
    gallery: ["images/reno13f/rn-2.jpg", "images/reno13f/rn-3.jpg","images/reno13f/rn-4.jpg"]
  },
  {
    id: 7,
    ten: "Samsung Galaxy S26 Ultra",
    gia: 34815000,
    hinh: "images/samsungs26/ss-1.jpg",
    moTa: "Đặc điểm nổi bật của Samsung Galaxy S26 Ultra 12GB 256GB:Samsung Galaxy S26 Ultra mang đến trải nghiệm flagship đỉnh cao nhờ sự kết hợp giữa màn hình 6.9 inch Dynamic AMOLED 2X 120Hz với độ sáng kỷ lục 2600 nits. Sức mạnh phần cứng được bảo chứng bởi vi xử lý Snapdragon 8 Elite Gen 5 cùng RAM 12GB, đảm bảo mọi tác vụ đa nhiệm và chơi game đồ họa nặng luôn vận hành mượt mà. Không chỉ dừng lại ở hiệu năng, thiết bị còn là công cụ sáng tạo nội dung chuyên nghiệp với khả năng quay video 8K@30fps sắc nét, mang lại chất lượng hình ảnh chuẩn điện ảnh.",
    gallery: ["images/samsungs26/ss-2.jpg", "images/samsungs26/ss-3.jpg","images/samsungs26/ss-4.jpg"]
  },
  {
    id: 8,
    ten: "MacBook Pro 14 M5 10CPU 10GPU 16GB 512GB | Chính hãng Apple Việt Nam",
    gia: 41190000,
    hinh: "images/macbook/mb-1.jpg",
    moTa: "Đặc điểm nổi bật:Macbook Pro 14 inch chip M5 16GB 512GB trang bị chip M5, RAM 16GB cùng ổ cứng SSD 512GB, mang đến hiệu năng mạnh mẽ và đa nhiệm mượt mà trong mọi tác vụ. Máy trang bị màn hình Liquid Retina XDR 14.2 inch sắc nét và hỗ trợ ProMotion 120Hz. Mẫu Macbook Pro này còn sở hữu hệ điều hành macOS Tahoe mới tích hợp Apple Intelligence.",
    gallery: ["images/macbook/mb-2.jpg", "images/macbook/mb-3.jpg","images/macbook/mb-4.jpg"]
  },
  {
    id: 9,
    ten: "Laptop ASUS Vivobook S 14 FLIP TP3402VA-LZ632W",
    gia: 18990000,
    hinh: "images/asus/as-1.jpg",
    moTa: "Đặc điểm nổi bật:Laptop ASUS Vivobook S 14 Flip TP3402VA-LZ632W sở hữu bộ CPU Intel Core i5-13420H đi cùng RAM 16GB chuẩn DDR4, cộng thêm ổ cứng 512GB M.2 PCIe 4.0. Mẫu laptop ASUS Vivobook này được trang bị màn hình có độ phân giải WUXGA với kích thước 14 inch. Bên cạnh đó, thiết kế Flip còn cho phép người dùng chuyển đổi laptop và tablet theo nhu cầu.",
    gallery: ["images/asus/as-2.jpg", "images/asus/as-3.jpg","images/asus/as-4.jpg"]
  },
  {
    id: 10,
    ten: "Tai nghe Bluetooth Apple AirPods 4 | Chính hãng Apple Việt Nam",
    gia: 3455000,
    hinh: "images/airpods/ap-1.jpg",
    moTa: "Đặc điểm nổi bật:AirPods 4 là tai nghe không dây Apple với chip H2 cùng EQ thích ứng và âm thanh không gian cá nhân hóa mang lại trải nghiệm âm thanh ấn tượng. Tai nghe được trang bị Micrô kép với cảm biến quang học cùng micro hướng vào trong giúp thu âm tốt hơn. Cùng với điều khiển chạm cho phép người dùng điều khiển qua các thao tác nhấn tiện lợi.",
    gallery: ["images/airpods/ap-2.jpg", "images/airpods/ap-3.jpg","images/airpods/ap-4.jpg"]
  },
  {
    id: 11,
    ten: "iPad A16 Wifi 128GB 2025 | Chính hãng Apple Việt Nam",
    gia: 9015000,
    hinh: "images/ipada16/ip-1.jpg",
    moTa: "Đặc điểm nổi bật:iPad A16 nổi bật với chip A16 mạnh mẽ, màn hình Liquid Retina 11 inch sắc nét, cùng thiết kế mỏng nhẹ mang đến phong cách hiện đại cho người dùng. Thiết bị còn trang bị khả năng kết nối tốt với Apple Pencil và bàn phím Magic Keyboard Folio. Thiết bị có pin bền, sạc tốc độ cao USB-C, mang lại trải nghiệm liền mạch.",
    gallery: ["images/ipada16/ip-2.jpg", "images/ipada16/ip-3.jpg","images/ipada16/ip-4.jpg"]
  },
  {
    id: 12,
    ten: "Xiaomi 15T 5G 12GB 512GB",
    gia: 13690000,
    hinh: "images/xiaomi/xm-1.jpg",
    moTa: "Đặc điểm nổi bật của Xiaomi 15T 5G 12GB 512GB:Xiaomi 15T được trang bị vi xử lý MediaTek Dimensity 8.400-Ultra mạnh mẽ, sẵn sàng chinh phục các tựa game đỉnh cao. Sự kết hợp hoàn hảo giữa màn hình lớn 6.83 inch và camera Leica 50MP mang lại trải nghiệm nghe nhìn và nhiếp ảnh chuyên nghiệp. Đặc biệt, viên pin khủng 5.500 mAh kèm sạc nhanh 67W đảm bảo chiếc máy luôn là người bạn đồng hành bền bỉ. ",
    gallery: ["images/xiaomi/xm-2.jpg", "images/xiaomi/xm-3.jpg","images/xiaomi/xm-4.jpg"]
  },
  {
    id: 13,
    ten: "iPhone 17e 256GB | Chính hãng",
    gia: 17900000,
    hinh: "images/ip17e/ip-1.jpg",
    moTa: "Đặc điểm nổi bật của iPhone 17e 256GB | Chính hãng:Apple iPhone 17e thuộc mẫu iPhone giá rẻ mới nhất có giá khởi điểm từ 17,99 triệu đồng. Máy nổi bật với nhiều ưu điểm vượt trội hơn so với iPhone 16e tiền nhiệm. Đây chính là lựa chọn không nên bỏ qua trong mức giá thấp",
    gallery: ["images/ip17e/ip-2.jpg", "images/ip17e/ip-3.jpg","images/ip17e/ip-4.jpg"]
  },
  {
    id: 14,
    ten: "Máy ảnh Canon EOS R50 (RF-S18-45mm f/4.5-6.3 IS STM)",
    gia: 19393000,
    hinh: "images/canoneos/cn-1.jpg",
    moTa: "Đặc điểm nổi bật:Canon EOS R50 nổi bật với cảm biến APS-C CMOS 24.2MP và bộ xử lý DIGIC X cho chất lượng hình ảnh sắc nét. Máy hỗ trợ quay video UHD 4K 30fps, lấy nét thông minh Dual Pixel CMOS AF II và tốc độ chụp liên tiếp lên đến 15fps, phù hợp cho vlogger, nhà sáng tạo nội dung và người mới bắt đầu. Canon R50 là mẫu máy ảnh mirrorless nhỏ gọn chỉ 375g thuộc hệ EOS R cùng màn hình cảm ứng xoay lật 3 inch giúp người dùng dễ dàng quay vlog, chụp ảnh và sáng tạo nội dung mọi lúc mọi nơi.",
    gallery: ["images/canoneos/cn-2.jpg", "images/canoneos/cn-3.jpg","images/canoneos/cn-4.jpg"]
  },
  {
    id: 15,
    ten: "Máy ảnh Canon EOS RP (Body Only)",
    gia: 17900000,
    hinh: "images/canoneos-rp/cn-1.jpg",
    moTa: "Đặc điểm nổi bật:Máy ảnh Canon RP sở hữu ngàm ống kính tân tiến RF kết hợp hỗ trợ quay video 4K UHD (3840*2160) với thiết kế nhỏ gọn hơn và mang đến hình ảnh rõ nét. Được trang bị tính năng Face và Eyes tracking, giúp tăng cường khả năng theo dõi khuôn mặt và mắt tạo ra những bức ảnh sắc nét và đẹp mắt. Cảm biến CMOS full-frame 26.2MP mang lại chất lượng hình ảnh rõ nét và nâng cao chi tiết hình ảnh.",
    gallery: ["images/canoneos-rp/cn-2.jpg", "images/canoneos-rp/cn-3.jpg","images/canoneos-rp/cn-4.jpg"]
  },
  {
    id: 16,
    ten: "Bàn phím cơ không dây FL-Esports CMK75 Desert Grey",
    gia: 1341000,
    hinh: "images/banphim/bp-1.jpg",
    moTa: "Đặc điểm nổi bật:Bàn phím cơ không dây FL-Esports CMK75 Desert Grey nổi bật với thiết kế sang trọng, kết nối ba chế độ linh hoạt và pin 3000 mAh cho thời gian dùng dài. Cấu trúc Gasket, switch hot-swap cùng đệm tiêu âm giúp gõ êm tay, hạn chế tối đa tiếng ồn. Hệ thống LED RGB rực rỡ kèm màn hình hiển thị tùy chỉnh đem lại không gian làm việc và giải trí đầy cá tính.",
    gallery: ["images/banphim/bp-2.jpg", "images/banphim/bp-3.jpg","images/banphim/bp-4.jpg"]
  },
  {
    id: 17,
    ten: "Chuột không dây Logitech MX Anywhere 3S",
    gia: 1440000,
    hinh: "images/logitech-mx/chuot-1.jpg",
    moTa: "Đặc điểm nổi bật:Chuột không dây Logitech MX Anywhere 3S với thiết kế kết nối không dây tiện lợi cùng màu đen huyền bí sẽ hài hòa với máy tính bàn hay laptop của bạn. Với tính năng Quiet Clicks của chuột Logitech giúp bạn tập trung vào công việc mà không bị mất tập trung. Trải nghiệm cảm biến 8k DPI nhanh chóng, chuẩn trong từng cú nhấp chuột.",
    gallery: ["images/logitech-mx/chuot-2.jpg", "images/logitech-mx/chuot-3.jpg","images/logitech-mx/chuot-4.jpg"]
  },
  {
    id: 18,
    ten: "Bàn phím cơ không dây FL-Esports CMK75 Lake Placid Blue",
    gia: 1341000,
    hinh: "images/banphimcmk75/bp-1.jpg",
    moTa: "Đặc điểm nổi bật:Bàn phím cơ không dây FL-Esports CMK75 Lake Placid Blue với layout 75% tích hợp màn hình mini, núm xoay điều khiển âm lượng cùng 3 chế độ kết nối. Bàn phím sử dụng keycap FSA, hỗ trợ Hot-Swap, nâng cấp trải nghiệm gõ nhập của người dùng. Ngoài ra, cấu trúc bàn phím cũng được điều chỉnh để mang lại cảm giác gõ êm ái.",
    gallery: ["images/banphimcmk75/bp-2.jpg", "images/banphimcmk75/bp-3.jpg","images/banphimcmk75/bp-4.jpg"]
  },
  {
    id: 19,
    ten: "Chuột không dây Logitech Lift Vertical",
    gia: 1251000,
    hinh: "images/logitech-lift/chuot-1.jpg",
    moTa: "Chuột không dây công thái học Logitech Lift Vertical – Thiết kế độc đáo:Chuột không dây công thái học Logitech Lift Vertical mang đến cảm giác thoải mái khi cầm nắm làm việc trong thời gian dài từ sáng đến tối.",
    gallery: ["images/logitech-lift/chuot-2.jpg", "images/logitech-lift/chuot-3.jpg","images/logitech-lift/chuot-4.jpg"]
  },
  {
    id: 20,
    ten: "Sạc Cuktech 3C1A No.10 màn hình ultra 120W",
    gia: 990000,
    hinh: "images/cuktech/ct-1.jpg",
    moTa: "Đặc điểm nổi bật:Củ sạc Cuktech 3C1A No.10 màn hình Ultra kèm cáp C to C 120W AD1204U là giải pháp nạp năng lượng hiện đại với công nghệ GaN cùng thiết kế 4 cổng đa năng. Màn hình LED 1.57 inch hỗ trợ theo dõi thông số dòng điện và trạng thái sạc của các thiết bị một cách trực quan. Phụ kiện còn sở hữu công suất sạc 120W mạnh mẽ.",
    gallery: ["images/cuktech/ct-2.jpg", "images/cuktech/ct-3.jpg","images/cuktech/ct-4.jpg"]
  }

];

