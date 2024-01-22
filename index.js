// Trường cấp 3 Lý Tự Trọng: 3000 học sinh
// var hocSinh1 = "Sơn", "Đạt","Minh","Huy"

// Mảng (Array)
// Mảng chưa có dữ liệu sẽ được gọi là mảng rỗng
// var arrHocSinh = [];
// trong mảng để ngăn cách các phần tử với nhau, sử dụng dấu (,)
// Trong mảng có vị trí index, giúp xác định các phần tử nằm trong mảng
//                  0      1       2      3      4
// var arrHocSinh = ['Sơn', 'Đạt', 'Minh', 'Huy', 'Long'];
// // Lấy dữ liệu trong mảng ra sử dụng
// var tenCuaSon = arrHocSinh[0];
// console.log(tenCuaSon);

// // Yêu cầu: tạo ra một mảng lưu trữ tên của các bạn nữ tham ngày hội khéo tay: Lan, Ngân, Linh, Quyên, Giao, Nam
// // Lấy ra tên bạn Ngân trong mảng và xuất ra một console.log là bạn Ngân là trưởng nhóm khéo tay
// // Yêu cầu đếm xem trong nhóm có tổng cộng bao nhiêu bạn
// // Bạn nào là bạn nằm cuối cùng
// // thay bạn Nam trong nhóm của chúng ta bằng bạn Kim
// var arrKheoTay = ['Lan', 'Linh', 'Nam', 'Giao', 'Quyên', 'Ngân', 'Trà'];
// var banNgan = arrKheoTay[5];
// console.log(`bạn ${banNgan} là trưởng nhóm khéo tay`);

// // Lấy ra tổng số phần tử trong mảng
// var soLuongThanhVien = arrKheoTay.length;
// // Vị trí index cuối cùng luôn nhỏ hơn độ dài mảng 1 đơn vị (vị trí index cuối cùng = độ dài mảng - 1)
// // var soLuongThanhVien = 0;
// for (var i = 0; i < arrKheoTay.length; i++) {
//   console.log(`xin chào bạn ${arrKheoTay[i]}`);
//   // cấu trúc điều kiện để kiểm tra xem nam nằm ở vị trí index số bao nhiêu
//   if (arrKheoTay[i] == 'Nam') {
//     console.log('Nam nằm ở đây', i);
//   }
// }
// var thanhVienCuoiCung = arrKheoTay[soLuongThanhVien - 1];
// arrKheoTay[2] = 'Kim';
// console.log(arrKheoTay);
// console.log(thanhVienCuoiCung);
// console.log(soLuongThanhVien);

// // Một số cách tương tác với mảng trong javascript
// // Thêm phần tử vào cuối mảng (Push)
// var sinhVienNgheo = ['Lâm', 'Sang', 'Sĩ', 'Hoàng', 'Bình'];
// sinhVienNgheo.push('Dân', 'Sĩ', 'Cường');
// var sinhVienNgheoCuoiCung = sinhVienNgheo.pop();
// console.log(sinhVienNgheo);
// console.log(sinhVienNgheoCuoiCung);
// // Thêm phần tử vào đầu mảng (unshift)
// sinhVienNgheo.unshift('Hằng', 'Hạ');
// console.log(sinhVienNgheo);
// sinhVienNgheo.shift();
// console.log(sinhVienNgheo);
// // Tìm xem Sĩ nằm ở đâu trong mảng
// var viTriCuaSi = sinhVienNgheo.indexOf('Sĩ');
// if (viTriCuaSi == -1) {
//   console.log('không có ông Sĩ nào hết');
// }
// console.log(viTriCuaSi);
// var viTriCuoiCungCuaSi = sinhVienNgheo.lastIndexOf('Sĩ');
// console.log(viTriCuoiCungCuaSi);

// // Phương thức giúp đảo ngược mảng và sắp xếp mảng
// var arrNumber = [4, 6, 20, 1, 53];
// arrNumber.reverse();
// console.log(arrNumber);
// arrNumber.sort(function (a, b) {
//   // return a - b; Tăng dần
//   // return b - a; Giảm dần
// });
// console.log(arrNumber);
// sinhVienNgheo.sort();
// console.log(sinhVienNgheo);

// var chuCai = ['a', 'h', 'z', 'g', 'u', 'k'];
// // chuCai.sort().reverse();
// chuCai.sort().reverse();
// console.log(chuCai);

// // Phương thức join (nối các phần tử trong mảng thành một chuỗi)
// var tenCongTy = ['Hồng', 'Phúc', 'Công', 'Ty'];
// var chuoiTenCongTy = tenCongTy.join(' ');
// console.log(chuoiTenCongTy);

