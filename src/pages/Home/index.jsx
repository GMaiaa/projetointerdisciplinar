import { Container, AboutContent, Section, Items } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Undraw from "../../assets/undraw.svg";
import { Card } from "../../components/Card";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      
      <AboutContent>
        <div>
          <h2>
            {" "}
           Realize a sua <span> encomenda </span> para
            <span> Retirada </span> ou <span> entrega </span>
          </h2>
          <p>
            Qualidade é a nossa prioridade. Com cuidado e dedicação,
            selecionamos os melhores produtos frescos e sazonais para você e a sua
            família.
          </p>
        </div>
        <img
          src={Undraw}
          alt="Ilustração de um homem com um carrinho de compras"
        />
      </AboutContent>

      <Section>
        <h1>Frutas</h1>
        <Items>
          <Card
            name="Maça"
            value="R$ 8,00"
            image="https://scfoods.fbitsstatic.net/img/p/maca-red-argentina-unidade-70942/257561.jpg?w=800&h=800&v=no-change&qs=ignore"
          />
          <Card
            name="Banana"
            value="R$ 7,00"
            image="data:image/jpeg;base64,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"
          />
          <Card
            name="Laranja"
            value="R$ 8,50"
            image="https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Laranja_lima_600x600[1]-1000x1000.jpg"
          />
          <Card
            name="Tangerina"
            value="R$ 8,00"
            image="https://global.cdn.magazord.com.br/vasoeflor/img/2022/07/produto/1063/muda-tangerina-montenegrina-90cm.jpg?ims=fit-in/800x800/filters:fill(white)"
          />
          <Card
            name="Uva"
            value="R$ 15,00"
            image="https://img.irroba.com.br/filters:fill(transparent):quality(80)/shoeboxs/catalog/80039.png"
          />
        </Items>
      </Section>

      <Section>
        <h1>Verduras</h1>
        <Items>
          <Card
            name="Alface"
            value="R$ 8,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100036---2000230000007---alface-crespa.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
          <Card
            name="Cebolinha"
            value="R$ 7,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100110---2001100000004---cebolinha.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
          <Card
            name="Brócolis"
            value="R$ 8,50"
            image="https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/brocolis-ninja_2020-04-14_17-02-21_0.jpg"
          />
          <Card
            name="Alho Poró  "
            value="R$ 8,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100048---2000350000000---alho-poro.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
          <Card
            name="Espinafre"
            value="R$ 7,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100128---2116220000008---espinafre.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
        </Items>
      </Section>

      <Section>
        <h1>Legumes</h1>
        <Items>
          <Card
            name="Batata"
            value="R$ 8,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100073---2000650000007---batata-inglesa.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
          <Card
            name="Chuchu"
            value="R$ 7,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/101030-chuchu-unidade.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
          <Card
            name="Beterraba"
            value="R$ 8,50"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100081.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
          <Card
            name="Aipim"
            value="R$ 8,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/0/100029---2000160000009---aipim.jpg?auto=webp&format=pjpg&width=160&height=200&fit=cover"
          />
          <Card
            name="Tomate"
            value="R$ 7,00"
            image="https://hortifruti.com.br/media/catalog/product/cache/e43ef0ed2520a1b4f5eb0225d3cc2507/1/5/152263.png?auto=webp&format=png&width=160&height=200&fit=cover"
          />
        </Items>
      </Section>

      <Section>
        <h1>Bebidas</h1>
        <ButtonText title="Ver mais" />
        <Items>
          <Card
            name="Água Mineral"
            value="R$ 2,00"
            image="https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/g/agua-mineral-crystal-500ml-7894900530001.jpg"
          />
          <Card
            name="Água c/ Gás"
            value="R$ 2,50"
            image="https://www.imigrantesbebidas.com.br/bebida/images/products/full/2894-agua-mineral-crystal-com-gas-500ml.jpg"
          />
          <Card
            name="Suco de Uva"
            value="R$ 6,50"
            image="https://18666.cdn.simplo7.net/static/18666/sku/suco-de-uva-tinto-suco-de-uva-aurora-tinto-integral-1-5lts-c-6--p-1624989709204.jpg"
          />
          <Card
            name="Chá Matte"
            value="R$ 5,00"
            image="https://res.cloudinary.com/piramides/image/upload/c_fill,h_564,w_395/v1/products/10243-cha-matte-leao-limao-pet-450ml-6un.20230925125505.png?_a=AAAOGGX"
          />
          <Card
            name="Yakult"
            value="R$ 3,00"
            image="https://emporiokaminski.com.br/wp-content/uploads/2020/06/yakult-80g.png"
          />
        </Items>
        
      </Section>

      <Section>
        <h1>Não Alimentar</h1>
        <Items>
          <Card
            name=""
            value="R$ 2,00"
            image="https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/g/agua-mineral-crystal-500ml-7894900530001.jpg"
          />
          <Card
            name="Água c/ Gás"
            value="R$ 2,50"
            image="https://www.imigrantesbebidas.com.br/bebida/images/products/full/2894-agua-mineral-crystal-com-gas-500ml.jpg"
          />
          <Card
            name="Suco de Uva"
            value="R$ 6,50"
            image="https://18666.cdn.simplo7.net/static/18666/sku/suco-de-uva-tinto-suco-de-uva-aurora-tinto-integral-1-5lts-c-6--p-1624989709204.jpg"
          />
          <Card
            name="Chá Matte"
            value="R$ 5,00"
            image="https://res.cloudinary.com/piramides/image/upload/c_fill,h_564,w_395/v1/products/10243-cha-matte-leao-limao-pet-450ml-6un.20230925125505.png?_a=AAAOGGX"
          />
          <Card
            name="Yakult"
            value="R$ 3,00"
            image="https://conteudo.imguol.com.br/c/noticias/58/2023/07/05/yakult-1688566224560_v2_3x4.jpg"
          />
        </Items>
      </Section>
      <Footer />
    </Container>
  );
}
