var anuncio = {
   "rotulo": "Residência de Espanha\nÁguas Claras - DF",
   "slug": "residencia-espanha",
   "key": "o:rossi:residencia-espanha",
   "anuncianteKey": "a:rossi",
   "valor": 3116,
   "regiao": {
      "estadosPermitidos": [
         "DF"
      ]
   },
   "categorias": [
      {
         "categoria": "Imóvel",
         "key": "imovel",
         "nome": "Imóvel"
      },
      {
         "categoria": "Imóvel / Compra",
         "key": "imovel/compra",
         "nome": "Imóvel"
      }
   ],
   "descricao": "Compre um apartamento na Avenida Jacarandá, em Águas Claras, DF. O condomínio oferece: salão de jogos, salão de festas, fitness, brinquedoteca, espaço gourmet, piscina infantil, salão de festas infantil, piscina com raia.",
   "interno": {
      "valorTicketMedio": 380000,
      "valorComissao": 6232
   },
   "condicoes": [
      "Indique um apartamento e ganhe R$ 3.116 quando o comprador efetuar o pagamento da primeira parcela do imóvel."
   ],
   "midias": [
      {
         "tipo": "img",
         "src": {
            "2x": "/assets/anuncios/capa@2x.png?hashing=e13c31b25942d2ed4e41a748446ea241438158d12164d0dc77b62466a2fba6bb"
         }
      },
      {
         "tipo": "img",
         "src": {
            "2x": "/assets/anuncios/academia@2x.png?hashing=e19f60ea0fd843b9d3c6aac7092d2caef38641481bc8bd9871668d4879f858bb"
         }
      },
      {
         "tipo": "img",
         "src": {
            "2x": "/assets/anuncios/kids@2x.png?hashing=a5876629cb9ea7c5806ade1a5c258d8c3ec4a4ae7be80624814ed899c5f01bee"
         }
      }
   ],
   "secoes": [
      {
         "tipo": "detalhamento",
         "rotulo": "Ficha técnica",
         "linhas": [
            {
               "detalhe": "Dormitórios",
               "descricao": "2 a 4 dormitórios"
            },
            {
               "detalhe": "Área",
               "descricao": "66 a 181 m²"
            },
            {
               "detalhe": "Suítes",
               "descricao": "1 e 2 suítes"
            },
            {
               "detalhe": "Vagas",
               "descricao": "1 a 3 vagas"
            },
            {
               "detalhe": "Preço",
               "descricao": "Preço sob consulta."
            }
         ]
      },
      {
         "tipo": "mapa",
         "androidUrl": "geo:-15.84338,-48.03002?z=16",
         "url": "https://www.google.com/maps/dir//-15.84338,-48.03002/@-15.84338,-48.03002,16z",
         "imagem": {
            "tipo": "img",
            "src": {
               "2x": "http://maps.googleapis.com/maps/api/staticmap?center=-15.84338,-48.03002&zoom=16&scale=false&size=600x300&maptype=roadmap&sensor=false&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xf30000%7Clabel:%7C-15.84338,-48.03002&hashing=mapa.600x300.-15.84338.-48.03002.16"
            }
         }
      }
   ],
   "formulario": {
      "api_version": "1",
      "secoes": [
         {
            "campos": [
               {
                  "tipo": "paragrafo",
                  "html": "1. Dados da pessoa indicada"
               },
               {
                  "tipo": "texto",
                  "id": "nome",
                  "rotulo": "Nome completo",
                  "obrigatorio": true
               },
               {
                  "tipo": "telefone",
                  "id": "telefone",
                  "rotulo": "Telefone (com DDD)",
                  "obrigatorio": true
               },
               {
                  "tipo": "email",
                  "id": "email",
                  "rotulo": "E-mail",
                  "obrigatorio": true
               }
            ]
         }
      ]
   }
};

var anunciante = {
   "nome": "Rossi",
   "slug": "rossi",
   "key": "a:rossi",
   "logo": {
      "tipo": "img",
      "src": {
         "2x": "/assets/anunciantes/logo@2x.png?hashing=aa8fa2901eb5a21435edfb6e2b1fc00960be2ff1c8fb241915784ce3a4c3940d"
      }
   },
   "tema": {
      "fundo": "#CF1A27"
   }
};