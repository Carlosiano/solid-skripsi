import {
  aboutBanner,
  aboutShape1,
  aboutShape2,
  aboutShape3,
  aboutShape4,
  arrowForwardOutline,
  blogBg,
  blogShape,
  checkmarkDoneOutline,
  heroBanner1,
  heroBanner2,
  heroBg,
  heroShape2,
  play,
  videoBanner,
  videoBg,
  videoShape1,
  videoShape2,
} from "../assets/images";
import {
  alasanKuliah,
  categories,
  fasilitas,
  infoPMB,
  kampus,
} from "../assets/js/data";

export default function Main() {
  return (
    <>
      <main>
        <article>
          {/* - #HERO */}

          <section
            class="section hero has-bg-image"
            id="home"
            aria-label="home"
            style={`background-image: url(${heroBg})`}
          >
            <div class="container">
              <div class="hero-content">
                <h1 class="h1 section-title">
                  Masa depan <span class="span">cerah</span> Anda adalah misi
                  kami
                </h1>

                <p class="hero-text">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit.
                </p>

                <div style="display: flex; gap: 1rem">
                  <a href="#" class="btn has-before">
                    <span class="span">Daftar Sekarang</span>
                  </a>

                  <a href="#" class="btn-second has-before">
                    <span class="span">Panduan PMB</span>
                    <img
                      src={arrowForwardOutline}
                      alt=""
                      class="ion-icon"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <figure class="hero-banner">
                <div
                  class="img-holder one"
                  style={{ "--width": 270, "--height": 300 }}
                >
                  <img
                    src={heroBanner1}
                    width="270"
                    height="300"
                    alt="hero banner"
                    class="img-cover"
                  />
                </div>

                <div
                  class="img-holder two"
                  style={{ "--width": 240, "--height": 370 }}
                >
                  <img
                    src={heroBanner2}
                    width="240"
                    height="370"
                    alt="hero banner"
                    class="img-cover"
                  />
                </div>

                <img
                  src={heroShape2}
                  width="622"
                  height="551"
                  alt=""
                  class="shape hero-shape-2"
                />
              </figure>
            </div>
          </section>

          {/* - #CATEGORY */}

          <section class="section category" id="jenjang" aria-label="category">
            <div class="container">
              <p class="section-subtitle">Pilihan Jenjang Pendidikan</p>

              <h2 class="h2 section-title">
                Fakultas Ilmu Komputer <span class="span">(FIK)</span>
              </h2>

              <p class="section-text">Program Sarjana (S1)</p>

              <ul class="grid-list">
                {categories[0].map((item) => (
                  <li>
                    <div
                      class="category-card"
                      style={`--color: ${item.color[0]}, ${item.color[1]}%, ${item.color[2]}%`}
                    >
                      <div class="card-icon">
                        <img
                          src={item.img}
                          width="40"
                          height="40"
                          loading="lazy"
                          alt={item.title}
                          class="img"
                        />
                      </div>

                      <h3 class="h3">
                        <a href="#" class="card-title">
                          {item.title}
                        </a>
                      </h3>

                      <p class="card-text">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p class="section-text">Program Diploma (D3)</p>

              <ul class="grid-list">
                {categories[0].map((item) => (
                  <li>
                    <div
                      class="category-card"
                      style={`--color: ${item.color[0]}, ${item.color[1]}%, ${item.color[2]}%`}
                    >
                      <div class="card-icon">
                        <img
                          src={item.img}
                          width="40"
                          height="40"
                          loading="lazy"
                          alt={item.title}
                          class="img"
                        />
                      </div>

                      <h3 class="h3">
                        <a href="#" class="card-title">
                          {item.title}
                        </a>
                      </h3>

                      <p class="card-text">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* - #ABOUT */}

          <section class="section about" id="why" aria-label="about">
            <div class="container">
              <figure class="about-banner">
                <div
                  class="img-holder"
                  style={{ "--width": 520, "--height": 370 }}
                >
                  <img
                    src={aboutBanner}
                    width="520"
                    height="370"
                    loading="lazy"
                    alt="about banner"
                    class="img-cover"
                  />
                </div>

                <img
                  src={aboutShape1}
                  width="360"
                  height="420"
                  loading="lazy"
                  alt=""
                  class="shape about-shape-1"
                />

                <img
                  src={aboutShape2}
                  width="371"
                  height="220"
                  loading="lazy"
                  alt=""
                  class="shape about-shape-2"
                />

                <img
                  src={aboutShape3}
                  width="722"
                  height="528"
                  loading="lazy"
                  alt=""
                  class="shape about-shape-3"
                />
              </figure>

              <div class="about-content">
                <p class="section-subtitle">Why?</p>

                <h2 class="h2 section-title">
                  Alasan <span class="span">Mengapa</span> Kuliah di UT?
                </h2>

                <p class="section-text"></p>

                <ul class="about-list">
                  {alasanKuliah.map((item) => (
                    <li class="about-item">
                      <img
                        src={checkmarkDoneOutline}
                        alt=""
                        class="ion-icon"
                        aria-hidden="true"
                      />
                      <span class="span">{item}</span>
                    </li>
                  ))}
                </ul>

                <img
                  src={aboutShape4}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt=""
                  class="shape about-shape-4"
                />
              </div>
            </div>
          </section>

          {/* - #Fasilitas */}

          <section class="section course" id="fasilitas" aria-label="course">
            <div class="container">
              <p class="section-subtitle">Fasilitas Kampus</p>

              <h2 class="h2 section-title">Nikmati fasilitas yang tersedia</h2>

              <ul class="grid-list">
                {fasilitas.map((item) => (
                  <li>
                    <div class="course-card">
                      <figure
                        class="card-banner img-holder"
                        style={{ "--width": 370, "--height": 220 }}
                      >
                        <img
                          src={item.img}
                          width="370"
                          height="220"
                          loading="lazy"
                          alt="Build Responsive Real- World Websites with HTML and CSS"
                          class="img-cover"
                        />
                      </figure>
                      <div class="card-content">
                        <span class="badge">{item.title}</span>

                        <h3 class="h3">
                          <a href="#" class="card-title-fasilitas">
                            {item.desc}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#" class="btn has-before">
                <span class="span">Lihat lebih banyak</span>
                <img
                  src={arrowForwardOutline}
                  alt=""
                  class="ion-icon"
                  aria-hidden="true"
                />
              </a>
            </div>
          </section>

          {/* INFO PMB */}

          <section class="section course" id="info" aria-label="course">
            <div class="container">
              <p class="section-subtitle">Info PMB</p>
              <h2 class="h2 section-title">Informasi seputar PMB</h2>
              <ul class="grid-list">
                {infoPMB.map((item) => (
                  <li style="padding-top: 100px">
                    <div class="blog-card">
                      <div class="card-content">
                        <a href="#" class="card-btn" aria-label="read more">
                          <img
                            src={arrowForwardOutline}
                            alt=""
                            class="ion-icon"
                            aria-hidden="true"
                          />
                        </a>
                        <h3 class="h3">
                          <a href="#" class="card-title">
                            {item}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" class="btn-second has-before">
                <img
                  src={arrowForwardOutline}
                  alt=""
                  class="ion-icon"
                  aria-hidden="true"
                />
              </a>
            </div>
          </section>

          {/* - #VIDEO */}

          <section
            class="video has-bg-image"
            aria-label="video"
            style={`background-image: url(${videoBg})`}
          >
            <div class="container">
              <div class="video-card">
                <div
                  class="video-banner img-holder has-after"
                  style={{ "--width": " ", "--height": " " }}
                >
                  <img
                    src={videoBanner}
                    width="970"
                    height="550"
                    loading="lazy"
                    alt="video banner"
                    class="img-cover"
                  />

                  <button class="play-btn" aria-label="play video">
                    <img
                      src={play}
                      alt=""
                      class="ion-icon"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <img
                  src={videoShape1}
                  width="1089"
                  height="605"
                  loading="lazy"
                  alt=""
                  class="shape video-shape-1"
                />

                <img
                  src={videoShape2}
                  width="158"
                  height="174"
                  loading="lazy"
                  alt=""
                  class="shape video-shape-2"
                />
              </div>
            </div>
          </section>

          {/* - #BLOG */}

          <section
            class="section blog has-bg-image"
            id="blog"
            aria-label="blog"
            style={`background-image: url(${blogBg})`}
          >
            <div class="container">
              <p class="section-subtitle">Kampus</p>

              <h2 class="h2 section-title">Cabang Kampus</h2>

              <ul class="grid-list">
                {kampus.map((item) => (
                  <li>
                    <div class="blog-card">
                      <figure
                        class="card-banner img-holder has-after"
                        style={{ "--width": 370, "--height": 370 }}
                      >
                        <img
                          src={item.img}
                          width="370"
                          height="370"
                          loading="lazy"
                          alt="Become A Better Blogger: Content Planning"
                          class="img-cover"
                        />
                      </figure>

                      <div class="card-content">
                        <a href="#" class="card-btn" aria-label="read more">
                          <img
                            src={arrowForwardOutline}
                            alt=""
                            class="ion-icon"
                            aria-hidden="true"
                          />
                        </a>

                        <a href="#" class="card-subtitle">
                          {item.title}
                        </a>

                        <h3 class="h3">
                          <a href="#" class="card-title">
                            {item.alamat}
                          </a>
                        </h3>
                        <p class="card-text">{item.telp}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <img
                src={blogShape}
                width="186"
                height="186"
                loading="lazy"
                alt=""
                class="shape blog-shape"
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
