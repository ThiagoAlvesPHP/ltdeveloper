// LIBs
import { useEffect, useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import * as Ic from 'react-icons/fa';

// STYLEs
import * as C from './style';
import 'swiper/swiper.min.css';

// SERVICE
import service from '../../Services/service';

// COMPONENTs
import ServiceItem from '../../Components/ServiceItem';
// import FlatItem from '../../Components/FlatItem';
import ContactItem from '../../Components/ContactItem';
import Carousel from '../../Components/Carousel';
import Menu from '../../Components/Menu';

// FORM
import ContactForm from '../../Forms/Contact';

function Home() {

  // REFs
  const buttonScrollTopRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const abstractRef = useRef<HTMLDivElement>(null);
  const abstract1Ref = useRef<HTMLDivElement>(null);
  const abstract2Ref = useRef<HTMLDivElement>(null);
  const abstract3Ref = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // date
  const dt = new Date();

  // STATE
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    window.onscroll = (e) => scroll(e);
  }, [])

  // Animações de scroll
  function scroll(e: Event) {
    setTop(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop >= 400) {
      buttonScrollTopRef.current?.classList.remove('hidden');
      aboutRef.current?.classList.remove('hidden');
      abstractRef.current?.classList.remove('hidden');

      abstract2Ref.current?.classList.add('rotate');
      abstract3Ref.current?.classList.add('rotate');
    } else {
      buttonScrollTopRef.current?.classList.add('hidden');
    }

    // if(document.documentElement.scrollTop >= 2705 - 140) {
    //   plansRef.current?.classList.remove('hidden'); 
    // }

    if (document.documentElement.scrollTop >= 3255 - 80) {
      projectsRef.current?.classList.remove('hidden');
    }

    if (document.documentElement.scrollTop >= 3705 - 80) {
      contactRef.current?.classList.remove('hidden');
    }
  }

  // Fazer o scroll ir para o topo
  function goToScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <C.Container>
      <C.Header id="home" background={service.bannerPrimary.background}>
        <div className="background-shadow">
          <Menu data={service.menu} scroll={top} />

          <div className="banner">
            <img src={service.bannerPrimary.logo} alt="logo-do-website" className="logo" />
            <p className="quote">“{service.bannerPrimary.quote}”</p>
            <span className="author">{service.bannerPrimary.author}</span>
          </div>
        </div>
      </C.Header>

      <div className='whatsapp'>
        <a href="https://api.whatsapp.com/send?phone=5573999412514&text=Eu%20preciso%20de%20um%20or%C3%A7amento" className='link' target='_blank'>
          <div className='text'>Fale Conosco</div> <Ic.FaWhatsapp />
        </a>
      </div>

      <C.Content>
        <C.About id="about">
          <div className="container">
            <div className="content-about hidden" ref={aboutRef}>
              <h1 className="title">{service.about.title}</h1>
              <p className="body">{service.about.body}</p>
            </div>
            <div className="abstract-about hidden" ref={abstractRef}>
              <div className="square1" ref={abstract1Ref}></div>
              <div className="square2" ref={abstract2Ref}></div>
              <div className="square3" ref={abstract3Ref}></div>
            </div>
          </div>
        </C.About>

        <C.Services id="services">
          {
            service.services.map((item, index) => (
              <ServiceItem data={item} key={index.toString()} top={top} />
            ))
          }
        </C.Services>

        {/* <C.Plans id="plans">
          <div className="container hidden" ref={plansRef}>
            <h3 className="title">{service.plans.title}</h3>
            <div className="plans-content desktop">
              {
                service.plans.data.map((item, index)=>(
                  <FlatItem data={item} key={index.toString()}/>
                ))
              }
            </div>

            <div className="plans-content mobile">
              <Swiper
                slidesPerView={document.documentElement.clientWidth <= 768 ? 1 : 2}
              >
                {
                  service.plans.data.map((item, index)=>(
                    <SwiperSlide key={index.toString()}>
                      <FlatItem data={item}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </C.Plans> */}

        <C.BannerSecondary background={service.bannerSecondary.background}>
          <div className="background-shadow">
            <h1 className="title">{service.bannerSecondary.title}</h1>
          </div>
        </C.BannerSecondary>

        <C.Projects id="projects">
          <div className="container hidden" ref={projectsRef}>
            <h1 className="title">Projetos</h1>
            <div className="slider-area">
              <Carousel data={service.projects} />
            </div>
          </div>
        </C.Projects>

        <C.Contact id="contact">
          <div className="container hidden" ref={contactRef}>
            <div className="info-company">
              {
                service.companyInformation.map((item, index) => (
                  <ContactItem data={item} key={index.toString()} />
                ))
              }
              <div className="map-company">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.430944551873!2d-39.49374808516957!3d-13.752865990346772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73f1712267349bb%3A0x1125b6fd20a75f36!2sAlbicod!5e0!3m2!1spt-BR!2sbr!4v1637936111312!5m2!1spt-BR!2sbr" title="Localização da LTDeveloper" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
              </div>
            </div>
            <div className="contact-area">
              <ContactForm />
            </div>
          </div>
        </C.Contact>
      </C.Content>

      <C.Baseboard>
        <p className="quote">©2021-{dt.getFullYear()} LT Developer - Todos os direitos reservados</p>
      </C.Baseboard>

      <C.GoToScrollTop className="hidden" onClick={goToScrollTop} ref={buttonScrollTopRef}>
        <Ic.FaChevronUp />
      </C.GoToScrollTop>
    </C.Container>
  )
}

export default Home;