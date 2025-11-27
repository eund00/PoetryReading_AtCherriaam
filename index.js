document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".open_btn");
  const txt = document.querySelector(".open_text");
  const win = document.getElementById("open_window");
  const closeBtn = document.getElementById("open_close"); // ✅ 수정된 부분

  // 열기 버튼 클릭
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const idx = Number(this.dataset.index);
      txt.textContent = contents[idx].text;
      win.style.display = "block";
      document.body.classList.add("open_body");
    });
  });

  // 닫기 버튼 클릭
  closeBtn.addEventListener("click", () => {
    win.style.display = "none";
    document.body.classList.remove("open_body");
  });
});
