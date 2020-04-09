import { ConfigClass } from '../classes/ConfigClass';

let caminho = `${ConfigClass.getUrlApi().toString()}/galeria/`;

export default class GaleriaService {
  constructor() {
    //
  }

  static getTodos() {
    return fetch(caminho).then((response) => {
      return response.json();
    });
  }
  static adicionar(formData) {
    return fetch(caminho, {
      method: 'POST',
      body: formData,
    }).then((response) => {
      return response.json();
    });
  }
}
