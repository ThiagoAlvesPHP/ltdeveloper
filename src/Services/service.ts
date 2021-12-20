// LIB
import * as Ic from 'react-icons/fa';

// ASSETs
import logo from '../Assets/logo.webp';
import banner from '../Assets/banner.webp';
import service1 from '../Assets/service1.webp';
import service2 from '../Assets/service2.webp';
import service3 from '../Assets/service3.webp';
import banner2 from '../Assets/banner2.webp';
import sl1 from '../Assets/sl1.webp';
import sl2 from '../Assets/sl2.webp';
import sl3 from '../Assets/sl3.webp';
import sl4 from '../Assets/sl4.webp';

const data = {
  menu: [
    {
      title: "Home",
      id: "#home"
    },
    {
      title: "Sobre",
      id: "#about"
    },
    {
      title: "Serviços",
      id: "#services"
    },
    {
      title: "Planos",
      id: "#plans"
    },
    {
      title: "Projetos",
      id: "#projects"
    },
    {
      title: "Contato",
      id: "#contact"
    }
  ],
  bannerPrimary: {
    logo: logo,
    quote: "A única maneira de fazer um grande trabalho é amando o que se faz.",
    author: "Steve Jobs",
    background: banner
  },
  about: {
    title: "Sobre - LTDeveloper",
    body: "Somos uma agência de desenvolvimento de sites, blog, sistemas, portfólios e temos como objetivo desenvolver sites com as melhores tecnologias do mercado para deixar seu site mais rápido e mais intuitivo. Um desenvolvimento de qualidade é essencial tanto para acelerar os processos de seus ganhos, quanto organizar sua empresa. O desenvolvimento de um site vai ajudar com certeza a propagar sua marca de maneira mais eficiente. Nosso desenvolvimento foca em dar a melhor experiência tanto aos seus usuários quanto a você faça agora mesmo um orçamento e tenha o melhor custo beneficio na criação de seu site, tenha um site profissional e totalmente responsivo. Quer um site de qualidade? A LTDeveloper tem para você."
  },
  services: [
    {
      title: "CRIAÇÃO DE SITES",
      body: "Você precisa de um site de qualidade, fácil de atualizar, e que caiba no seu orçamento, posso te ajudar a fazer sua empresa marcar presença na internet e gerar novos negócios.",
      background: service1,
      position: "right"
    },
    {
      title: "CRIAÇÃO DE BLOG'S",
      body: "Para você que deseja criar um blog profissional, que ajude a melhorar seu posicionamento nos mecanismos de busca com custo acessível e qualidade. Estou pronto para te atender.",
      background: service2,
      position: "left"
    },
    {
      title: "Criação de E-commerce",
      body: "E aí, precisa vender mais, você está no lugar certo e com a equipe certa para te ajudar a vender mais e agora pela internet. É hora de ter sua loja virtual e ampliar seus negócio.",
      background: service3,
      position: "right"
    }
  ],
  plans: {
    title: "Planos",
    data: [
      {
        price: 1.92,
        title: "Plano 1",
        type: "Mensal",
        benefits: [
          "Item 1",
          "Item 2",
        ]
      },
      {
        price: 2.31,
        title: "Plano 2",
        type: "Anual",
        benefits: [
          "Item 1",
        ]
      },
      {
        price: 3.00,
        title: "Plano 3",
        type: "Mensal",
        benefits: [
          "Item 1",
          "Item 2",
          "Item 3"
        ]
      }
    ]
  },
  bannerSecondary: {
    title: "A Tecnologia é o  Futuro!",
    background: banner2
  },
  projects: [
    {
      title: "Callnet - BA",
      background: sl1,
      link: "https://www.callnetba.net.br/"
    },
    {
      title: "Adson Show de Prêmios",
      background: sl2,
      link: "https://www.adsonrifas.com/"
    },
    {
      title: "Conexão Ativa",
      background: sl3,
      link: "https://www.conexaoativatelecom.com/"
    },
    {
      title: "Emanuel Premiações",
      background: sl4,
      link: "https://www.emanuelpremiacoes.com.br/"
    }
  ],
  companyInformation: [
    {
      Icon: Ic.FaMapMarkerAlt,
      title: "Localização:",
      body: "Rua Pracinio Ricardo da Silva, 103, Teotonio Calheira, Gandu/BA",
      link: false
    },
    {
      Icon: Ic.FaEnvelope,
      title: "E-mail:",
      body: "thiagoalves@hotmail.com",
      link: false
    },
    {
      Icon: Ic.FaPhone,
      title: "Celular:",
      body: "(73) 9 9941-2514",
      link: true
    }
  ],
  baseboard: {
    phrase: "Todos Direitos autorais reservados"
  }
}

export default data;