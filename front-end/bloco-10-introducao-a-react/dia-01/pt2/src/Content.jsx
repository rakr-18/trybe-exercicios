import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return(
      <>
        {
          conteudos.map((item) => {
              return <> 
                  <p key={item.conteudo}>O conteúdo é {item.conteudo}</p>
                  <p key={item.status}>O status é {item.status}</p>
                  <p key={item.bloco}>O bloco é {item.bloco}</p>
              </>
          })
        }
      </>
    );
  }
}

export default Content;