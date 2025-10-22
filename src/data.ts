import type { Post } from "./types/post";

export const initialPosts: Post[] = [
  {
    id: 1,
    title: "Khám phá React Router DOM trong 5 phút",
    author: "Nguyễn Việt",
    thumbnail: "https://picsum.photos/300/200?1",
    content:
      "React Router DOM giúp điều hướng trong ứng dụng SPA một cách dễ dàng. Bạn có thể tạo các route động, sử dụng Link để chuyển trang mà không cần reload. Ngoài ra, React Router còn hỗ trợ nested routes, protected routes và các hook tiện lợi như useNavigate, useParams. Việc quản lý trạng thái điều hướng trở nên đơn giản hơn rất nhiều, giúp bạn xây dựng ứng dụng web hiện đại, mượt mà và thân thiện với người dùng.",
    category: "Công nghệ",
    date: "2025-10-01",
  },
  {
    id: 2,
    title: "Chuyến du lịch Đà Lạt đáng nhớ",
    author: "Linh Nhi",
    thumbnail: "https://picsum.photos/300/200?2",
    content:
      "Đà Lạt mùa này thật đẹp, hoa nở khắp nơi, khí hậu mát mẻ. Tôi đã có dịp tham quan vườn hoa thành phố, thưởng thức đặc sản như bánh căn, sữa đậu nành nóng và dạo quanh hồ Xuân Hương vào buổi sáng sớm. Những con đường quanh co, những ngôi nhà nhỏ xinh và không khí trong lành khiến chuyến đi trở nên tuyệt vời. Nếu có dịp, bạn hãy thử trải nghiệm Đà Lạt vào mùa thu nhé!",
    category: "Du lịch",
    date: "2025-10-02",
  },
  {
    id: 3,
    title: "Cách pha cà phê ngon tại nhà",
    author: "Trung Hiếu",
    thumbnail: "https://picsum.photos/300/200?3",
    content:
      "Pha cà phê ngon không khó, chỉ cần chú ý tỉ lệ nước và bột cà phê. Đầu tiên, hãy chọn loại cà phê nguyên chất, xay vừa phải. Đun nước sôi khoảng 90-95 độ, rót đều lên bột cà phê trong phin, đợi nước ngấm rồi thêm sữa hoặc đường tùy khẩu vị. Một ly cà phê sáng sẽ giúp bạn tỉnh táo và bắt đầu ngày mới đầy năng lượng. Đừng quên thử các cách pha khác như pour-over hoặc cold brew để thay đổi hương vị.",
    category: "Ẩm thực",
    date: "2025-10-03",
  },
  {
    id: 4,
    title: "Cách sống tối giản để hạnh phúc hơn",
    author: "Bảo Ngọc",
    thumbnail: "https://picsum.photos/300/200?4",
    content:
      "Sống tối giản giúp ta tập trung vào điều quan trọng trong cuộc sống. Hãy bắt đầu bằng việc loại bỏ những vật dụng không cần thiết, giữ lại những thứ thực sự mang lại giá trị. Việc này không chỉ giúp không gian sống gọn gàng mà còn giảm căng thẳng, tăng sự tập trung và cảm giác hạnh phúc. Hãy thử áp dụng lối sống tối giản vào công việc, các mối quan hệ và cả thói quen hàng ngày để cảm nhận sự thay đổi tích cực.",
    category: "Đời sống",
    date: "2025-10-04",
  },
  {
    id: 5,
    title: "Những xu hướng công nghệ năm 2025",
    author: "Huyền Trang",
    thumbnail: "https://picsum.photos/300/200?5",
    content:
      "Trí tuệ nhân tạo, Web3, và thực tế ảo đang dẫn đầu xu hướng công nghệ năm 2025. AI ngày càng thông minh, hỗ trợ tự động hóa và cá nhân hóa trải nghiệm người dùng. Web3 mở ra kỷ nguyên mới cho internet phi tập trung, bảo mật và minh bạch hơn. Thực tế ảo và thực tế tăng cường giúp kết nối thế giới số với đời thực, tạo ra nhiều ứng dụng trong giáo dục, giải trí và thương mại. Hãy cập nhật kiến thức để không bị tụt lại phía sau!",
    category: "Công nghệ",
    date: "2025-10-05",
  },
  {
    id: 6,
    title: "Bí quyết giữ sức khỏe trong mùa đông",
    author: "Minh Quân",
    thumbnail: "https://picsum.photos/300/200?6",
    content:
      "Mùa đông dễ khiến cơ thể mệt mỏi, cảm lạnh. Để giữ sức khỏe, hãy ăn đủ chất, bổ sung vitamin C, tập thể dục nhẹ nhàng và giữ ấm cơ thể. Uống đủ nước, ngủ đủ giấc và tránh thức khuya cũng rất quan trọng. Ngoài ra, bạn nên hạn chế tiếp xúc với người bị cảm cúm và vệ sinh tay thường xuyên. Một chế độ sinh hoạt lành mạnh sẽ giúp bạn vượt qua mùa đông khỏe mạnh và tràn đầy năng lượng.",
    category: "Đời sống",
    date: "2025-10-06",
  },
  {
    id: 7,
    title: "Khám phá ẩm thực đường phố Sài Gòn",
    author: "Phương Anh",
    thumbnail: "https://picsum.photos/300/200?7",
    content:
      "Ẩm thực đường phố Sài Gòn vô cùng đa dạng và hấp dẫn. Từ bánh tráng trộn, hủ tiếu gõ, đến các loại chè và nước mía, mỗi món đều mang hương vị đặc trưng riêng. Bạn có thể dễ dàng tìm thấy các quán ăn nhỏ ven đường với giá cả phải chăng và phục vụ nhanh chóng. Đừng quên thử các món ăn vặt như bắp xào, cá viên chiên và bánh mì để cảm nhận sự phong phú của ẩm thực nơi đây.",
    category: "Ẩm thực",
    date: "2025-10-07",
  },
];
