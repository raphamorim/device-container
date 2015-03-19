var anuncio = {
   "rotulo": "Seguro de automóvel",
   "slug": "seguro-automovel",
   "key": "o:smartia:seguro-automovel",
   "anuncianteKey": "a:smartia",
   "valor": 150,
   "regiao": {
      "estados": "todos"
   },
   "categorias": [
      {
         "categoria": "Seguros",
         "key": "seguros",
         "nome": "Seguros"
      },
      {
         "categoria": "Seguros / Automóvel",
         "key": "seguros/automovel",
         "nome": "Seguros"
      }
   ],
   "descricao": "A Smartia faz a cotação do seu seguro em poucos minutos! É rápido, fácil e gratuito.<br /><br />\nA Smartia é uma plataforma online de cotação de seguros para automóveis em oito seguradoras. O serviço é gratuito e você pode fazer a simulação do preço da apólice em cada seguradora, sem sair de casa. Você poupa tempo e dinheiro e escolhe a melhor seguradora para cobrir seu veículo.\n<br /><br />\nA Smartia trabalha em parceria com as principais seguradoras do Brasil. Entre as principais estão a Allianz, Cardif, Bradesco, HDI, Liberty, Maritima, Tokio Marine e Zurich. Por meio de uma ferramenta online, é possível comparar o valor da franquia entre todas essas empresas.",
   "interno": {
      "valorTicketMedio": 1500,
      "valorComissao": 246
   },
   "condicoes": [
      "Para você receber R$150 o cliente indicado deve pagar a primeira parcela do seguro. "
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
         },
         {
            "campos": [
               {
                  "tipo": "paragrafo",
                  "html": "2. Dados do seguro"
               },
               {
                  "tipo": "opcoes",
                  "id": "ja_possui_seguro",
                  "rotulo": "Já possui seguro?",
                  "obrigatorio": true,
                  "opcoes": [
                     {
                        "valor": "sim",
                        "rotulo": "Sim"
                     },
                     {
                        "valor": "nao",
                        "rotulo": "Não"
                     },
                     {
                        "valor": "nao_sei",
                        "rotulo": "Não sei"
                     }
                  ]
               }
            ]
         }
      ]
   }
};

var anunciante = {
   "nome": "Smartia Seguros Online",
   "slug": "smartia",
   "key": "a:smartia",
   "logo": {
      "tipo": "img",
      "src": {
         "2x": "/assets/anunciantes/Smartia@2x_2.png?hashing=0b4cc0d2090dddbe6af059da50431bb396ec9dde0dd79e5cd6e3dcb8bb4dbcc5"
      }
   },
   "tema": {
      "fundo": "#F8B431"
   }
};