// // Phương thức slice (giúp cắt một đoạn trên mảng đang có để tạo thành mảng mới)
// var monAn = [
//   'Bánh canh',
//   'Bún bò',
//   'Bún riêu',
//   'Bún chả', //3
//   'Cơm sườn',
//   'Mì Quảng',
// ];
// // vị trí bắt đầu cắt sẽ lấy dựa trên vị trí của phần tử đầu tiên cần cắt
// // vị trí ngưng cắt lúc nào cũng sẽ lấy lớn hơn vị trí của phần tử cuối cùng cần cắt 1 đơn vị
// // khi sử dụng slice, sẽ không ảnh hưởng tới mảng ban đầu mà là tạo ra một mảng mới dựa trên các phần tử muốn cắt của mảng ban đầu
// var monBun = monAn.slice(1, 4);
// console.log(monAn);
// console.log(monBun);

// // Hàm splice (giúp xoá một hoặc nhiều phần tử khỏi mảng)
// var arrPhone = ['I phone 14', 'Samsung S24', 'Bphone', 'Huawei', 'Redmi'];
// // truyền tham số đầu tiên đại diện cho vị trí bắt đầu xoá
// // tham số thứ 2 là số phần tử cần xoá
// // tham số thứ 3 sẽ là phần tử được thêm vào ngay vị trí bắt đầu xoá
// arrPhone.splice(2, 0, 'Samsung Galaxy Note10+');
// console.log(arrPhone);

// // Hàm concat (giúp nối nhiều mảng lại với nhau)
// var arrSinhVienNam = ['Đạt', 'Thành', 'Tùng'];
// var arrSinhVienNu = ['Tú', 'Ngọc', 'Hari Won'];
// var arrSinhVien = arrSinhVienNam.concat(arrSinhVienNu);
// console.log(arrSinhVien);

// // Bài tập 1: Đảo ngược chuỗi
// // Từ một chuỗi được cung cấp, các bạn hãy thực hiện đảo ngược chuỗi lại. Vd "hello" ==> "olleh"
// // Gợi ý, tìm cách để có thể tách chuỗi thành một mảng
// var chuoiDaoNguoc = 'Hello,Tiến,Đạt'; // ["H","e","l","l","o"]
// var mangKyTu = chuoiDaoNguoc.split('').reverse().join('');
// console.log(mangKyTu);
// function hamDaoNguocChuoi(string) {
//   return string.split('').reverse().join('');
// }

// var huhu = hamDaoNguocChuoi('Duy');
// console.log(huhu);

// // Bài tập 2: Tạo ra các option cho một select lựa chọn món ăn
// // Từ một mảng được cung cấp và một thẻ select trên giao diện, các bạn sẽ thực hiện tạo ra các option cho select đó dựa trên mảng món ăn
// var monAn2 = [
//   'Mì Sủi Cảo',
//   'Lẩu Dê',
//   'Bún đậu',
//   'Bún bò',
//   'Lẩu cá',
//   'Xiên bẩn',
// ];

// var eleSelect = document.getElementById('monAn');
// var content = '';
// // for (var i = 0; i < monAn2.length; i++) {
// //   console.log(monAn2[i]);
// //   content += `<option value="${monAn2[i]}">${monAn2[i]}</option>`;
// // }
// // console.log(content);
// // eleSelect.innerHTML = content;

// for (var i = 0; i < monAn2.length; i++) {
//   var option = document.createElement('option');
//   option.innerHTML = monAn2[i];
//   option.value = monAn2[i];
//   eleSelect.appendChild(option);
// }

// // Bài tập tổng hợp ôn với mảng
// // Dựa trên layout và đề được cung cấp ở slice số 39, các bạn sẽ hoàn thành các yêu cầu 1,2,3,4,5,7,9,10
var arrSoN = [];

// // Đầu tiên dom tới nút thêm số N và xử lí các hành động thêm dữ liệu vào mảng

function themSoNVaoMang() {
  console.log('hello');
  // xử lí lấy dữ liệu người dùng nhập
  var soN = document.getElementById('txt-soN').value * 1;
  arrSoN.push(soN);
  console.log(arrSoN);
  document.querySelector('.render_arr').innerHTML = arrSoN;
}

document.querySelector('.btn-success').onclick = themSoNVaoMang;

function tinhTongSoDuong() {
  // vòng lặp để duyệt qua từng phần tử có trong mảng
  var tong = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    // kiểm tra các phần tử xem phần tử nào lớn hơn 0
    if (arrSoN[i] > 0) {
      tong += arrSoN[i];
    }
  }
  console.log(tong);
  document.getElementById('kq1').innerHTML = tong;
}
document.getElementById('btn1').onclick = tinhTongSoDuong;

