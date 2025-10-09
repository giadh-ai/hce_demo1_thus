import React from "react";

const Trang2 = () => {
  const sinhviens = [
    {
      name: "Nguyễn Văn A",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      mssv: "SV001",
      lop: "DHKTPM18A",
    },
    {
      name: "Trần Thị B",
      image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
      mssv: "SV002",
      lop: "DHKTPM18A",
    },
    {
      name: "Lê Văn C",
      image: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      mssv: "SV003",
      lop: "DHKTPM18A",
    },
    {
      name: "Phạm Thị D",
      image: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
      mssv: "SV004",
      lop: "DHKTPM18A",
    },
    {
      name: "Đỗ Văn E",
      image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
      mssv: "SV005",
      lop: "DHKTPM18A",
    },
    {
      name: "Ngô Thị F",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      mssv: "SV006",
      lop: "DHKTPM18A",
    },
  ];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Thông tin sinh viên thực hiện</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {sinhviens.map((sv, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={sv.image}
              alt={sv.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>{sv.name}</h3>
            <p>MSSV: {sv.mssv}</p>
            <p>Lớp: {sv.lop}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
