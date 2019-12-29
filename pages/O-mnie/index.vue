<template>
  <div class="about-me">
    <div class="am-image">
      <img
        src="~/assets/img/logo-white.png"
        alt="white-big.png"
        class="white-big"
      />
      <img
        src="~/assets/img/logo-male-biale.png"
        alt="white-small.png"
        class="white-small"
      />
      <img
        src="~/assets/img/logo-kolorowe2.png"
        alt="color-big.png"
        class="color-big"
      />
    </div>
    <div class="out-about">
      <div class="ins-about">
        <h2>Youtuber?</h2>
        <p>
          Też! Poza tym jestem wędkarzem, spinningistą. Pasjonatem natury,
          podróżnikiem. Fotografem, zapewne też reżyserem, kamerzystą oraz
          montarzystą.
        </p>
      </div>
      <div class="ins-about">
        <h2>Logo?</h2>
        <p>
          Wiele osób pyta mnie, o co chodzi z tym logo? Ba! Wiele osób mówi
          wprost, że nie wie co ono przedstawia. Boleń jest dla mnie najbardziej
          cwanym drapieżnikiem, który pływa w polskich rzekach, dlatego jest mi
          go tak trudno złowić. Stąd postanowiłem w taki sposób wyeksponować tą
          tą rybę i wstawić ją w pierwszy plan mojego logo.
        </p>
      </div>
      <div class="ins-about">
        <h2>Wody?</h2>
        <p>
          Nie, dziękuję. Whisky poproszę! Uwielbiam dzikie tereny wsród
          Bieszczadzkich rzek. Jednakże staram się tam sam nie zapuszczać,
          ponieważ nie chciałbym trafić na niedźwiedzia i mu krzywdy zrobić.
          Kocham jezioro Solińskie za jego rozległość i tajemnicze stwory,
          żyjące wewnątrz. Podziwiam zielone tereny wzdłuż rzeki Wisłok, za
          bujną roślinność i wodną różnorodność. Fascynuje mnie rzeka San, jej
          wartki nurt oraz potokowe skurkobańce. ...nie ma takiej wody, której
          bym nie odpuścił!
        </p>
      </div>
      <div class="ins-about">
        <h2>Ryby?</h2>
        <p>
          Zdecydowanie pstrągi! ...ich dzikość "podnieca mnie" za każdym atakiem
          i holem. Sandacze! ...ich pstryki powodują gęsią skórkę na moim
          łokciu. Szczupaki! ...nie mogę się doczekać widoku, kiedy jego pysk
          będzie większy od mojego. Sumy! ...chciałbym, żeby kiedyś jeden mi
          wędkę złamał:)
        </p>
      </div>
    </div>
    <div class="d-fishing">
      <div class="bg-fishing"></div>

      <h2>fishing with makarony7</h2>
      <p>
        Makarony. Tak kiedyś kolega Marcin nazywał mnie dla śmiechu, będąc
        nastolatkiem. I właśnie ten nick od razu przyszedł mi do głowy, gdy
        zastanawiałem się nad nazwą kanału. 7? Ot, tak bez przyczyny lubię tą
        liczbę. Fishing with makarony7! To jestem ja i zapraszam na hobbystyczny
        kanał wędkarski na youtubie!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)
  }
}
</script>

<style lang="less" scoped>
.am-image {
  width: 30%;
  float: left;
  position: relative;
  margin-right: 30px;
  margin-bottom: 30px;
  img {
    max-width: 100%;
    height: auto;
  }
  .white-small,
  .color-big {
    position: absolute;
    top: 0;
    left: 0;
    .transition-duration(0.5s);
  }
  &::after {
    font-family: 'fontello';
    content: '\e804';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-size: 40px;
    opacity: 1;
    color: red;
    .transition-duration(0.5s);
  }
  &:hover {
    .white-small,
    .color-big {
      opacity: 1;
    }
    &::after {
      opacity: 0;
      font-size: 10px;
    }
  }
  .white-small {
    opacity: 0;
    z-index: 3;
  }
  .color-big {
    opacity: 0;
    z-index: 2;
  }
}
.ins-about {
  margin-bottom: 40px;
  h2 {
    margin-bottom: 15px;
  }
}
.d-fishing {
  position: relative;
  .bg-fishing {
    background-image: url('/img/s-img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
    filter: grayscale(1) brightness(0.3);
  }
  h2,
  p {
    margin: 0 30px;
    max-width: 500px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  h2 {
    font-size: 50px;
    color: red;
  }
  p {
    display: none;
  }
}
</style>