function demSoDuong() {
  var count = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    // kiểm tra các phần tử xem phần tử nào lớn hơn 0
    if (arrSoN[i] > 0) {
      count++;
    }
  }
  console.log(count);
  document.getElementById('kq2').innerHTML = count;
}
document.getElementById('btn2').onclick = demSoDuong;

function timSoNhoNhat() {
  // [4,7,9,11,31],var min = arrSoN[i](4)
  var min = arrSoN[0];
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] < min) {
      min = arrSoN[i];
    }
  }
  console.log(min);
  document.getElementById('kq3').innerHTML = min;
}
document.getElementById('btn3').onclick = timSoNhoNhat;

function timSoDuongNhoNhat() {
  // [4,7,9,11,31],var min = arrSoN[i](4)
  var minD = arrSoN[0];
  for (var z = 0; z < arrSoN.length; z++) {
    if (arrSoN[z] > 0) {
      minD = arrSoN[z];
      break;
    }
  }
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] < minD && arrSoN[i] >= 0) {
      minD = arrSoN[i];
    }
  }
  console.log(minD);
  if (minD < 0) {
    document.getElementById('kq4').innerHTML = "Không có số dương nhỏ nhất"
  } else document.getElementById('kq4').innerHTML = minD;
}
document.getElementById('btn4').onclick = timSoDuongNhoNhat;

function timSoChanCuoiCung() {
  var soChan = -1;
  for (var i = arrSoN.length - 1; i >= 0; i--) {
    if (arrSoN[i] % 2 == 0) {
      soChan = arrSoN[i];
      // break giúp thoát khỏi vòng lặp
      break;
    }
  }
  console.log(soChan);
  document.getElementById('kq5').innerHTML = soChan;
}
document.getElementById('btn5').onclick = timSoChanCuoiCung;

function doiChoHaiViTri() {
  console.log('huhu');
  // xử lí lấy dữ liệu người dùng nhập
  var soD = document.getElementById('txt-soD').value * 1;
  var soC = document.getElementById('txt-soC').value * 1;
  if (soD >= 0 && soD <= arrSoN.length && soC >= 0 && soC <= arrSoN.length) {
    var tam = arrSoN[soD];
    arrSoN[soD] = arrSoN[soC];
    arrSoN[soC] = tam;
    document.getElementById('kq6').innerHTML = arrSoN;
  } else document.getElementById('kq6').innerHTML = "Vị trí không hợp lệ"

}
document.getElementById('btn6').onclick = doiChoHaiViTri;

function sapXepMangTangDan () {
  arrSoN.sort(function(a,b) {
    return a - b;})
  document.getElementById('kq7').innerHTML = arrSoN;
}
document.getElementById('btn7').onclick = sapXepMangTangDan;

function ktSNT (n) {
  if (n <= 1) {
    return false;
  }
  for (var z = 2; z < Math.sqrt(n); z ++){
    if (n % z == 0) {
      return false;
    } 
  }
  return true;
}
function timSoNguyenTo () {
  var soNT = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (ktSNT(arrSoN[i])) {
      soNT = arrSoN[i];
      break;
    }
  }
  document.getElementById('kq8').innerHTML = soNT;
}
document.getElementById('btn8').onclick = timSoNguyenTo;

var arrSoN2 = [];
function themSoNVaoMang2() {
  console.log('hello');
  // xử lí lấy dữ liệu người dùng nhập
  var soN2 = document.getElementById('txt-soN2').value * 1;
  arrSoN2.push(soN2);
  console.log(arrSoN2);
  document.querySelector('.render_arr2').innerHTML = arrSoN2;
};
document.querySelector('.btn-danger').onclick = themSoNVaoMang2;

function demSoNguyenTo () {
  var count = 0;
  for (var i = 0; i < arrSoN2.length; i++){
    if (ktSNT(arrSoN2[i])) {
      count ++;
    }
  }
  document.getElementById('kq9').innerHTML = count;
}
document.getElementById('btn9').onclick = demSoNguyenTo;



function soSanhSo () {
  var demSoChan = 0;
  var demSoLe = 0;
  for (i = 0; i< arrSoN.length; i++) {
    if (arrSoN[i] % 2 == 0) {
      demSoChan ++;
    } else demSoLe ++;
  }
  if (demSoChan < demSoLe) {
    document.getElementById('kq10').innerHTML = "Số lẻ nhiều hơn số chẵn";
  } else document.getElementById('kq10').innerHTML = "Số chẵn nhiều hơn số lẻ";
};
document.getElementById('btn10').onclick = soSanhSo;
