import { useState, useEffect } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        width: "80%",
        textAlign: "right", // Menempatkan elemen di kanan dalam section
        padding: "40px", // Sesuai tata letak dari gambar yang kamu kirim
        display: isVisible ? "block" : "none",
      }}
    >
      <a
        href="#"
        style={{
          textDecoration: "none",
          color: "#e74c3c",
          fontSize: "14px",
          fontWeight: "bold",
          display: "inline-block",
        }}
        onClick={scrollToTop}
      >
        Back to top{" "}
        <span
          style={{
            display: "inline-block",
            marginLeft: "5px",
            transform: "translateY(-2px)",
          }}
        >
          ↑
        </span>
      </a>
    </div>
  );
}

export default BackToTop;
