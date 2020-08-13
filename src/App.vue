<template>
  <div id="app">
    <PageHeader/>
    <SliderSection/>
    <AboutSection/>
    <NewsSection/>
    <SubscribeForm/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader/PageHeader';
import SliderSection from './components/SliderSection/SliderSection';
import AboutSection from './components/AboutSection/AboutSection';
import NewsSection from './components/NewsSection/NewsSection';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import PageFooter from './components/PageFooter/PageFooter';

export default {
  name: 'App',
  components: {
    PageHeader,
    SliderSection,
    AboutSection,
    NewsSection,
    SubscribeForm,
    PageFooter
  }
}
</script>

<style lang="scss">
    @import '~normalize.css';



    @font-face {
        font-family: 'Montserrat';
        font-weight: 400;
        src: url('assets/fonts/Montserrat-Regular.ttf') format("truetype");
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 500;
        src: url('assets/fonts/Montserrat-Medium.ttf') format("truetype");
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 600;
        src: url('assets/fonts/Montserrat-SemiBold.ttf') format("truetype");
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 700;
        src: url('assets/fonts/Montserrat-Bold.ttf') format("truetype");
    }

</style>
