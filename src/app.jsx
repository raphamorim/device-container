var phone = document.querySelectorAll('.Phone');

React.render(
  	<Device><Anuncio anuncio={anuncio} anunciante={anunciante} /></Device>, phone[0]
);

React.render(
  	<Device><Formulario anuncio={anuncio} anunciante={anunciante} /></Device>, phone[1]
);