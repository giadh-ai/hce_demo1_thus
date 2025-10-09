import "./css/main.css";

const Home = () => {
  var tenlop = "K19 Cao đẳng Kinh tế TP.HCM111";
  var ngay = 2;
  var thang = 10;
  var dssv = ["Nguyễn Văn An111", "Trần Văn Bình", "Hà Văn Cường"];
  var ds2 = [
    { id: 1, hoten: "Nguyễn Văn An111", lop: "K19", email: "abc@1234.edu.vn" },
    { id: 2, hoten: "Trần Văn Bình", lop: "K19", email: "abc@1234.edu.vn" },
    { id: 3, hoten: "Hà Văn Cường", lop: "K19", email: "abc@cuong.edu.vn" },
    { id: 4, hoten: "Nguyễn Văn Dũng", lop: "K19", email: "abc@cuong.edu.vn" },
  ];

  return (
    <div className="App">
      <h1>Xin chào {tenlop}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <p>Danh sách sinh viên </p>
        {dssv.map((sv) => {
          return <p>{sv}</p>;
        })}
      </div>
      <div>
        <p>DANH SÁCH SINH VIÊN 2</p>
        <div>
          <table className="my-table">
            <tr>
              <td>Mã SV</td>
              <td>Họ tên</td>
              <td>Lớp</td>
              <td>Email</td>
            </tr>
            {ds2.map((sv) => {
              return (
                <tr>
                  <td>{sv.id}</td>
                  <td>{sv.hoten}</td>
                  <td>{sv.lop}</td>
                  <td>{sv.email}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};
export default Home;
