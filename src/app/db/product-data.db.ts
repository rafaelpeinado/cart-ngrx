import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../products/models/product.model';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        id: 1,
        model: 'Tênis NMD_R1 V3',
        brand: 'Adidas',
        color: 'Cinza',
        description: 'Brincando com a transparência, este tênis adidas NMD_R1 V3 aprimora a expressão emblemática de tecnologia tática da linha NMD. O amortecimento BOOST é garantia de suporte a cada passo dado. E isso é ótimo para quem não consegue ficar muito tempo parado. Ele também é parcialmente encapsulado em TPU, combinando-se com plugues de TPU no calcanhar para indicar que realmente é um NMD. O cabedal cortado a laser e os detalhes bordados reinventam o estilo icônico.',
        price: 1199.99,
        quantity: 5,
        size: '42',
        urlImage: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/39dd5ea428fb4a04b039aecb00fd070d_9366/Tenis_NMD_R1_V3_Cinza_GY4146_04_standard.jpg'
      },
      {
        id: 2,
        model: 'Tênis Sean Wotherspoon X Hot Wheels Superturf',
        brand: 'Adidas',
        color: 'Branco',
        description: 'Sean Wotherspoon e Hot Wheels. A combinação perfeita. Reunindo três marcas icônicas na evolução de um modelo muito cobiçado, este tênis adidas mistura a cultura dos anos 90 com uma estética de aventura e o ponto de vista visionário do designer. Tudo isso fica claro na estampa chamativa, nos apliques aderentes permutáveis e nas sobreposições que mudam de cor ao sol.',
        price: 999.99,
        quantity: 10,
        size: '42',
        urlImage: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/14c1a9a5599c4b0797a5ae2700f41cef_9366/Tenis_Sean_Wotherspoon_x_Hot_Wheels_Superturf_Branco_GX9682_04_standard.jpg'
      },
      {
        id: 3,
        model: 'Tênis Jordan Air 200E',
        brand: 'Nike',
        color: 'Dourado',
        description: '',
        price: 899.99,
        quantity: 2,
        size: '42',
        urlImage: 'https://imgnike-a.akamaihd.net/1300x1300/013029BP.jpg'
      },
      {
        id: 4,
        model: 'Tênis Jordan Zion 2',
        brand: 'Nike',
        color: 'Bege',
        description: '',
        price: 1199.99,
        quantity: 1,
        size: '42',
        urlImage: 'https://imgnike-a.akamaihd.net/1300x1300/022858BP.jpg'
      },
      {
        id: 5,
        model: 'Tênis Fila Ray Tracer Tr',
        brand: 'Fila',
        color: 'Marrom',
        description: '',
        price: 479.99,
        quantity: 10,
        size: '42',
        urlImage: 'https://fila.vtexassets.com/arquivos/ids/859911/F01L095_5187.jpg?v=637878686930870000'
      }
    ];
    return { products };
  }
}
