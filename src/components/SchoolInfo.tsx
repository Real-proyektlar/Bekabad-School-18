import {
  SchoolInfoImg1,
  SchoolInfoImg2,
  SchoolInfoImg3,
  SchoolInfoImg4,
} from "../assets/images/jpg";

const SchoolInfo = () => {
  return (
    <section className="school-info">
      <div className="container">
        <div className="school-info__content">
          <h2 className="school-info__content-title">Maktabimiz haqida</h2>
          <hr className="school-info__content-horizontal-rule" />
          <p className="school-info__content-text">
            {" "}
            2019-yil 30-dekabrdagi 1202-sonli buyrug‘i bilan tasdiqlangan
            «Toshkent davlat iqtisodiyot universitetining Vasiylik kengashi
            to‘g‘risidagi nizom»ga muvofiq 2021-yil shtatlar jadvalini tuzishda
            universitetning o‘z oldiga qo‘ygan strategiyasi hamda ish
            unumdorligini yanada oshirish va samarali tashkil 2019-yil
            30-dekabrdagi 1202-sonli{" "}
          </p>
          <a className="school-info__content-btn" href="#" role="button">
            Batafsil
          </a>
        </div>
        <ul className="school-info-images">
          <li className="school-info-images__item">
            <img
              src={SchoolInfoImg1}
              title="18 - maktab haqida"
              alt="18 - maktab haqida 1 - rasm"
              className="school-info-images__item-img"
            />
          </li>
          <li className="school-info-images__item">
            <img
              src={SchoolInfoImg2}
              title="18 - maktab haqida"
              alt="18 - maktab haqida 2 - rasm"
              className="school-info-images__item-img"
            />
          </li>
          <li className="school-info-images__item">
            <img
              src={SchoolInfoImg3}
              title="18 - maktab haqida"
              alt="18 - maktab haqida 3 - rasm"
              className="school-info-images__item-img"
            />
          </li>
          <li className="school-info-images__item">
            <img
              src={SchoolInfoImg4}
              title="18 - maktab haqida"
              alt="18 - maktab haqida 4 - rasm"
              className="school-info-images__item-img"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SchoolInfo;
