import Link from 'next/link';
import {useEffect, useState} from 'react';
import Head from 'next/head';

// SSG - Static Site Generation
// SSR - Server Side Rendering

// Em modo dev roda a cada acesso

// Roda a cada acesso
//export async function getServerSideProps() {

// Injeta as props no component
// Conteúdo estático
// Rodado só no build
export async function getStaticProps() {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then((response) => {
      //console.log(response.json());
      return response.json();
    }).then((responseJson) => {
      return responseJson;
    });

  return {
    props: {
      faq
    },
  };
}

export default function FAQPage({faq}: any) {

  console.log(faq);

  /*const [faq, setFaq] = useState([]);
  useEffect(() => {
  }, []);*/

  return (
    <div>
      <Head>
        <title>FAQ- Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href="/">
        Ir para a home
      </Link>
      <ul>
        {faq.map( ({answer, question} : {answer: string, question: string}) => (
          <li key={question}>
            <article>
              <h2> {question} </h2>
              <p> {answer} </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}